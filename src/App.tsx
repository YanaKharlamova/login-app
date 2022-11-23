import { useSelector } from "react-redux";
import "./App.css";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import { selectUser } from "./features/userSlice";
import Navigation from "./components/Navigation/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  // const user = useSelector(selectUser);
  // return <div>{user ? <Logout /> : <Login />}</div>;
  const user = useSelector(selectUser);
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
