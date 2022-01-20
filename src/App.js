import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

const unityContent = new UnityContent(
    "/Build/samplear.json",
    "/Build/UnityLoader.js",
);

function App() {
  return <Unity unityContent={unityContent} />;
}

export default App;
