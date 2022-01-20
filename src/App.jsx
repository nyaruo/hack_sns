import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "Build/samplear1.loader.js",
  dataUrl: "Build/samplear1.data",
  frameworkUrl: "Build/samplear1.framework.js",
  codeUrl: "Build/samplear1.wasm",
});

function App() {
  return <Unity unityContext={unityContext} />;
}

export default App;