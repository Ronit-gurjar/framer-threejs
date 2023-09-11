import React,{useRef} from 'react'
import {easing} from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame} from '@react-three/fiber';
import { Decal, useGLTF, useTexture} from '@react-three/drei';
import state from '../store'

const Model = (props) => {
  const meshRef = useRef();
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb');

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  return (
    <group>
      <mesh
        ref={meshRef}
        receiveShadow
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
        {...props}
      >
      </mesh>
    </group>
  )
}

export default Model