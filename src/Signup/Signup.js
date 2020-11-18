import React, { useState } from "react";
import Display from "./Display";
const Signup = (props) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [click, setClick] = useState({});
  const [show, setShow] = useState(false);

  const handleFname = (e) => {
    setFname(e.target.value);
  };
  const handleLname = (e) => {
    setLname(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRepassword = (e) => {
    setRepassword(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleClick = () => {
    const me = {};
    me.first_name = fname;
    me.last_name = lname;
    me.mobile_number = number;
    me.email_id = email;
    me.first_password = password;
    me.confirm_password = repassword;
    me.set_age = age;
    me.gender = gender;
    setClick(me);
    setShow(true);
  };
  const handleReset = () => {
    setFname("");
    setLname("");
    setNumber("");
    setEmail("");
    setPassword("");
    setRepassword("");
    setAge("");
    setGender("");
  };
  const handleBack = (me) => {
    setShow(false);
    setFname("");
    setLname("");
    setNumber("");
    setEmail("");
    setPassword("");
    setRepassword("");
    setAge("");
    setGender("");
  };

  return (
    <div>
      {!show ? (
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={fname}
            onChange={handleFname}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lname}
            onChange={handleLname}
          />
          <br />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={handleAge}
          />
          <br />
          <select onChange={handleGender}>
            <option value="gender">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
          <br />
          <input
            type="number"
            placeholder="Mobile Number"
            value={number}
            onChange={handleNumber}
          />
          <br />
          <input
            type="email"
            placeholder="Enter Your Mail Id"
            value={email}
            onChange={handleEmail}
          />
          {number === "" && <p>Please enter Details</p>}
          <br />
          <input
            type="password"
            placeholder="Enter Password "
            value={password}
            onChange={handlePassword}
          />
          <br />
          <input
            type="password"
            placeholder="Confirm Password "
            value={repassword}
            onChange={handleRepassword}
          />
          <br />
          <button onClick={handleClick}>SIGN</button>
          <button onClick={handleReset}>RESET</button>
        </div>
      ) : (
        <div>
          <Display display={click} goBack={() => handleBack()} />
        </div>
      )}
    </div>
  );
};
export default Signup;
