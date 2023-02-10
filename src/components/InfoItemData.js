import React, { Component } from 'react';
import InfoItemDataText from './InfoItemDataText';

class InfoItemData extends Component {
  render() {
    const itemName = this.props.itemName;
    const itemData = this.props.data;
    const inEditMode = this.props.inEditMode;
    const editDataMode = this.props.editDataMode;
    const changeInfos = this.props.changeInfos;
    const infoKey = this.props.infoKey;

    const goToEditDataMode = () => {
      editDataMode.on(itemName);
    };

    const chekIfInEditMode = () => {
      if (editDataMode.get()) {
        return 
      }
      return <button onClick={goToEditDataMode}>
      {itemData ? 'edit' : 'add'}
    </button>
    }

    if (inEditMode) {
      return (
        <div>
          <InfoItemDataText
            editDataMode={editDataMode}
            itemKey={infoKey}
            itemData={itemData}
            itemName={itemName}
            changeInfos={changeInfos}
          />
          {chekIfInEditMode()}
        </div>
      );
    } else {
      return itemData;
    }
  }
}

export default InfoItemData;
