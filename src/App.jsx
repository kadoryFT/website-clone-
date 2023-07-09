import Hader from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css"
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetSrarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
      <Hader/>
      <Hero/>
      
      </div>
     <Companies/>
     <Residencies/>
     <Value/>
     <Contact/>
     <GetSrarted/>
     <Footer/>
    </div>
    
  );
}

export default App;
