import './App.css';
import Application from './Components/Application';
import Company from './Components/Company';
import Good from './Components/Good';
import Herosection from './Components/Herosection';
import Navbar from './Components/Navbar';
import Printing from './Components/Printing';
import Simply from './Components/Simply';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div classNameName="App">
      <Navbar/>
      <Herosection/>
      <Application/>
      <Printing/>
      <Simply/>
      {/* <Company/> */}
      <Good/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
