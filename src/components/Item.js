import React from "react";

export default function Item(props) {
  const { item } = props;
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(true)}
      />
     <label>{item}</label> 
    </div>
  );
}
