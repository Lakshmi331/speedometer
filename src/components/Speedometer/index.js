import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onIncrement = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState + 10}))
    }
  }

  onDecrement = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/content/react-js/speedometer-ouput.gif"
          alt="speedometer output"
        />
        <h1>Speed is {speed} mph</h1>
        <p>Min limit is 0mph, Max limit is 200mph</p>
        <div className="buttons-container">
          <button
            type="button"
            onClick={this.onIncrement}
            className="accelerate-button"
          >
            Accelerate
          </button>
          <button
            type="button"
            onClick={this.onDecrement}
            className="brake-button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
