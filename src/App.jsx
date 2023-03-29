import Navbar from './Components/Navbar.jsx';
import Jumbotron from "./Components/Jumbotron.jsx";
import Sound from "./Components/Sound.jsx";
import DisplaySection from "./Components/DisplaySection.jsx";
import WebGiViewer from "./Components/WebGiViewer.jsx";
function App() {

  return (
    <div className="App">
        <Navbar />
        <Jumbotron />
        <Sound />
        <DisplaySection />
        <WebGiViewer />
    </div>
  );
}

export default App;
