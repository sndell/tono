import { useEffect } from "react";
import { Header } from "../components/Layout";
import { Outlet } from "react-router-dom";
import useAuthState from "../features/user/hooks/useAuthState";
import { Login } from "../features/user";
import NotesProvider from "../features/notes/components/NotesProvider";

const Root = () => {
  const user = useAuthState();
  const handleResize = () => {
    document.documentElement.style.setProperty(
      "--vh",
      window.innerHeight * 0.01 + "px"
    );
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (user === null) return <Login />;

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-main grid-rows-[fit-content_auto]">
        <div className="flex flex-col px-4">
          <Header />
          <NotesProvider>
            <Outlet />
          </NotesProvider>
        </div>
      </div>
    </div>
  );
};

export default Root;
