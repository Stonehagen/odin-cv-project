import React, { Component } from 'react';

class InfoItemDataText extends Component {
  render() {
    const itemName = this.props.itemName;
    const itemData = this.props.itemData;
    const editDataMode = this.props.editDataMode;
    const changeInfos = this.props.changeInfos;
    const itemKey = this.props.itemKey;
    let newValue = '';

    const onSave = () => {
      if (newValue !== '') {
        changeInfos(itemKey, newValue);
      }
      editDataMode.off();
    };

    if (editDataMode.get() === itemName) {
      return (
        <div className='data-change'>
          <input
            defaultValue={itemData}
            onChange={(v) => {
              newValue = v.target.value;
            }}
          ></input>
          <button onClick={onSave}>save</button>
        </div>
      );
    } else {
      return (
        <div>
          {itemData}
          <div></div>
        </div>
      );
    }
  }
}

export default InfoItemDataText;
