import React, { useState, useEffect } from 'react';
import  axios  from 'axios';

function Servis() {

    const[firstName, setFirstName] = useState('');
    useEffect
    (async() =>
        {
            const response = await axios.get('https://www.mockachino.com/c30e50d6-aca1-47/users');
            console.log(response);
            setFirstName(response.data.users[0].first_name);
        },
        []
    );

    return(
        <>
            {firstName}
        </>
    )

}

export default Servis;