import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services } from '../constants'
import { fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServiceCard = ({
  index ,title , icon, link
}) =>{
  return(
   <Tilt className=' flex items-center justify-center h-auto w-screen xs:w-auto xl:h-screen'>
    <motion.div
    variants={fadeIn("left" ,"spring" ,0.7 * index ,0.75)}
    className='w-full max-w-screen-lg p-4 rounded-[20px] shadow-card'
    >

    <div options ={
      {
        max: 45,
        scale:1,
        speed: 450
      }
    }
    className='bg-black rounded-[50px] py-3 px-4 flex justify-center items-center flex-col h-[200px]'>

     <a href={link}>
      <img src={icon} alt='web-development'
      className='w-26 h-26 object-contain rounded-[20px]'
      />

     </a>

    </div>
    </motion.div>


   </Tilt>
  )
}



// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  return (
   
    <>
     <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
     </motion.div>

     <motion.p variants={fadeIn("" , "" , 0.1 ,1)}
      className='mt-4 text-pink-100 text-[17px] max-w-8xl leading-[30px]'
     >
         “Hey 👋 Welcome to world of Shreyas-D
        <br/>
         An innovative B.Tech engineering student with a passion for web development, DSA, and cutting-edge technologies, poised to bridge the digital world with practical engineering expertise.”
      <br/>
     </motion.p>
      {/*<h3 className='text-white text-[20px] font-bold text-center'>{ServiceCard.title}</h3>*/}
     <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index) =>(

        <ServiceCard key={service.title} index = {index} {...service}/>
      ))}

     </div>
    </>
  )
}

export default SectionWrapper(About,"about")