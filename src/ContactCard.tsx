import React from 'react';

function ContactCard(props: 
    { 
        imgUrl: string | undefined;
        name: string | undefined;
        phone: string | undefined;
        email: string | undefined;
    }
    ){
        console.log(props);
    return (
        <div className="contact-card">
            <img src={props.imgUrl} />
            <h3> {props.name}</h3>
            <p>Phone : 123 123 123</p>
            <p>Email : mr.satoshi.nakamoto@gmail.com</p>
        </div>
    )
}

export default ContactCard