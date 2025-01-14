import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="min-h-screen">
        <Outlet /> {/* This is where the nested routes will be rendered */}
      </main>
    </>
  );
}

export default App;
