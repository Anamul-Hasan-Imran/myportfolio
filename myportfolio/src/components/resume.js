import React, { Component } from 'react'
import { Grid, Cell} from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
             <div style={{textAlign: "center"}}>
              <img 
                src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png"
               alt="avatar"
               style={{height: '200px'}}
                />
             </div>
             <h2 style={{paddingTop: '2em'}}>Imran Imu</h2>
             <h4 style={{color: 'grey'}}>Designer</h4>
             <hr style={{borderTop:'2px solid green', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{ borderTop: '2px solid green', width: '50%' }} />
            <h5>Address</h5>
            <p>shah ali bagh,mirpur 1,dhaka</p>
            <h5>Phone</h5>
            <p>019-(3656)-566</p>
            <h5>Email</h5>
            <p>imran@gmail.com</p>
            <h5>Web</h5>
            <p>bikroy.com</p>
            <hr style={{ borderTop: '2px solid green', width: '50%' }} />

            </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              endYear={2002}
              startYear={2006}
              schoolName="My University"
              schoolDescription="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here"
              />
            <Education
              endYear={2007}
              startYear={2009}
              schoolName="My University"
              schoolDescription="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here"

              />
            <hr style={{borderTop: '3px solid pink'}}/>
            <h2>Experience</h2>

           <Experience
              endYear={2009}
              startYear={2012}
              jobName="Frist job"
              jobDescription="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here"
           />
           <Experience
              endYear={2012}
              startYear={2015}
              jobName="Second job"
              jobDescription="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here"
           />
           <hr style={{ borderTop: '3px solid pink' }} />
            <h2>Skills</h2>
            <Skills
             skill="javascript"
             progress={100}
              />
             <Skills
              skill="HTML/CSS"
              progress={80}
               />
               <Skills
                skill="Nodejs"
                progress={50}
                 />
                 <Skills
                  skill="Reactjs"
                  progress={40}
                   />
                    <Skills
                     skill="php"
                     progress={20}
                      />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume


