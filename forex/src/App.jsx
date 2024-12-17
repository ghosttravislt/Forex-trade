import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Secure from "./components/Secure";
import Industry from "./components/Industry";
import Answers from "./components/Answers";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Secure />
      <Industry />
      <Answers />
      <Footer
        footerTitle="Empowering You with Essential Tools"
        text="Get the insights, control, and security needed for smart crypto decisions."
      />
    </>
  );
};

export default App;
