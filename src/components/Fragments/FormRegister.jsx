import Buttons from "../Element/Button/Button";
import InputForms from "../Element/Input";

function FormRegister() {
  return (
    <form
      action=""
      className="mx-auto w-full h-full flex flex-col justify-center space-y-3"
    >
      <InputForms
        nameFors="namaLengkap"
        types="text"
        placeholders="enter our full name"
      >
        Full Name
      </InputForms>
      <InputForms
        nameFors="email"
        types="email"
        placeholders="example@gmail.com"
      >
        Email
      </InputForms>
      <InputForms types="password" nameFors="password" placeholders="********">
        Passowrd
      </InputForms>
      <InputForms
        types="password"
        nameFors="verifyPassword"
        placeholders="********"
      >
        Verify Passowrd
      </InputForms>
      <div className="w-full px-15">
        <Buttons type="submit">Register</Buttons>
      </div>
    </form>
  );
}

export default FormRegister;
