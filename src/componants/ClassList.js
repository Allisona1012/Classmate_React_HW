import React, { Component } from 'react';

export default class ClassList extends Component {
    constructor(props){
        console.log('Componant Constructed')
        super(props);
        this.state={
            classmates: []
        }
    }
    componantDidMount(){
        console.log('Componant Mounted')
        fetch(' https://kekambas-bs.herokuapp.com/kekambas')
        .then(res => res.json())
        .then(data =>
           //console.log(data)
            this.setState({
                classmates: data
            })
        )
    }
  render() {
      console.log('componant Rendered')
    return (
        <>
        <h1> Meet Kekambas-79!</h1>
        <table className='table table-dark table-striped'>
            
                <tbody>
                    <tr>
                <td>Id</td>
                <td>First Name</td>
                <td>Last Name</td>
                </tr>
                </tbody>
            
        </table>
        <ol>
            {this.state.classmates.map((c)=> <li>{c.id}</li>)}
        </ol>
        </>
    );
  }
}
