import "./App.css";
import { PromptPage } from "./pages/index.js";
// import video from "./images/background-video.mp4";
function App() {
  return (
    <div className="app">
      {/* <video autoPlay={true} muted loop id="myVideo">
        <source src={video} type="video/mp4" />
      </video> */}

      <PromptPage />
    </div>
  );
}

export default App;
