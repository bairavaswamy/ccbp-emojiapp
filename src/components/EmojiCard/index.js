// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emoji

  const onEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-container" onClick={onEmoji}>
      <button type="button">
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
