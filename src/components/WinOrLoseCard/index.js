// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWin, currentScore, playAgain} = props
  const text = isWin ? 'You Won' : 'You Lose'
  const scoreText = isWin ? 'Best Score' : 'Score'
  const imgUrl = isWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onPlayAgain = () => {
    playAgain()
  }

  return (
    <div className="card-container">
      <div className="text-container">
        <h1 className="heading">{text}</h1>
        <p className="score-text">{scoreText}</p>
        <p className="score-result">{currentScore}/12</p>
        <button type="button" className="play-button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img className="image" src={imgUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
