import Navbar from './Components/Navbar.jsx';
import Jumbotron from "./Components/Jumbotron.jsx";
import Sound from "./Components/Sound.jsx";
import DisplaySection from "./Components/DisplaySection.jsx";
import WebGiViewer from "./Components/WebGiViewer.jsx";
import {useRef} from "react";
import Loader from "./Components/Loader.jsx";
function App() {

    const webGiViewerRef = useRef(null);
    const contentRef = useRef(null);

    const handlePreview = () => {
        webGiViewerRef.current.triggerPreview();
    }

  return (
    <div className="App">
        <Loader />
        <div ref={contentRef} id={'content'}>
            <Navbar />
            <Jumbotron />
            <Sound />
            <DisplaySection triggerPreview={handlePreview}/>
        </div>
        <WebGiViewer ref={webGiViewerRef} contentRef={contentRef}/>
    </div>
  );
}

export default App;
