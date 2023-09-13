import React, { useEffect, useState } from "react";
//import {useNavigate} from 'react-router-dom'
import './SignUp.css';
import Home from "../assets/house.jpg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from 'axios'
//const navigate = useNavigate();


const backgroundStyle = {
  backgroundImage : `url(${Home})`,
  backgroundSize : "cover",
}

function SignUp() {

  var [phoneNumber, setnumber] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  async function register() {
    let item = { phoneNumber, password, firstName, lastName, companyName, confirmPassword };
    //console.log(item);
    axios.post("http://localhost:8081/api/v1/signUp",{item})
    .then(response=>{console.log(response)})
    .catch(error=>console.log(error))
    


    // fetch("http://localhost:8081/api/v1/signUp",{
    //   method:"POST",
    //   headers:{
    //         "Content-Type":"application/json",
    //         "Accept":"application/json",
    //         },
    //         body:JSON.stringify(item)
    // })
    // .then(res=>{
    //   return res.json
    //   }
    // )
    // .then(data=>console.log(data))
    // .catch(error=>console.log(error))

    // let response = await fetch("localhost:8081/api/v1/signUp",{
    //     method:"POST",
    //     headers:{
    //     "Content-Type":"application/json",
    //     "Accept":"application/json",
    //     },
    //     body:JSON.stringify(item)
    // });
    //  result = await response.json();
    // console.log(result,"result")
    // localStorage.setItem("user-info",JSON.stringify(result))
    // console.log(result)
    //navigate.push("/")
    phoneNumber = "+" + phoneNumber;
    if (phoneNumber === "" || phoneNumber.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }
    if (password != confirmPassword) {
      alert("passwords do not match");
    }
  }
  // Sent OTP
  // const signin = () => {
  //   phoneNumber = "+" + phoneNumber;
  //   if (phoneNumber === "" || phoneNumber.length < 10) {
  //     alert("Please enter a valid phone number");
  //     return;
  //   }
  //   if(password != confirmPassword){
  //     alert("passwords do not match");
  //   }
  //   // return(
  //   //   console.log("happy happy")
  //   // );
  // }
  return (




    <div className="main-box" style={backgroundStyle}>
      <div className="login-box">

        <h4>Welcome to Open House !</h4>
        <h3 style={{ color: "#008080" }}>Sign up</h3>

        <label>Name</label>
        <input
          type="text"
          className="first-name"
          placeholder="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)} />
        <input
          type="text"
          className="last-name"
          placeholder="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)} />

        <label>Company Name</label>
        <div className="company-name">
          <input
            type="text"
            className="company-name"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)} />
        </div>


        <label>Phone Number</label>
        <div id="phone-input" style={{ display: !show ? "block" : "none" }}>
          <PhoneInput
            country={"ca"}
            onlyCountries={["ca"]}
            disableAreaCodes
            disableDropdown
            countryCodeEditable={false}
            value={phoneNumber}
            onChange={(e) => {
              setnumber(e);
            } }
            placeholder="Enter phone number" />


          <br></br>


          <label>Password</label>
          <div className="password">
            <input
              type="password"
              className="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />

            <label>Confirm Password</label>
            <input
              type="password"
              className="confirm-password"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} />

          </div>


          <button id="send-otp" onClick={() => register()}>
            Sign Up
          </button>

        </div>

      </div>
    </div>

  );
}


export default SignUp;