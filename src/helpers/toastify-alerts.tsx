import { toast } from "react-toastify";

export const toastifyAlert = (typeAlert: String) => {
  switch (typeAlert) {
    case "success":
      toast.success("Login Success(this is helper running)");
      break;
    case "error":
      toast.error(
        "Invalid Email OR password - try to register( maybe your user not exist)"
      );
      break;
    default:
      toast.loading("Please wait...");
  }
  //note: better pass also msg as an arg- cause need to call this helper in authoriz, too
};

// function toastify() {
// if (user.name === "") {
//     toast.error("Name Is Required");
//   } else if (user.email === "") {
//     toast.error("Email Is Required");
//   } else if (user.password === "") {
//     toast.error("Password is Required");
//   } else if (user.phoneNumber === "") {
//     toast.error("Number is Required");
//   } else {
//     dispatch(
//       login({
//         name: user.name,
//         email: user.email,
//         password: user.password,
//         loggedIn: true,
//       })
//     );
//     saveUserToLocalStorage();
//     toast.success("User Saved!");
//     navigate("/");
//   }
// }
// export const toastify;
// export {};
