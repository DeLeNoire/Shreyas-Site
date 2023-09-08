import React from 'react'
import{Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls , Preload , useGLTF} from "@react-three/drei";
import CanvasLoader from '../Loader.jsx';


const Earth = () => {
    
    const earth = useGLTF('./planet/scene.gltf')



  return (
      <mesh>
      <hemisphereLight intensity={0.2} rotation={2} groundColor='black'/>
         <ambientLight color='white'/>
          <pointLight intensity={0.2} color='blue'/>
          <spotLight
          color='red'
          />

          <primitive object={earth.scene}
                     scale={2.4}
                     position-y = {0}
                     rotation-y={0}
          />

      </mesh>


//       <Html>
//           <div className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
//               <iframe  allowFullScreen webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking"   src="https://sketchfab.com/models/4271c4d0477840c8b5a0a1df97bca25e/embed"
// aria-setsize={2}
//               >
//               </iframe>
//           </div>
//       </Html>
  )
}

const EarthCanvas = () => {
    return (
        <Canvas
        shadows
        frameloop='demand'
        gl={{preserveDrawingBuffer: true}}
        camera={{
            fov:45,
            near:0.1,
            far: 200,
            position:[-4,3,6]
        }}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls
                autoRotate
                enableZoom={true}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle = {Math.PI / 2}
                />
                <Earth/>
            </Suspense>
        </Canvas>
    )
}

export default EarthCanvas;
