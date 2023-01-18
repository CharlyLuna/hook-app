import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "username",
    email: "example@example.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("useEffect called");
  }, []);

  useEffect(() => {
    // console.log("formState changed");
  }, [formState]);

  useEffect(() => {
    // console.log("email changed");
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
      <input
        type='text'
        className='form-control mt-2'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />
      <input
        type='text'
        className='form-control mt-2'
        placeholder='example@example.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />
      {username === "username2" && <Message />}
    </>
  );
};