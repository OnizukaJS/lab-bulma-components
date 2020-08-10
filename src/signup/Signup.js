import React from "react";
import "./Signup.css";
import "bulma/css/bulma.css";
import NavBar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";

const Signup = () => {
  return (
    <div>
      <NavBar />

      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />

      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />

      <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>

      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton>
    </div>
  );
};

export default Signup;
