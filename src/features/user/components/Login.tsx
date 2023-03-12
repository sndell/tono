import { FcGoogle } from "react-icons/fc";
import { loginWithGoogle } from "../api";

const Login = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 bg-secondary">
      To use the application you need to be signed in
      <div
        onClick={loginWithGoogle}
        className="flex h-[40px] w-fit cursor-pointer items-center gap-2 rounded-full bg-primary px-4 text-primary"
      >
        <FcGoogle />
        Continue with Google
      </div>
    </div>
  );
};

export default Login;
