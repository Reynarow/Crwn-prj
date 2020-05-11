import React , {useEffect, useState} from 'react';
import './authWarning.styles.scss';


import { connect } from 'react-redux';
import { setErrorNull} from '../../Redux/user/user.action'




const AuthWarning = ({ error , cleanError }) => {
    const [fadeMode , setFadeMode] = useState('')
    useEffect(() => {
        setFadeMode('fade-to-bottom')
       const Fadeinterval=setInterval(() =>{
           setFadeMode('fade-to-top')
        },3000)
        const cleanErrorInterval = setInterval(() => {
            cleanError()
        }, 3300);
        
        return () =>{
           
            clearInterval(Fadeinterval)
            clearInterval(cleanErrorInterval)
        }
    }, [cleanError])


    return (
        <div className={`warning-box ${fadeMode}` }>
            <h3>Warning!</h3>
            <div className="message">
                {error.message}
            </div>
            <button className="dismiss-button" onClick={cleanError} >dismiss</button>
        </div>)

}



const mapDispatchToProps = dispatch =>({
    cleanError : () => dispatch(setErrorNull())
}) 

export default connect(null,mapDispatchToProps)(AuthWarning);