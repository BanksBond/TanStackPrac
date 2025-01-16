/* eslint-disable react/prop-types */
import styles from "./PostList.module.scss";

export function Pagination({ handlePrevPage, page, handleNextPage, postData }) {
  return (
    <div className={styles.pagination}>
      <button onClick={handlePrevPage} disabled={page === 1}>
        Previous Page
      </button>
      <span>Current Page: {page}</span>
      <button onClick={handleNextPage} disabled={page === postData?.last}>
        Next Page
      </button>
    </div>
  );
}
