import React, { Component } from 'react';

import posts from './posts.js';
// get posts from online api
// it's return a json file
class GetLocalPosts extends Component {
    constructor(props){
        super(props);
        this.state = {            
            posts :posts            
        };
    }

    render() {
        const {posts} = this.state;
        return(
            <div>
                <ol className="item">
                {
                    /*posts.map(post => (
                        <li key={post.id} align="start">*/
                        (posts && posts.length > 0) && posts.map(post => (
                            
                            <li key={post.id} >
                      ))}
                            <div>
                                
                                {/* <p className="title">{post.title}</p> */}
                                <p className="body">{post.body}</p>
                            </div>
                        </li>
                    ))
                }
                </ol>
            </div>
        );
    }
  }
  
  export default GetLocalPosts;