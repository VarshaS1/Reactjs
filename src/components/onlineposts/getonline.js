import React, { Component } from 'react';
import './getonline.css'
import _ from 'lodash';


import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";


class GetOnlinePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //activePage: 10,
      pageNumber: 1,
      //currentPage: 1,
      error: null,
      isLoaded: false,
      posts: [],
      // length: 0
    };

  }


  changeCurrentPagecomplete = numPage => {
    this.setState({ currentPage: numPage });

  };
  changeCurrentPageincomplete = numPage => {
    this.setState({ currentPagePost: numPage });
  };

  componentDidMount() {
    // I will use fake api from jsonplaceholder website
    // this return 100 posts 
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(
        // handle the result
        (result) => {
          console.log(result)
          //iteratees = obj => obj.completed;
          // const sorted = _.sortBy(result, obj => obj.completed);
          var partition = _.partition(result, obj => obj.completed)
          this.setState({
            isLoaded: true,
            posts: partition,
          })

        })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        })
      }
      )
  }

  render() {

    const { error, isLoaded, posts } = this.state;
    console.log(this.state)
    // console.log(posts[0])
    if (error) {
      return <div>Error in loading</div>
    } else if (!isLoaded) {
      return <div>Loading ...</div>
    } else {
      const posts1 = posts[0];
      const count1=(this.state.currentPage - 1) * 10
      const count2=(this.state.currentPagePost - 1) * 10
      const postscompleted = posts1.slice(count1).slice(0, 10);
      console.log(this.state.currentPage - 1)
      console.log("Array Slice" + JSON.stringify(postscompleted));
      const posts2 = posts[1];
      const postsincomplete = posts2.slice(count2).slice(0, 10);
      console.log("Array Slice" + JSON.stringify( postsincomplete));
      //console.log("Length of the posts" + posts1.length);
      return (

        <div>
          <div>
            <ol start={count1 + 1} className="item">

              {
                postscompleted.map((post) => (
                  <li  align="start">
                    <div>
                      <span>{}</span>
                      <input type="checkbox" defaultChecked={post.completed} />
                      <span className="title">{post.title}</span>
                      <span className="body">{ post.spreading}</span>
                    </div>

                  </li>

                ))
              }
            </ol>
            <Pagination
              currentPage={this.state.currentPage}
              totalSize={posts1.length}

              totalPages={10}
              changeCurrentPage={this.changeCurrentPagecomplete}
            />
            <h2>current Page:{this.state.currentPage}</h2>
          </div>

          <ol start={count2 + 1} className="item">
            {
               postsincomplete.map(post => (
                <li  align="start">
                  <div>
                    <input type="checkbox" defaultChecked={post.completed} />
                    <span className="title">{post.title}</span>
                    <span className="body">{post.spreading}</span>
                  </div>
                </li>
              ))
            }
          </ol>

          <Pagination
            currentPage={this.state.currentPagePost}
            totalSize={posts2.length}
            totalPages={11}
            changeCurrentPage={this.changeCurrentPageincomplete}
          />
          <h2>current Page:{this.state.currentPagePost}</h2>
        </div>


      );
    }
  }
}
export default GetOnlinePosts;
