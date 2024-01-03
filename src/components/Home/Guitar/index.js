import './index.scss'
import GuitImage from '../../../assets/images/guitar.jpeg'

const Guitar = () => {
  return (
    <div className='logo-container'>
      <img className="solid-logo" src={GuitImage} alt="guitar"/>
    </div>
  )
}

export default Guitar;