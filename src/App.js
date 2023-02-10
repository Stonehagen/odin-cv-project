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
      info: {
        city: { data: '', name: 'City' },
        country: { data: 'Germany', name: 'Country' },
        email: { data: '', name: 'E-Mail' },
        website: { data: '', name: 'Website' },
      },
    };

    this.onChangeEditMode = this.onChangeEditMode.bind(this);
  }

  onChangeEditMode() {
    this.setState ({
      inEditMode: !this.state.inEditMode
    })
  }

  render() {
    return (
      <div>
        <Information
          info={this.state.info}
          inEditMode={this.state.inEditMode}
        />
        <Educational />
        <Practical />
        <button onClick={this.onChangeEditMode}>edit</button>
      </div>
    );
  }
}

export default App;
