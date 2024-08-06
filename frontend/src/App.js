import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const myStyle = {
    backgroundImage: "url('https://cdn.wallpapersafari.com/32/78/dTuctf.jpg')",
    height: "auto",
    minHeight: "100vh",
    width: "100%",

    backgroundRepeat: "repeat",
  };

  return (
    <>
      <Header />
      <div style={myStyle}>
        <main className="py-3">
          <Container>
            <Outlet />
          </Container>
        </main>

        <Footer />
        <ToastContainer />
      </div>
    </>
  );
};

export default App;
