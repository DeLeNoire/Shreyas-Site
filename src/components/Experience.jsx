import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import {styles} from '../styles'
import {SectionWrapper} from '../hoc'
import { textVariant } from "../utils/motion"
import {experiences} from '../constants'
import 'react-vertical-timeline-component/style.min.css'

const ExperienceCard = ({experience}) =>
    (
      
  <VerticalTimelineElement
  contentStyle={{background: 'black' , color: 'teal'}}
  contentArrowStyle={{borderRight: '7px solid #232631'}}
  // date={experience.date}
  iconStyle={{background: experience.iconBg}}
  icon =
      {
    <div className="flex justify-center items-center w-full h-full">
      <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain"/>
    </div>
  }
  >
    <div >
      <a  href={experience.link} target="_blank" rel="noopener noreferrer" className="experience-link">
      <h3 className="text-orange-200 text-[24px] font-bold">{experience.title}</h3>
      <p className="text-white-100 text-[18px] font-bold" style={{margin:0}}> {experience.company_name}</p>
      </a>
    </div>

    <ul className="  font-mono mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point , index) =>
          (
        <li key={`experience-point-${index}`} className=" text-gray-400 text-[16px] pl-1 tracking-wider">
          {point}
        </li>

          ))}
    </ul>

   

  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>SOME OF MY WORKS</p>
      <h2 className={styles.sectionHeadText}>Experience</h2>
    </motion.div>


    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          
          <ExperienceCard key={index} experience={experience}/>
        
        ))}
        </VerticalTimeline>
    </div>

    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Experience,"work")