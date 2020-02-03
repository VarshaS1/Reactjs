import React, { Component } from "react";
import { partition } from "lodash";
import TodoList from "./TodoList";
import "./getonline.css";

class GetOnlinePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageCompleted: 1,
      currentPageInComplete: 1,
      error: null,
      isLoaded: false,
      posts: []
    };
  }

  changeCurrentPageComplete = numPage => {
    this.setState({ currentPageCompleted: numPage });
  };
  changeCurrentPageInComplete = numPage => {
    this.setState({ currentPageInComplete: numPage });
  };

  componentDidMount() {
    // I will use fake api from jsonplaceholder website
    // this return 200 posts
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(
        // handle the result
        result => {
          const posts = partition(result, obj => obj.completed);
          this.setState({
            isLoaded: true,
            posts
          });
        }
      )
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  }

  render() {
    const {
      error,
      isLoaded,
      posts: [completedPosts, inCompletePosts],
      currentPageCompleted,
      currentPageInComplete
    } = this.state;
    if (error) {
      return <div>Error in loading</div>;
    } else if (!isLoaded) {
      return <div>Loading ...</div>;
    } else {
      const completedOffset = (currentPageCompleted - 1) * 10;
      const inCompleteOffset = (currentPageInComplete - 1) * 10;
      const activeCompletedPosts = completedPosts.slice(
        completedOffset,
        completedOffset + 10
      );
      const activeInCompletePosts = inCompletePosts.slice(
        inCompleteOffset,
        inCompleteOffset + 10
      );
      return (
        <div>
          <TodoList
            startCount={completedOffset + 1}
            list={activeCompletedPosts}
            changeCurrentPage={this.changeCurrentPageComplete}
            currentPage={currentPageCompleted}
            totalSize={completedPosts.length}
          />

          <TodoList
            startCount={inCompleteOffset + 1}
            list={activeInCompletePosts}
            changeCurrentPage={this.changeCurrentPageInComplete}
            currentPage={currentPageInComplete}
            totalSize={inCompletePosts.length}
          />
        </div>
      );
    }
  }
}
export default GetOnlinePosts;
