import React, { Component } from 'react';
import InfoItem from './InfoItem';

class Information extends Component {
  
  render() {
    const inEditMode = this.props.inEditMode;
    const info = this.props.info;
    const infoKeys = Object.keys(info);
    const editDataMode = this.props.editDataMode;
    const changeInfos = this.props.changeInfos;

    return (
      <div>
        <h1>General Informations</h1>
        <ul className="info-list">
          {infoKeys.map((infoKey) => {
            if (inEditMode) {
              return (
                <InfoItem
                  key={'li-' + info[infoKey].name}
                  infoData={info[infoKey]}
                  infoKey={infoKey}
                  inEditMode={inEditMode}
                  editDataMode={editDataMode}
                  changeInfos={changeInfos}
                />
              );
            }
            if (info[infoKey].data === '') {
              return false;
            }
            return (
              <InfoItem
                key={'li-' + info[infoKey].name}
                infoData={info[infoKey]}
                infoKey={infoKey}
                inEditMode={inEditMode}
                editDataMode={editDataMode}
                changeInfos={changeInfos}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Information;
