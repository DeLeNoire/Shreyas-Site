import {motion} from 'framer-motion';
import {styles} from '../styles';
import { ComputersCanvas } from './canvas';
import useStore from './canvas/store';

<script src="https://unpkg.com/split-type"></script>


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto z-index:-1'>
       <div className='absolute inset-0 flex justify-center items-center'>
         <ComputersCanvas />
       </div>

       <div className='absolute top-[180px] left-0 right-0 text-center'>
          <h1 className= {` ${styles.responsiveHeading}`} >
             <span className=' bg-gradient-to-r from-black to-black  text-transparent bg-clip-text ' style={{
                 fontFamily:'Permanent Marker',
             }}>
               SHREYAS
             </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`} style={{
              fontFamily:'Permanent Marker',
          }}>Final Year, MNNIT</p>
      </div>

        <Overlay />
   
    </section>


  )
}


        
function Overlay() {
    const loaded = useStore((state) => state.loaded)
    const clicked = useStore((state) => state.clicked)
    const api = useStore((state) => state.api)
    return (
      <>
        <div className={`fullscreen bg ${loaded ? 'loaded' : 'not-ready'} ${clicked && 'clicked'}`}
        style={{zIndex:0}}
        >
          <div onClick={() => loaded && api.start()}>
            {!loaded ? (
              'loading'
            ) : (
              <>
                <span style={{ color: '#ffff00' }}>Welcome To My Portfolio</span>
                <br />
                <b>
                  <span style={{ color: '#606060' }}>click to experience</span>
                </b>
              </>
            )}
          </div>
        </div>
      </>
    )
  }
 


export default Hero