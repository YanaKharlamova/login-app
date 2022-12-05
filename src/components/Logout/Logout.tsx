import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../app/user-slice";
import "./Logout.css";

interface Props {
  handleLogout: (event: React.MouseEvent<HTMLElement>) => Promise<void>;
}

const Logout: React.FC<Props> = ({ handleLogout }: Props) => {
  return (
    <div className="logout">
      lalallala this c-t its not used now.....
      {/* <h1>
        Welcome
        <span className="user__name">{user.name}</span>
      </h1>
      <button className="logout__button" onClick={handleLogout}>
        Logout button component text
      </button> */}
    </div>
  );
};

export default Logout;
