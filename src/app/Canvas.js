import { Canvas } from "@react-three/fiber";

const OwnCanvas = ({ children }) => {
  return (
    <Canvas
      dpr={window.devicePixelRatio}
      gl={{
        antialias: true,
      }}
      style={{
        touchAction: 'none'
      }}
    >
      {children}
    </Canvas>
  );
}

export default OwnCanvas;
