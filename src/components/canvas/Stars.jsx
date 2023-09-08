import {Suspense, useRef, useState} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import { PointMaterial, Points} from "@react-three/drei";
import {Preload} from "@react-three/drei";
import {random} from "maath";

// EarthCanvas
// const [, set] = useState()
// useRef()
// Suspense
// Canvas
// useFrame()
// Points
// PointsMaterial
// Preload

const Stars = () => {

  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000) , {radius: 1.2})


    useFrame((state , delta) => {
        ref.current.rotation.x -= delta /10 ;
        ref.current.rotation.y -= delta /10 ;
    })

  return (
   <group rotation={[0,0,Math.PI /4]}>

     <Points ref={ref} positions={sphere} stride={3} fustrumCulled>
       <PointMaterial
       transperent
       color='#f272c8'
       size={0.002}
       sizeAttenuation={true}
       depthWire={false}
       />
     </Points>
   </group>
  )
}



const StarCanvas = ( ) => {
  return(
      <div className='w-full h-auto absolute inset-0 z-[-1]'>
        <Canvas camera={{position:[0,0,1]}}>
          <Suspense fallback={null}>

            <Stars/>
          </Suspense>
          <Preload/>
        </Canvas>
      </div>
  )
}

export default StarCanvas