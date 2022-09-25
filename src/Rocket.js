import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Carousel from "./Carousel";
import './Rocket.css';

function Rocket() {
    const { state } = useLocation(); 

    const formatDetails = (property, values) => <p> 
        {property}: {
            Object.entries(values)
                .map(([unit, value]) => `${value}${unit}`)
                .join(' / ')
        } 
    </p>

    return (
        <div>
            { !state ?
                <div> </div> : 
                <div className='rocket'>
                    <Carousel slides={state.flickr_images} />
                    <div className='content'>
                        <h1>{state.name}</h1>
                        <p>{state.description}</p>
                        <a href={state.wikipedia}>Wikipedia link</a>
                        <p>First flight date {state.first_flight}</p>
                        {formatDetails('Launch payload mass', state.launch_payload_mass)}
                        {formatDetails('Return payload mass', state.return_payload_mass)}
                        {formatDetails('Height', state.height_w_trunk)}
                        <Link to={'/'}>
                            <button>	
                                🡄 Back 
                            </button>
                        </Link>
                       
                    </div>
                </div>
            }
        </div>
    );
}

export default Rocket;