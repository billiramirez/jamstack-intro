import React, { useState, useReducer } from "react";
import styles from "./form.module.css";

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  body: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateFieldValue":
      return { ...state, [action.field]: action.value };

    default:
      return INITIAL_STATE;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const updateFieldValue = (field) => (event) => {
    dispatch({
      type: "updateFieldValue",
      field,
      value: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO Actually send the message
    console.log(state);
  };

  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          className={styles.input}
          name="name"
          value={state.name}
          onChange={updateFieldValue("name")}
        />
      </label>
      <label className={styles.label}>
        Email
        <input
          type="email"
          className={styles.input}
          name="email"
          value={state.email}
          onChange={updateFieldValue("email")}
        />
      </label>
      <label className={styles.label}>
        Subject
        <input
          type="text"
          className={styles.input}
          name="subject"
          value={state.subject}
          onChange={updateFieldValue("subject")}
        />
      </label>
      <label className={styles.label}>
        Body
        <textarea
          className={styles.input}
          name="body"
          value={state.body}
          onChange={updateFieldValue("body")}
        />
      </label>
      <button type="submit" onClick={handleSubmit} className={styles.button}>
        Send
      </button>
    </form>
  );
};

export default Form;
