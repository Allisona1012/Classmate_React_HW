import React, { Component } from 'react';
import ClassListRows from './ClassListRows';

export default class PostList extends Component {
    constructor(props){
        console.log('Component Constructed')
        super(props);
        this.state={
            posts: []
        }
    }
    componentDidMount(){
        console.log('Component Mounted')
        fetch(`https://kekambas-bs.herokuapp.com/posts `)
        .then(res => res.json())
        .then(data =>{
           console.log(data)
            this.setState({
                posts: data
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
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                    <th scope='col'> Date Created</th>
                    </tr>
                </thead>
        <tbody>

            {this.state.classmates.map((p, i)=> <PostListRows post={c} key={i}/>)}
        </tbody>
        </table>
        
        </div>
    );
  }
}
