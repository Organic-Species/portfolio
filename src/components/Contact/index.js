import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ','m', 'e',]}
                        idx={15}
                        />
                    </h1>
                    <p>
                        Duis incididunt sit esse ipsum culpa amet culpa. Minim cupidatat est do ullamco veniam ullamco exercitation consectetur nulla fugiat 
                        voluptate adipisicing commodo. Aliqua veniam ad sit est quis aliquip. Labore reprehenderit ut pariatur esse laborum dolor cillum in 
                        eiusmod commodo ipsum elit labore minim. Culpa excepteur sint nisi adipisicing. Nisi cillum ut nostrud ipsum ea commodo officia in 
                        voluptate ullamco magna mollit. Duis consectetur eiusmod consequat mollit nulla cupidatat id velit ullamco.
                    </p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="Message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact