import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";

const App = () => {
  return (
    <div className="font-body">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default App;
