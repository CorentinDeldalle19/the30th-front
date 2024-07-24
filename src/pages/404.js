import { Link } from 'react-router-dom'

import '../components/styles/error.css'

import error from '../media/error.png'

function Error(){
    return(
        <div className="fullPage">
            <div className='page'>
                <h1>Oups... Something is wrong</h1>
                <img src={error} alt=""/>
                <Link to="/dashboard">
                    <p>Come back</p>
                </Link>
            </div>
        </div>
    )
}

export default Error;