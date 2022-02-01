import React, { Component } from 'react';

export default class PostRows extends Component {
  render() {{
    const post= this.props.post
  return (
      
       <tr>
           <th>{post.user.first_name}</th>
          <td>{post.title}</td>
          <td>{post.body}</td>
          <td>{post.date_created}</td>
      </tr>
  )
}
   
  }
}
