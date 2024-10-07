import errorImg from "../assets/pageImage/Frame.png";
import Navbar from "../components/Navbar";

function ErrorNotFound() {
  return (
    <div className="">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen ">
        <img src={errorImg} alt="errorPageImage" />
      </div>
    </div>
  );
}

export default ErrorNotFound