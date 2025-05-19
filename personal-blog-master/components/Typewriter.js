import { useState, useEffect } from 'react'

const useTypewriter = (words, colors, typingSpeed = 100, deleteSpeed = 100, delay = 2000) => {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentWord = words[wordIndex]

    let timeout
    if (!isDeleting) {
      // Typing effect
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + currentWord.charAt(charIndex))
          setCharIndex((prev) => prev + 1)
        }, typingSpeed)
      } else {
        // Pause before deleting
        timeout = setTimeout(() => setIsDeleting(true), delay)
      }
    } else {
      // Deleting effect
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1))
          setCharIndex((prev) => prev - 1)
        }, deleteSpeed)
      } else {
        // Move to next word
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, deleteSpeed, delay])

  return { displayText, color: colors[wordIndex % colors.length] }
}

// Typewriter Component
const Typewriter = ({ words, colors, typingSpeed, deleteSpeed, delay }) => {
  const { displayText, color } = useTypewriter(words, colors, typingSpeed, deleteSpeed, delay)

  return <span className={`${color}`}>{displayText}</span>
}

export default Typewriter
