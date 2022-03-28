import React, { useState } from "react";
import "./InputOptions.css";
const InputOptions = ({ Icon, title, color }) => {
	const [value, setValue] = useState(null)
	
  return (
    <div className="inputOptions">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>

    </div>
  );
};

export default InputOptions;
