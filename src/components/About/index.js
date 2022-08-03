import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={'A', 'b', 'o', 'u', 't', ' ', 'm', 'e'}
                        idx={15}
                    />
                </h1>
                <p>Excepteur id incididunt magna adipisicing duis velit. Nisi magna cupidatat aute aliqua excepteur pariatur dolore dolor. 
                Ullamco id cillum sit ullamco cupidatat consectetur elit qui aute exercitation. 
                Fugiat reprehenderit aliqua voluptate mollit anim anim nisi est ex eiusmod occaecat.
                </p>
                <p>Excepteur id incididunt magna adipisicing duis velit. Nisi magna cupidatat aute aliqua excepteur pariatur dolore dolor. 
                Ullamco id cillum sit ullamco cupidatat consectetur elit qui aute exercitation. 
                Fugiat reprehenderit aliqua voluptate mollit anim anim nisi est ex eiusmod occaecat.
                </p>
                <p>Excepteur id incididunt magna adipisicing duis velit. Nisi magna cupidatat aute aliqua excepteur pariatur dolore dolor. 
                Ullamco id cillum sit ullamco cupidatat consectetur elit qui aute exercitation. 
                Fugiat reprehenderit aliqua voluptate mollit anim anim nisi est ex eiusmod occaecat.
                </p>
            </div>
        </div>
    )
}

export default About