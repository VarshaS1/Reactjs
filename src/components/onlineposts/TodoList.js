import React from "react";
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";

const TodoList = ({
  startCount,
  list,
  currentPage,
  totalSize,
  changeCurrentPage
}) => {
  return (
    <div>
      <ol start={startCount + 1} className="item">
        {list.map(post => (
          <li align="start">
            <div>
              <input type="checkbox" defaultChecked={post.completed} />
              <span className="title">{post.title}</span>
              <span className="body">{post.spreading}</span>
            </div>
          </li>
        ))}
      </ol>
      <Pagination
        currentPage={currentPage}
        totalSize={totalSize}
        totalPages={10}
        changeCurrentPage={changeCurrentPage}
      />
      <h2>Current Page: {currentPage}</h2>
    </div>
  );
};

export default TodoList;
