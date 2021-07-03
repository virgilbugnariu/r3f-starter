import React from 'react';
import Canvas from "./Canvas";
import { Box } from "@react-three/drei";
import CameraControls from "./CameraControls";

function App() {
  return (
    <>
      <Canvas>
        <Box color={"red"} />
        <CameraControls />
      </Canvas>
    </>
  );
}

export default App;
