import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'

const quotes = [
  "A mind concerned about danger is a clouded mind. It's paralyzing.",
  "They didn’t tell me I was going into space until after they locked the shuttle doors and started counting down.",
  "Fear and worry are emotions that cloud the mind from being able to think clearly, to remember what the procedures are to deal with that emergency.",
  "There's no doubt who was a leader in space after the Apollo Program. Nobody came close to us. And our education system, in science, technology, engineering and math, was at the top of the world. It's no longer there. We're descending rather rapidly.",
  "The surface of the moon is like nothing here on Earth! It's totally lacking any evidence of life. It has lots of fine, talcum-powderlike dust mixed with a complete variety of pebbles, rocks, and boulders. Many pebbles, fewer rocks, and even fewer boulders naturally make up its surface. The dust is a very fine, overall dark gray. And with no air molecules to separate the dust, it clings together like cement.",
  "There may be aliens in our Milky Way galaxy, and there are billions of other galaxies. The probability is almost certain that there is life somewhere in space.",
  "The biggest benefit of Apollo was the inspiration it gave to a growing generation to get into science and aerospace.",
  "When we set out to land people on the surface of Mars, I think we should as a nation, as a world, commit ourselves to supporting a growing settlement and colonization there. To visit a few times and then withdraw would be an unforgivable waste of resources.",
  "We can continue to try and clean up the gutters all over the world and spend all of our resources looking at just the dirty spots and trying to make them clean. Or we can lift our eyes up and look into the skies and move forward in an evolutionary way.",
  "The final frontier may be human relationships, one person to another.",
  "Many say exploration is part of our destiny, but it's actually our duty to future generations and their quest to ensure the survival of the human species.",
  "Fighter pilots have ice in their veins. They don't have emotions. They think, anticipate. They know that fear and other concerns cloud your mind from what's going on and what you should be involved in.",
  "We need the next generation to be motivated and to push technological boundaries, to seek out new innovations.",
  "The universe is the way it is. It's not going to be changed by supplications.",
  "My sister called me 'Buzzard' when I was a baby - she couldn't say 'Brother' so I've been Buzz my whole life.",
  "Bravery comes along as a gradual accumulation of discipline.",
  "I still say, 'Shoot for the moon; you might get there.'",
  "Whenever I gaze up at the moon, I feel like I'm on a time machine. I am back to that precious pinpoint of time, standing on the foreboding - yet beautiful - Sea of Tranquility. I could see our shining blue planet Earth poised in the darkness of space.",
  "History will remember the inhabitants of this century as the people who went from Kitty Hawk to the moon in 66 years, only to languish for the next 30 in low Earth orbit. At the core of the risk-free society is a self-indulgent failure of nerve.",
  "Knowledge of the past and an optimistic view of the present give you great opportunities.",
  "Exploration is wired into our brains. If we can see the horizon, we want to know what's beyond.",
  "Neil Armstrong was the first man to walk on the moon. I am the first man to piss his pants on the moon.",
  "If we can conquer space, we can conquer childhood hunger.",
  "No dream is too high for those with their eyes in the sky!",
  "I think humans will reach Mars, and I would like to see it happen in my lifetime."
]

// Randomise order of quotes
quotes.sort(() => 0.5 - Math.random())

// Pass as a prop to the App component
render(<App quotes={quotes} />, document.getElementById('root'))
