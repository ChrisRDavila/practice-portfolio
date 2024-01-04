import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])


  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={['C','o','n','t','a','c','t',' ','m','e']}
            idx={15}
            />
          </h1>
          <p>
            I am interested in sharing and meeting fellow developers in the community. Any oppurtunity to work alongside, receive critiques or see a project someones excited about are welcome investments of my time.  If you have any requests or questions, or want to work on a project please contact via the following methods
          </p>
          <div className='contact-form'>
            <ul>
              <li className='half'>
                <input type='text' name='name' placeholder='Name' required />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;