import React, { Component } from 'react';
import InfoItemData from './InfoItemData';

class InfoItem extends Component {
  render() {
    const itemData = this.props.infoData.data;
    const itemName = this.props.infoData.name;
    const inEditMode = this.props.inEditMode;
    const editDataMode = this.props.editDataMode;
    const changeInfos = this.props.changeInfos;
    const infoKey = this.props.infoKey;

    return (
      <li>
        {itemName}:
        <InfoItemData
          itemName={itemName}
          infoKey={infoKey}
          data={itemData}
          inEditMode={inEditMode}
          editDataMode={editDataMode}
          changeInfos={changeInfos}
        />
      </li>
    );
  }
}

export default InfoItem;
