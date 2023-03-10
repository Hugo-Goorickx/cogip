import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Boy from '../assets/images/Boy.svg';
import Main from '../assets/images/Main.svg';

function ContactPeople(props){
    const [data, setData] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        let url = 'https://api.hugoorickx.tech/' + props.table + '/' + props.display + '/' + id;
        fetch(url, { method: 'GET' })
            .then((response) => response.json())
            .then((responseData) => setData(responseData.message || []));
    }, []);
    console.log(data);
    return(
        <>
            <h2>
                Contact people
            </h2>
            <div className='contact_people'>
                {Array.isArray(data) ? data.map((elem) => (
                    <div className='contact'>
                        <img src={Boy} alt="#" />
                        <h3>
                            {elem.name}
                        </h3>
                     </div>
                 )) : null}
            </div>
            <img src={Main} alt="#" id="cp_main"/>
            <hr />
        </>
    )
}

export default ContactPeople;

//GET contact/company/id