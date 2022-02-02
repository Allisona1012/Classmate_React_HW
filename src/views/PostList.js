import React, { Component } from 'react';
import PostRows from '../componants/PostRows';

export default class PostList extends Component {
    constructor(props){
        console.log('Component Constructed')
        super(props);
        this.state={
            post: []
        }
    }
    componentDidMount(){
        console.log('Component Mounted')
        fetch(`https://kekambas-bs.herokuapp.com/posts`)
        .then(res => res.json())
        .then(data =>{
           console.log(data)
            this.setState({
                post: data
            })
        })
    }
  render() {
      console.log('component Rendered')
    return (
        <div className="container">
        <h3> Class Feed </h3>
        <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                    <th scope="col">User</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                    <th scope='col'> Date Created</th>
                    </tr>
                </thead>
        <tbody>

            {this.state.post.map((p, i)=> <PostRows post={p} key={i}/>)}
        </tbody>
        </table>
        
        </div>
    );
  }
}
