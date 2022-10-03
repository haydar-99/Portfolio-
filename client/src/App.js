import React from 'react'
import css from "./app.module.css"
import Navbar from './components/Navbar/Navbar'
import HomeP from './components/Home/HomeP'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Proj from './components/Projects/Proj'
import Technologies from './Technoligies/Technologies'
import Carousel from 'react-bootstrap/Carousel';


function App() {
  return (
    <div className={css.app} >
    <HomeP className ="HomeP"/>
    <Projects/>
    <Technologies style={{marginTop:"200px;"}}/>

   
  </div>
    
  )
}

export default App






/* 
 <div id="carouselExampleIndicators" className={`carousel slide `}  data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  
  <div className="carousel-inner">
    <div className="carousel-item active ">
    <HomeP className ="HomeP"/>
    </div>

    <div className="carousel-item  " id='project'>
    <Projects/>
    </div>

    <div className="carousel-item ">
    <Proj></Proj>
    </div>

    <div className="carousel-item ">
    <Technologies style={{marginTop:"200px;"}}/>
    </div>

    

  </div>
  <a className="carousel-control-prev" href="#project" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
*/