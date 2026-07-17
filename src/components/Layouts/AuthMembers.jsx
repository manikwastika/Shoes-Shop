import MainLogo from "../Element/Logos/MainLogo";
import { Link } from "react-router";
import FormLogin from "../Fragments/FormLogin";
import Buttons from "../Element/Button/Button";

function AuthForm(props) {
  const { children, title } = props;
  return (
    <div className="w-full h-screen bg-[url(/img/Bg.jpg)] bg-top-left bg-no-repeat bg-cover">
      <div className="w-full h-full flex flex-col justify-center items-center gap-5">
        <MainLogo />
        <div className="w-110 py-[2%] bg-white shadow-lg rounded-2xl">
          <div className="w-full flex flex-col text-center justify-center pt-2">
            <h1 className="text-2xl font-bold font-CalSans text-black">
              {title}
            </h1>
            <p className="text-sm font-semibold font-Raleway mt-1">
              Masukan data apa saja
            </p>
          </div>
          <div className="w-full pt-5">{children}</div>
          <QuestionAuth title={title} />
        </div>
      </div>
    </div>
  );
}

function QuestionAuth(props) {
  const { title } = props;
  if (title === "Login") {
    return (
      <div className="px-15 mx-auto text-center pt-1">
        <span className="py-2.5 text-sm text-center font-Funnel">
          Dont have an Account ?{" "}
          <Link to="/register" className="font-bold text-blue-500">
            Register
          </Link>
        </span>
      </div>
    );
  } else {
    return (
      <div className="px-15 mx-auto text-center pt-1">
        <span className="py-2.5 text-sm text-center font-Funnel">
          Do you have an Account ?{" "}
          <Link to="/login" className="font-bold text-blue-500">
            Login
          </Link>
        </span>
      </div>
    );
  }
}

export default AuthForm;
