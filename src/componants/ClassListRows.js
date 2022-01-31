import React, { Component } from 'react';
import ClassList from './ClassList';

export default class ClassListRows extends Component {
  render() {
    return (
        <tbody>
        <tr>
            <td>{ClassList.id}</td>
            <td>{ClassList.first_name}</td>
            <td>{ClassList.last_name}</td>
        </tr>
        </tbody>
    );
  }
}
