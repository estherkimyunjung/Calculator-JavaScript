import React, { Component } from 'react';

class Application extends Component {

  constructor(props){
    super(props);

    this.state = {
      count: 0,
      overTen: false
    }
  }

  handleClike = () => {
    this.setState({count: this.state.count + 1});
  }

  componentDidUpdate(props, state){
    // console.log("Updated from", state, "to", this.state );
    if(this.state.count > 10 && this.state.count != state.count && !this.state.overTen){
      console.log("Updating over Ten")
      this.setState({overTen: true})
    }
  }

  render(){
    let {count} = this.state
    return (
      <div>
        <h1>You cliked the button {count} times</h1>
        {
          this.state.overTen 
          ? <h3>Beat high score of 10!</h3>
          : null
        }
        <span>
          <button onClick={()=> this.handleClike()} >Click Me</button>
        </span>
      </div>
    );
  }
}
export default Application