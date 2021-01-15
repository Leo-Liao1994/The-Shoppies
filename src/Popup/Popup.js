import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
 
const popup = props => {
  return (
  <Popup trigger={<button>asda</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
)
}; 

export default popup