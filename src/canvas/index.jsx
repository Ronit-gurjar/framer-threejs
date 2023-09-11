import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Model from './Model';
import CameraRig from './CameraRig';
import Backdrop from './Backdrop';

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.7}/>
      <CameraRig>
        
          <Center>
            <Model/>
          </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel