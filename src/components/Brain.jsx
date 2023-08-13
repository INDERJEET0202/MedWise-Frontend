/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 brain.gltf --transform 
Files: brain.gltf [4.89MB] > brain-transformed.glb [574.28KB] (88%)
Author: 3DRT STUDIOS (https://sketchfab.com/Hanako.com)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/human-brain-7a27c17fd6c0488bb31ab093236a47fb
Title: Human Brain
*/

import React, { useContext, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { APIContext } from "../context/context";
import customTexture from "/brain-texture.png";
import * as THREE from "three";

export default function Model(props) {
  const { rotationX } = useContext(APIContext);
  const { nodes, materials } = useGLTF("/brain-transformed.glb");
  const [materialTexture, setMaterialTexture] = React.useState(null);

  // Load the custom texture when the component mounts
  React.useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(customTexture, (texture) => {
      setMaterialTexture(texture);
    });
  }, []);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.material_0}
        scale={0.05}
        position={[1.5, -0.7, 0]}
        rotation={[0.2, rotationX, 0]}
      ></mesh>
    </group>
  );
}

useGLTF.preload("/brain-transformed.glb");