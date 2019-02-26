import React, { useState } from 'react'
import Quote from './Quote'
import buzz from './buzz-on-the-moon-smaller.jpg'

const App = (props) => {  
  const quotes = props.quotes
  const numQuotes = quotes.length
  // currentIndex tracks the array index of the current quote
  // changeIndex is the function that updates currentIndex
  const [currentIndex, changeIndex] = useState(0)
  // quote's value is the current quote
  // setQuote updates the quote that is displayed
  const [quote, setQuote] = useState(quotes[currentIndex])
  
  // changeQuote is called when the image is clicked
  const changeQuote = () => {   
    // changeIndex can take a value or function
    // reference. To keep things in sync a function
    // is used
    changeIndex((currentIndex) => {
      // Ensure quotes wrap
      if (currentIndex === numQuotes - 1) {
        currentIndex = 0;
      } else {
        currentIndex = currentIndex + 1
      }
      setQuote(quotes[currentIndex])
      // Update the value of currentIndex by returning it
      // currentIndex = currentIndex + 1 will not do it!
      return currentIndex
    })    
  }

  return (
    <div className="container">
      <h1>Buzz Aldrin Quotes</h1>
      <p>Click the picture to get another quote</p>
      <img src={buzz} onClick={changeQuote} alt="Buzz Aldrin on the Moon with Buzz in space suit, less helmet, inset at top left" />
      <Quote theQuote={quote} />
    </div>
  )
}

export default App
