import React, { useEffect, useState } from 'react';
import {Navigate} from 'react-router-dom'
function Dashboard() {
    const [isLogged, setIsLogged] = useState(true)
    useEffect(()=>{
        console.log('1')
        let token;
        try {
        token = localStorage.getItem('Token')
        console.log(token)
        if(!token)
         setIsLogged(false)

        } catch (error) {
            console.log(error)
            setIsLogged(false)
        }
    
    },[])
    console.log('3')

    if(!isLogged)
        return <Navigate to="/login"/>

    return (
        <div>
            Dashboard
        </div>
    );
}

export default Dashboard;