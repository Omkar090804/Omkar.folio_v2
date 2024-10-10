import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf")

  return (
    <mesh>                                      //for 3js we startwith mesh nor with div
      <hemisphereLight intensity={0.15} 
      groundColor='black' />
      <pointLight intensity={1} />                //the white light on comp screen in website
      <spotLight 
        position={[-20,50,10]}
        angle={0.12}                          //setting the posn of comp on the screen of website
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}                    //for mobile 
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0,-3,-2.2 ]:[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
 
    const mediaQuery = window.matchMedia("(max-width: 500px)");

 
    setIsMobile(mediaQuery.matches);

   
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}            //to set the postion from which we view the comp while rotating it
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>                 //this is comming from react not from 3js
        <OrbitControls
          enableZoom={false}                             //no zoom
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;