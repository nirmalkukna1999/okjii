import React, { Component } from 'react';
import OkjiiRetailerBody from '../retailer/OkjiiRetailerBody';
import { Helmet } from 'react-helmet';

export default class OkjiiRetailer extends Component {
  render() {
    return (
      <div>
        <Helmet>
        <title>Connecting customers with local retail shops</title>
        <meta name="description" content="OKKJI connects local retail shops and kirana stores with their customers. Build lasting relationships and give the benefit of free delivery to your customers" />
        </Helmet>
        <OkjiiRetailerBody />
      </div>
    )
  }
}
