import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

class Contact extends Component {
  render() {
    return (
      <div className="content-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Imran Imu</h2>
            <img 
              src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
            alt="avater"
            style={{height:'250px'}}
            />
            <p style={{width: '75%', margin:'auto', paddingTop: '1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

          <div className="contact-list">

            <List>
              <ListItem>
                <ListItemContent style={{fontFamily:'Anton', fontSize:'30px'}}>
                  <i className="fa fa-phone-square" aria-hidden="true"/>
                   (0195)5194-916662</ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontFamily:'Anton', fontSize:'30px'}}>
                  <i className="fa fa-fax" aria-hidden="true"/>
                   (0195)5194-</ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontFamily:'Anton', fontSize:'30px'}}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                   imran@gmail.com</ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontFamily:'Anton', fontSize:'30px'}}>
                  <i className="fa fa-skype" aria-hidden="true"/>
                   SkypeId</ListItemContent>
              </ListItem>
              

            </List>

          </div>  
        </Cell>
       </Grid>
      </div>
    )
  }
}

export default Contact

