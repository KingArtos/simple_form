import React from "react";
import UserData from "./UserData"
import PersonalData from "./PersonalData"
import DeliveryData from "./DeliveryData"


function RegisterForm({sendForm, validateCpf}){
  return(
    <section>
      <UserData />
      <PersonalData sendForm={sendForm} validateCpf={validateCpf} />
      <DeliveryData />
    </section>
  );
}

export default RegisterForm;