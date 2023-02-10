import React, { Component } from 'react';

class InfoItem extends Component {
  render() {
    const itemData = this.props.infoData.data;
    const itemName = this.props.infoData.name;

    return (
      <li>
        {itemName}: {itemData}
      </li>
    );
  }
}

export default InfoItem;
