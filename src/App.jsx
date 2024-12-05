import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar"
import BgImage from "./assets/bg.png";


const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

function App() {

  return (
    <div className="overflow-x-hidden">
        <div style={bgStyle}>
          <Navbar />
          <Hero />
        </div>
    </div>
  )
}

export default App
