import Swal from "sweetalert2";
import Buttons from "../Element/Button/Button";
import InputForms from "../Element/Input";

function FormLogin() {
  async function handleSubmit(event) {
    event.preventDefault();

    if (event.target.email.value) {
      await Swal.fire({
        icon: "success",
        title: "Login Successfuly 🥳",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      await Swal.fire({
        icon: "error",
        title: "Data Login tidak valid, pastikan username diisi!😳",
        showConfirmButton: false,
        timer: 4000,
      });
      return;
    }

    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);

    window.location.href = `${import.meta.env.BASE_URL}`;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full h-full flex flex-col justify-center space-y-3"
    >
      <InputForms nameFors="email" types="text" placeholders="Username">
        Email or Username<span className="text-red-500">*</span>
      </InputForms>
      <InputForms types="password" nameFors="password" placeholders="********">
        Passowrd
      </InputForms>
      <div className="px-15 h-10 flex items-center">
        <input
          type="checkbox"
          name="remember"
          id="remember"
          className="me-3 w-5.5 h-3.5 hover:cursor-pointer"
        />
        <span className="font-semibold text-sm">Remember Me</span>
      </div>
      <div className="w-full px-15">
        <Buttons type="submit">Login</Buttons>
      </div>
    </form>
  );
}

export default FormLogin;
