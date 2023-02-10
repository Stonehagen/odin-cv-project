import React, { Component } from 'react';

class Information extends Component {
  render() {
    const info = this.props.info;
    const infoKeys = Object.keys(info);

    return (
      <div>
        <h1>General Informations</h1>
        <ul className='info-list'>
          {infoKeys.map((infoKey, index) => {
            const liKey = 'li-' + index;
            return <li key={liKey}>{info[infoKey].name}: </li>
          })}
        </ul>
      </div>
    );
  }
}

export default Information;
