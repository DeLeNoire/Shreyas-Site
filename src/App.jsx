import { BrowserRouter } from "react-router-dom";

import { About , Contact , Experience  , Hero  ,Works ,StarCanvas, Navbar  } from './components';




const App = () => {
  
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover
      bg-no-repeat bg-center">                             

        <Navbar/>
        <Hero/>

      </div>
       <About/>
      <Experience/>
      <Works/>

      <div className="relative z-0">
        <Contact/>
        <StarCanvas/>
      </div>

    </div>
    </BrowserRouter>
  )
}

export default App
