import React, { useState } from 'react';
import './Colors.css';
import Input from '../../components/Input';

function Colors({handleChange}) {
  const [color, setColor] = useState("");
  const handleColorSelection = (e)=>{
    setColor(e.target.value);
    handleChange(e);
  }
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input type="radio" onChange={handleColorSelection} value="" name='test3' />
        <span className="checkmark all"></span>All
      </label>

      <Input
      handleChange={handleColorSelection}
      value="black"
      title="Black"
      name="test3"
      color="black"
      />
      <Input
      handleChange={handleColorSelection}
      value="blue"
      title="Blue"
      name="test3"
      color="blue"
      />
      <Input
      handleChange={handleColorSelection}
      value="red"
      title="Red"
      name="test3"
      color="red"
      />
      <Input
      handleChange={handleColorSelection}
      value="green"
      title="Green"
      name="test3"
      color="green"
      />

      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value="white" name='test3' />
        <span className="checkmark" style={{background:"white", border:"2px solid black"}}></span>
        White
      </label>
    </div>
  )
}

export default Colors;