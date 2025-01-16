/* eslint-disable react/prop-types */
import styles from "./PostList.module.scss";

export function PostCardsContainer({
  postLoading,
  isPending,
  postError,
  postErrorMessage,
  postData,
}) {
  return (
    <div className="container">
      {postLoading && isPending && <div>Loading...</div>}
      {postError && <div>Error: {postErrorMessage.message}</div>}
      {postData && (
        <div>
          {postData?.data?.map((post) => {
            return (
              <div key={post.id} className={styles.card}>
                <h2 className={styles.title}>{post.title}</h2>
                <div className={styles.tags}>
                  {post.tags.map((tag, index) => (
                    <span key={index} className={styles.posttag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
