import React, { Component } from 'react';

export default class AgeStats extends Component {

    calculate(date) {
        let currentDate = new Date().getTime();
        let birthday = new Date(date).getTime();
        let difference = Math.abs(birthday - currentDate);
        let day = Math.floor(difference/(1000*3600*24));
        let year = Math.floor(day/(365));
        day -= year* 365;
        let months = Math.floor(day/31);
        day -= months*31;
        return `You lived ${year} years, ${months} months and ${day} days on Earth!`
    }

    render() {
        return (
            <div>
               <h4> {this.calculate(this.props.date)} </h4>
            </div>
        );
    }
}