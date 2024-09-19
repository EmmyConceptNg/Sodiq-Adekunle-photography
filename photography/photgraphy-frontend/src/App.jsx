import { ToastContainer } from "react-toastify";
import { Routes } from "./router/Index";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes />
    </>
  );
}

export default App;
