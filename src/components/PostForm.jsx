/* eslint-disable react/prop-types */
import styles from "./PostList.module.scss";

export function PostForm({ handleSubmit, tagsLoading, tagsError, tagsData }) {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="title"
        placeholder="Enter title for your post"
        className={styles.postbox}
      />
      <div className={styles.tags}>
        {tagsLoading && <div>Loading...</div>}
        {tagsError && <div>Error: {tagsError.message}</div>}
        {tagsData && (
          <>
            {tagsData?.map((tag) => (
              <span key={tag} className={styles.tag}>
                <input type="checkbox" name={tag} id={tag} />
                <label htmlFor={tag}>{tag}</label>
              </span>
            ))}
          </>
        )}
      </div>
      <button className={styles.postButton}>POST</button>
    </form>
  );
}
