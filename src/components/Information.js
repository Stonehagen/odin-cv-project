import React, { Component } from 'react';
import InfoItem from './InfoItem';

class Information extends Component {
  render() {
    const inEditMode = this.props.inEditMode;
    const info = this.props.info;
    const infoKeys = Object.keys(info);

    return (
      <div>
        <h1>General Informations</h1>
        <ul className="info-list">
          {infoKeys.map((key) => {
            if (inEditMode) {
              return (
                <InfoItem key={'li-' + info[key].name} infoData={info[key]} />
              );
            }
            if (info[key].data === '') {
              return false;
            }
            return (
              <InfoItem key={'li-' + info[key].name} infoData={info[key]} />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Information;
