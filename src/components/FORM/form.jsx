import React, { useState } from "react";
import "./form.css";

const Form = (props) => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
      setInput(e.target.value)
  };

  const submitHandler = (e) => {
      e.preventDefault()
      const detail = {input}
      console.log(detail);
      props.getInputs(detail);
      setInput("");
  }
  return (
    <div className="formBox">
      <form className="form" onSubmit = {submitHandler}>
        <label className="formLabel">Course Goal</label>
        <input
          onChange={changeHandler}
          className="formInput"
          type="text"
          value = {input}
        ></input>
        <button className="formButton" type="submit">
          Add Goal
        </button>
      </form>
    </div>
  );
};

export default Form;
