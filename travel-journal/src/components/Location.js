import React from 'react';
import { MdLocationOn } from 'react-icons/md';



export default function Location(props) {
    return (
        <div className='location-container'>
            <img src={`${props.imgUrl}`} alt={`${props.title}`}/>
            
            <section className='location-info'>
                <div className='location-top'>
                    <MdLocationOn className='location-dot'/>
                    <span className='location-location'>{props.location}</span>
                    <span className='google-map-link'><a href={`${props.mapLink}`} >View on Google Maps</a></span>
                </div>
                <h1 className='location-site'>{props.title}</h1>
                <h6 className='location-date'>{props.startDate} - {props.endDate}</h6>
                <p className='location-paragraph'>{props.description}</p>
            </section>
            


        </div>
    )
}