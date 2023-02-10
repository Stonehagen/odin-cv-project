import React, { Component } from 'react';
import Educational from './components/Educational';
import Information from './components/Information';
import Practical from './components/Practical';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        firstName: { data: '', name: 'First Name'},
        lastName: { data: '', name: 'Last Name'},
        birthday: { data: '', name: 'Birthday'},
        city: { data: '', name: 'City'},
        Country: { data: '', name: 'Country'},
        email: { data: '', name: 'E-Mail'},
        phone: { data: '', name: 'Phone Number'},
        website: { data: '', name: 'Website'},
      },
    };
  }

  render() {
    return (
      <div>
        <Information info={this.state.info}/>
        <Educational />
        <Practical />
      </div>
    );
  }
}

export default App;
