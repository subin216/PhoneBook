import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: 'Paul',
        phone: '010-1234-1234'
      },
      {
        id: 1,
        name: 'Wang',
        phone: '010-1234-5678'
      }
    ],
    keyword: ''
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data})
    })
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
        ? { ...info, ...data }
        : info
      )
    })
  }

  render() {
    const { information, keyword } = this.state;
    return (
      <div>
        <PhoneForm 
          onCreate={this.handleCreate} />
        <p>
          <input
            placeholder="searching.."
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <hr />
        <PhoneInfoList 
          data={information} 
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}/>
      </div>
    );
  }
}

export default App;
