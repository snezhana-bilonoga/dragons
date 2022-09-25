import { useSelector } from 'react-redux';
import {ColorRing} from 'react-loader-spinner';
import './Spin.css'

const Spin = (props) => {
  const spinner = useSelector(state => state.app.loading);

  return (
    <div className='loader-styles'>
        <ColorRing
            visible={spinner}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    </div>
  )
}

export default Spin;