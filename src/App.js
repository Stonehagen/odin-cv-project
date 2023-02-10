import React, { Component } from 'react';
import './styles/App.css';
import Educational from './components/Educational';
import Information from './components/Information';
import Practical from './components/Practical';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inEditMode: false,
      inEditDataMode: null,
      info: {
        city: { data: '', name: 'City' },
        country: { data: 'Germany', name: 'Country' },
        email: { data: '', name: 'E-Mail' },
        website: { data: '', name: 'Website' },
      },
    };

    this.toggleChangeEditMode = this.toggleChangeEditMode.bind(this);
    this.onEditDataMode = {
      on: this.onEditDataMode.bind(this),
      off: this.offEditDataMode.bind(this),
      get: this.getEditDataMode.bind(this),
    };
    this.changeInfos = this.changeInfos.bind(this);
  }

  toggleChangeEditMode() {
    if (this.state.inEditDataMode !== null) {
      return;
    } else {
      this.setState({
        inEditMode: !this.state.inEditMode,
      });
    }
  }

  onEditDataMode(dataField) {
    this.setState({
      inEditDataMode: dataField,
    });
  }

  offEditDataMode() {
    this.setState({
      inEditDataMode: null,
    });
  }

  getEditDataMode() {
    return this.state.inEditDataMode;
  }

  changeInfos(fieldName, value) {
    const newInfo = { ...this.state.info };
    newInfo[fieldName]['data'] = value;
    this.setState({
      info: newInfo,
    });
  }

  render() {
    return (
      <div>
        <Information
          info={this.state.info}
          inEditMode={this.state.inEditMode}
          editDataMode={this.onEditDataMode}
          changeInfos={this.changeInfos}
        />
        <Educational />
        <Practical />
        <button onClick={this.toggleChangeEditMode}>edit</button>
      </div>
    );
  }
}

export default App;
