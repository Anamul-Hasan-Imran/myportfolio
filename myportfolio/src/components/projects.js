import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, CardMenu, Button, IconButton } from 'react-mdl'

class Projects extends Component {
constructor(props) {
  super(props)
  this.state = { activeTab: 0 }
}

  togglecCategories(){

  if(this.state.activeTab === 0){
    return(
      <div className="projects-grid">
       {/* project #1 */}
      <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://scotch-res.cloudinary.com/image/upload/w_1000,q_auto:good,f_auto/media/3904/k4LQqjTiQkKgYljbKVvm_StopWatchLogo.jpg) center / cover'}}>React project #1</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
       <CardActions border>
        <Button colored>Github</Button>
        <Button colored>codepen</Button>
        <Button colored>livedemo</Button>
       </CardActions>
       <CardMenu style={{color: '#fff'}}>
          <IconButton name="/share" />
       </CardMenu>
      </Card>
       {/* project #2 */}
      <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://scotch-res.cloudinary.com/image/upload/w_1000,q_auto:good,f_auto/media/3904/k4LQqjTiQkKgYljbKVvm_StopWatchLogo.jpg) center / cover'}}>React project #2</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
       <CardActions border>
        <Button colored>Github</Button>
        <Button colored>codepen</Button>
        <Button colored>livedemo</Button>
       </CardActions>
       <CardMenu style={{color: '#fff'}}>
          <IconButton name="/share" />
       </CardMenu>
      </Card>
       {/* project #3 */}
      <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://scotch-res.cloudinary.com/image/upload/w_1000,q_auto:good,f_auto/media/3904/k4LQqjTiQkKgYljbKVvm_StopWatchLogo.jpg) center / cover'}}>React project #3</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
       <CardActions border>
        <Button colored>Github</Button>
        <Button colored>codepen</Button>
        <Button colored>livedemo</Button>
       </CardActions>
       <CardMenu style={{color: '#fff'}}>
          <IconButton name="/share" />
       </CardMenu>
      </Card>
     </div>
    )
  } else if(this.state.activeTab === 1){
    return (
     <div><h1>This is Angular</h1></div>
    )
  }
   else if(this.state.activeTab === 2){
    return (
     <div><h1>This is Vue</h1></div>
    )
  }
   else if(this.state.activeTab === 3){
    return (
     <div><h1>This is MongoDB</h1></div>
    )
  }

}


  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>Vue</Tab>
          <Tab>mongoDB</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              {/* <div className="content">{this.togglecCategories()}</div> */}
            </Cell>
          </Grid>
          {this.togglecCategories()}
        
      </div>
    )
  }
} 




export default Projects