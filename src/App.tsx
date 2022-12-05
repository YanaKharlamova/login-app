import { useSelector } from "react-redux";
import "./App.css";

import { selectUser } from "./app/user-slice";
import Navigation from "./components/Navigation/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  // const user = useSelector(selectUser);
  return (
    <div className="container">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navigation />
    </div>
  );
};

export default App;
