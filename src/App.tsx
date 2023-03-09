import { useEffect } from "react";
import { Header } from "./components/Layout";

const App = () => {
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
  return (
    <div className="flex h-screen justify-center bg-secondary">
      <div className="grid grid-cols-main">
        <Header />
      </div>
    </div>
  );
};

export default App;
