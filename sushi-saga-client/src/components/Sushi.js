import React, { Fragment } from 'react'

class Sushi extends React.Component {

  state = {
    eaten: false
  }

  handleClick = () => {
    if(this.props.amount >= this.props.sushi.price && !this.state.eaten){
      this.setState({eaten: true})
      this.props.handlePrice(this.props.sushi)
    }
  }

  render(){
    return (
      <div className="sushi">
        <div className="plate"
          onClick={this.handleClick}>
          {
            this.state.eaten ?
            null
            :
            <img src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }

}

export default Sushi
