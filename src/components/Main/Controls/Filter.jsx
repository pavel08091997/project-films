import React from "react";

  const GetElementFilter = ({value}) => (
    <label>
      <input type="radio" name="group1"/>
      <span>{value}</span>
    </label>
  );

const Filter = () => {
  return (
    <form action="#">
      <GetElementFilter value={'all'}/>
      <GetElementFilter value={'Movies only'}/>
      <GetElementFilter value={'Series only'}/>
    </form>
  );
};

export default Filter;


