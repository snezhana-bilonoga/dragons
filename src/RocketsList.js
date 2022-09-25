import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRockets } from "./redux/actions";
import { Link, Navigate  } from "react-router-dom";
import { removeUser } from "./redux/actions";
import './RocketsList.css';


function RocketsList() {
    const rockets = useSelector(state => state.rockets.rockets);
    const user = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRockets());
        console.log(user);
    }, [dispatch, user]);


   
    return !!user.id ? (
        <>
        <header className="header">
            <button className="profile">
                My Profile
            </button>
            <button className="log-out"
                onClick={()=> dispatch(removeUser())}
            >Log Out </button>
        </header>
        <div className="rocket-list">
                {rockets.map(rocket =>
                    <div key={rocket.id}  className="rocket-item">
                         <button className="favorite">☆</button>
                        <h2>{rocket.name}</h2>
                        <img src={rocket.flickr_images[0]} alt="rocket"></img>
                        <Link 
                            to={`/rocket/${rocket.id}`}
                            state={rocket}
                        >
                            <button className="details">
                                More Details
                            </button>
                        </Link>
                    </div>
                )}
        </div>
        </>
    ) : (
        <Navigate to='/login' />
    )
}


export default RocketsList