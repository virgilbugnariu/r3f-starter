import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const CameraControls = () => {
  const { camera } = useThree();

  return (
    <>
      <OrbitControls
        camera={camera}
        rotateSpeed={0.2}
        zoomSpeed={0.2}
      />
    </>
  )
}
export default CameraControls;
