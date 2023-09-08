import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import {styles} from '../styles'
import {EarthCanvas} from "./canvas"
import {SectionWrapper} from "../hoc"
import { slideIn } from "../utils/motion"
import {motion} from "framer-motion";


import instagramIcon from '../assets/instagram-icon.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';
import githubIcon from '../assets/github-icon.svg';

const Contact = () => {
  const formRef = useRef();

   const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
   });

   const[loading , setLoading] = useState(false);

   const handleChange = (e)  => {
       const {name , value} = e.target;
       setForm({...form , [name]: value})
   }

   const handleSubmit = (e) => {
       e.preventDefault();
       setLoading(true);

       emailjs.send('service_d43aws4' , 'template_mojkpgb',
           {
               from_name: form.name,
               to_name: 'Shreyas D',
               from_email: form.email,
               to_email: 'Shreyaskota1@gmail.com',
               message: form.message,

           },
           'PlFwfBF1q7pNcVyp3'
           )
           .then(() => {
               setLoading(false);
               alert('Thanks...I Will Get Back To You ');

               setForm({
                   name:'',
                   email:'',
                   message:'',
               })
           } , (error) => {
               setLoading(false)
               console.log(error);
               alert('Something went wrong.')
           })

   }

  return (
   <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">

       <motion.div
       variants={slideIn('right' , 'tween' , 0.2 , 1)}
       className='flex-[0.75] bg-transparent p-8 rounded-2xl'
       >
           <p className={styles.sectionSubText }>
             Get In Touch
           </p>
           <h3 className={styles.sectionHeadText}>
               Contact.
           </h3>

           <form
           ref={formRef}
           onSubmit={handleSubmit}
           className='mt-12 flex flex-col gap-8'
           >
               <label className='flex flex-col '>
                   <span className="text-[#B2ebf2] font-medium mb-4">
                       Your Name
                   </span>
                   <input
                   type='text'
                   name="name"
                   value={form.name}
                   onChange={handleChange}
                   placeholder="What's your name? "
                   className='bg-black py-2 px-6 placeholder:text-[#4f4e52]
                   text-white rounded-lg outlined-none border-none font-medium'
                   />
               </label>
               <label className='flex flex-col '>
                   <span className="text-[#B2ebf2] font-medium mb-4">
                       Email
                   </span>
                   <input
                       type='email'
                       name="email"
                       value={form.email}
                       onChange={handleChange}
                       placeholder="What's your email?"
                       className='bg-black py-2 px-6 placeholder:text-[#4f4e52]
                   text-white rounded-lg outlined-none border-none font-medium'
                   />
               </label>
               <label className='flex flex-col '>
                   <span className="text-[#B2ebf2] font-medium mb-4">
                       Your Message
                   </span>
                   <textarea
                       rows='7'
                       name="message"
                       value={form.message}
                       onChange={handleChange}
                       placeholder="What's your impression?"
                       className='bg-black py-2 px-6 placeholder:text-[#4f4e52]
                   text-white rounded-lg outlined-none border-none font-medium'
                   />
               </label>

               <button
               type='Send'
               className='py-3 px-8 outline-none text-white-100 font-bold text-[22px] shadow-primary'
               >
                   {loading ? 'sending...' : 'Send'}

               </button>

           </form>

       </motion.div>
       <motion.div
           variants={slideIn('left' , 'tween' , 0.2 , 1)}
           className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] '
       >
           <EarthCanvas/>

       </motion.div>
<br/>

      {/* Icon Links */}
      <div className="absolute bottom-1 xs:bottom-1  w-full  flex justify-center items-center   ">
        <a
          href="https://www.instagram.com/reydotd/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <img src={instagramIcon} alt="Instagram" className="custom-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/shreyasd19/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="custom-icon" />
        </a>
        <a
          href="https://github.com/DeLeNoire"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <img src={githubIcon} alt="GitHub" className="custom-icon" />
        </a>
      </div>


   </div>
  )
}

export default SectionWrapper(Contact, "contact")