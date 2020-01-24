/* eslint-disable no-undef */
import React, { Component } from 'react';
import './getonline.css'
// eslint-disable-next-line no-unused-vars
import _  from 'lodash';

// it's return a json file
class GetOnlinePosts extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            posts : []          
        };
    }

    componentDidMount(){
        // I will use fake api from jsonplaceholder website
        // this return 100 posts 
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                 //iteratees = obj => obj.completed;
               // const sorted = _.sortBy(result, obj => obj.completed);
               var partition = _.partition (result, obj => obj.completed,true) 
              console.log(partition)
                this.setState({
                    isLoaded : true,
                    posts : partition
                })
            
            },
        

            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    render() {
        const {error, isLoaded, posts} = this.state;
        
        const posts1 = posts[0];
        const posts2 = posts[1];
        // console.log(posts[0])
        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                    <ol className="item">
                    {
                        posts1.map(post => (
                            <div> 
                            
                            <li key={post.id} align="start">
                    
                                <div>
                                     
                                    <input type="checkbox"  defaultChecked={post.completed}/>
                                    <span className="title">{post.title}</span>
                                    <span className="body">{post.body}</span>
                                </div>
                            </li>
                            
                        </div>

                        ))
                    }
                    
                    </ol>
            
            
                <ol className="item">
                {
                    posts2.map(post => (
                        <div> 
                        
                        <li key={post.id} align="start">
                
                            <div>
                                 
                                <input type="checkbox"  defaultChecked={post.completed}/>
                                <span className="title">{post.title}</span>
                                <span className="body">{post.body}</span>
                            </div>
                        </li>
                        
                    </div>

                    ))
                }
                
                </ol>
            </div>
            );
        }
      
    }
  }
  
  export default GetOnlinePosts;