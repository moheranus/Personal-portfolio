import React from 'react'
import "./experience.css"
function Experience() {
  return (
   <>
   <div className="experience" id='experience'>
   <div class="experience-card">
  <div class="experience-circle"></div>
  <div class="experience-circle"></div>
  <div class="experience-card-inner">
    <div className='experience-header'>
        <div className='year'>
            <p>2023-PRESENT</p>
        </div>
        <div className='company'>
            <p>HST DIgital </p>
        </div>
    </div>
    <div  className='experience-subheader'>
        <p className='gradient-text'>Software Developer</p>
    </div>
    <div className='experience-body'>
        <p>Contributing transformative solutions at HST Digital as a Software Developer. dedicated to crafting innovative code and overcoming challenges. Committed to continuous learning and collaborative excellence.</p>
        <div className='experience-body-tech'>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>PHP</li>
                <li>Laravel</li>
                <li>MUSTACHE</li>
                <li>MOODLE</li>

            </ul>
        </div>
  </div>
</div>

   </div>


   <div class="experience-card">
  <div class="experience-circle"></div>
  <div class="experience-circle"></div>
  <div class="experience-card-inner">
    <div className='experience-header'>
        <div className='year'>
            <p>12/2021 - 02/2022</p>
        </div>
        <div className='company'>
            <p>Enat Bank</p>
        </div>
    </div>
    <div  className='experience-subheader'>
        <p className='gradient-text'>Frontend Developer</p>
    </div>
    <div className='experience-body'>
        <p>Developed Exchange rate display web app using EJS and MongoDB.
           <span>Responsibilities:</span>  [Designed and coded the front-end web
            app].
        </p>
        <p>
        Developed Lost instrument registration web app using EJS and
        MongoDB. <span>Responsibilities:</span>  [Designed and coded front-end
        web app].

        </p>
        <div className='experience-body-tech'>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>MONGODB</li>
                <li>NODEJS</li>
                <li>EXPRESS</li>
                

            </ul>
        </div>
  </div>
</div>

   </div>
   <div class="experience-card">
  <div class="experience-circle"></div>
  <div class="experience-circle"></div>
  <div class="experience-card-inner">
    <div className='experience-header'>
        <div className='year'>
            <p>10/2022 - 12/2022</p>
        </div>
        <div className='company'>
            <p>Echnoserve-consulting</p>
        </div>
    </div>
    <div  className='experience-subheader'>
        <p className='gradient-text'>Web Developer</p>
    </div>
    <div className='experience-body'>
        <p>Built Tolopay wallet payment system web app using Reactjs and
            Figma. <span>Responsibilities:</span> Designed front-end using Figma and
            implemented using ReactJs.
        </p>
       
        <div className='experience-body-tech'>
            <ul>
                <li>React js</li>
                <li>Nodejs</li>
                <li>Figma</li>
                <li>Ant Design</li>
                
                

            </ul>
        </div>
  </div>
</div>

   </div>
   </div>
   </>
  )
}

export default Experience