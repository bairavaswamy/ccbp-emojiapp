import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    selectedIdList: [],
    isWin: false,
    gameAlive: true,
  }

  onClickEmoji = id => {
    const {selectedIdList} = this.state
    const index = selectedIdList.indexOf(id)

    if (index === -1) {
      this.setState(prevState => ({
        selectedIdList: [...prevState.selectedIdList, id],
        currentScore: prevState.currentScore + 1,
      }))
      if (selectedIdList.length === 11) {
        this.setState({gameAlive: false, isWin: true})
      }
    } else {
      this.setState({gameAlive: false})
    }
  }

  getWinOrLooseCard = () => {
    const {isWin, currentScore, topScore} = this.state
    if (currentScore > topScore) {
      this.setState({topScore: currentScore})
    }
    return (
      <WinOrLoseCard
        isWin={isWin}
        currentScore={currentScore}
        playAgain={this.playAgain}
      />
    )
  }

  getContent = () => {
    const {gameAlive} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const shuffledEmojisLists = shuffledEmojisList()

    return gameAlive
      ? shuffledEmojisLists.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emoji={eachEmoji}
            onClickEmoji={this.onClickEmoji}
          />
        ))
      : this.getWinOrLooseCard()
  }

  playAgain = () => {
    this.setState({gameAlive: true, currentScore: 0, selectedIdList: []})
  }

  render() {
    const {currentScore, topScore, gameAlive} = this.state

    return (
      <div>
        <NavBar
          currentScore={currentScore}
          topScore={topScore}
          gameAlive={gameAlive}
        />
        <div className="emoji-game-container">
          <ul className="emojis-container">{this.getContent()}</ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
