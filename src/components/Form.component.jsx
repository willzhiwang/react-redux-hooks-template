import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFirstName, updateLastName, resetName } from "../redux/actions";

const Form = () => {
  const dispatch = useDispatch();
  const nameReducer = useSelector((state) => state.nameReducer);
  const { firstName, lastName, message } = nameReducer;
  const handleFirstName = () => {
    dispatch(updateFirstName(localName.firstName));
  };
  const handleLastName = () => {
    dispatch(updateLastName(localName.lastName));
  };
  const handleReset = () => {
    dispatch(resetName());
  };
  const [localName, setLocalName] = useState({ firstName: "", lastName: "" });
  const updateName = (e) => {
    setLocalName({
      ...localName,
      [e.target.name]: e.target.value,
    });
  };

  const lastProps = useRef({
    firstName,
    lastName,
  });

  useEffect(() => {
    if (lastProps.current.firstName !== firstName) {
      setLocalName((prevName) => ({
        ...prevName,
        firstName,
      }));
    }

    if (lastProps.current.lastName !== lastName) {
      setLocalName((prevName) => ({
        ...prevName,
        lastName,
      }));
    }

    console.log("useEffect ", firstName, " ", lastName);

    lastProps.current = {
      firstName,
      lastName,
    };
  }, [firstName, lastName]);

  return (
    <React.Fragment>
      <div className="container">
        <label>First Name : {firstName}</label>
        <input
          type="text"
          name="firstName"
          onChange={updateName}
          value={localName.firstName}
        />
        <button onClick={handleFirstName}>Update First Name</button>
        <br />
        <br />
        <label>Last Name : {lastName}</label>
        <input
          type="text"
          name="lastName"
          onChange={updateName}
          value={localName.lastName}
        />
        <button onClick={handleLastName}>Update Last Name</button>

        <br />
        <br />
        <br />
        {message && (
          <label style={{ background: "lightgreen" }}>{message}</label>
        )}
        <br />
        <button
          style={{ background: "red" }}
          type="submit"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </React.Fragment>
  );
};

export default Form;
