import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm frontend web developer full of wonder about all web technologies.
            Currently I have experince in working with HTML, CSS and Javascript, while working towards learning
            new frameworks such as React.
          </p>
          <p align="LEFT">
            I'm confident in working in new enviorments that require critical thinking and
            adapting to nessecary changes. I am always willing to be a student of the craft and
            learn what I need to make it to the next level.
          </p>
          <p>
            Outside of tech my hobbies include: any sport with a board, gardening, woodworking
            and cinema. I am a proud father of two and love spending time with my family outdoors
            as much as possible.
          </p>
        </div>
        </div>
    </>
  )
}

export default About