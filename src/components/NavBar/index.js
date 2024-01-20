// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, topScore, gameAlive} = props
  return (
    <div className="navbar-container">
      <div className="content-container">
        <div className="title-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="emoji-game-title">Emoji Game</h1>
        </div>
        {gameAlive ? (
          <div className="score-container">
            <p className="current-score score">Score: {currentScore}</p>
            <p className="top-score score">Top Score: {topScore}</p>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default NavBar
