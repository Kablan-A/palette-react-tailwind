import "./index.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import Drops from "./components/Drops";
import Mission from "./components/Mission";
import offers from "./data/offers";
import Offer from "./components/Offer";
import No from "./components/No";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Advantages />
      <Drops />
      <Mission />
      <hr className="border border-[#1F1E1E1A] mx-10"></hr>
      <Offer {...offers.offer1} />
      <No />
      <Offer {...offers.offer2} />
      <Offer {...offers.offer3} />
      <Footer />
    </div>
  );
}

export default App;
