import React from 'react';
import img from '../src/images/img1.jpg';
import star from '../src/images/star.png';

export default function cards(props){
    let badgeText
    if(props.openSpots=== "0"){
        badgeText="SOLD OUT";
    }
    if(props.openSpots==="1"){
        badgeText="Filling Fast";
    }
    if(props.openSpots==="2"){
        badgeText="";
    }
    return(
        <div className="card">
            {badgeText &&<div className="card--badge">{badgeText}</div>}
            <img className="img1" src={props.img} ></img>
            <div className="card--stats">
                <img className="star"src={star}></img>
                <span>{props.Rate}</span>
                <span>{props.Rating} •</span>
                <span className="country">{props.country}</span>
            </div>
            <p class="names">{props.name}</p>
            <p><span class="bold">{props.price}</span> Per Day </p>
        </div>
        )
}