import { Canvas } from "@react-three/fiber";
import { Environment, Center, OrbitControls } from "@react-three/drei";
import * as THREE from 'three';

import Model from './Model';
import CameraRig from './CameraRig';
import Backdrop from './Backdrop';

const CanvasModel = () => {

  return (
    <Canvas shadowMap camera={{ position: [0, 5, 10] }}>
      <ambientLight intensity={0.7}/>

       {/* Create a directional light */}
       <directionalLight
        position={[0, 10, 0]}
        intensity={1}
        castShadow={true}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={500}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
        shadow-camera-left={-50}
        shadow-camera-right={50}
      />
      <CameraRig>
        
          <Center>
            <Model/>
          </Center>
      </CameraRig>
      <OrbitControls />
    </Canvas>
  )
}

export default CanvasModel