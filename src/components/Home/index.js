import { Link} from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-r.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react'
import Guitar from './Guitar';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['o','s','s', ' ', 'D', 'a', 'v', 'i', 'l', 'a']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r','.']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  //recieving an error destroy is not a functiobat safelyCallDestroy
  //fixed by removing return for setTimeout

  return (
      <div className='container home-page'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i, </span>
            <br />
            <span className={`${letterClass} _13`}> I</span>
            <span className={`${letterClass} _14`}>'m</span>

          <img 
          src={LogoTitle} 
          alt='developer' 
          />
          <AnimatedLetters letterClass={letterClass} 
          strArray={nameArray} 
          idx={15} />
          <br />
          <AnimatedLetters letterClass={letterClass} 
          strArray={jobArray} 
          idx={26} />
          </h1>
          <h2>Full-stack developer / Student / Musician</h2>
          <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
        <div className='picture'>
          <Guitar />
        </div>
      </div>
  );
}

export default Home;