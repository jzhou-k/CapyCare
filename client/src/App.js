// // import React from "react";
// import logo from "./logo.svg";
// // import "./App.css";
// // import { useSpeech } from "react-text-to-speech";
// // // import { LobeTTS } from '@lobehub/tts';

// // function App() {
// //   const [data, setData] = React.useState(null);

// //   React.useEffect(() => {
// //     fetch("/api")
// //       .then((res) => res.json())
// //       .then((data) => setData(data.message));
// //   }, []);

// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>{!data ? "Loading..." : data}</p>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;



// import React from "react";
// import { useSpeech } from "react-text-to-speech";

// export default function App() {
//   const text = `fuck you`;
//   const { Text, speechStatus, start, pause, stop } = useSpeech({ text, pitch: 1, rate: 1, volume: 1, lang: "", voiceURI: "", autoPlay: false, highlightText: false });

//   return (
//     <div style={{ margin: "1rem", whiteSpace: "pre-wrap" }}>
//       <div style={{ display: "flex", columnGap: "1rem", marginBottom: "1rem" }}>
//         <button disabled={speechStatus === "started"} onClick={start}>
//           Start
//         </button>
//         <button disabled={speechStatus === "paused"} onClick={pause}>
//           Pause
//         </button>
//         <button disabled={speechStatus === "stopped"} onClick={stop}>
//           Stop
//         </button>
//       </div>
//       <Text />
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//          <p>{"Loading..."}</p>
//        </header>
//     </div>
//     //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>{!data ? "Loading..." : data}</p>
// //       </header>
// //     </div>
//   );
// }





import './App.css';

import Dictaphone from './Dictaphone.js';
function App() {


    return (
        <div className="App">

            { <img 
                    src="Illustration12.png" 
                    alt="Capybara logo" 
                    className="header-image" 
                    width="200"
                /> }
            <h1>CapyCare</h1>
            <h2> appointment scheduling app for the visually impaired</h2>
            <Dictaphone />

        </div>

    );
}
export default App;
