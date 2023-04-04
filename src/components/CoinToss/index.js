// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    heads: 0,
    tails: 0,
  }

  onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState({
        image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.setState({
        image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {image, heads, tails} = this.state
    const total = heads + tails

    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img className="coin-image" src={image} alt="toss result" />
          <br />
          <button
            type="button"
            className="toss-button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="counter-container">
            <p className="all-counts">Total: {total}</p>
            <p className="all-counts">Heads: {heads}</p>
            <p className="all-counts">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
