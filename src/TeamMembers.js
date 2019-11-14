import React from 'react';

const TeamMembers = props => {
    // {props.teamInfo.map((teams, index) => {
        return (
            <div className="teams" key={props.key}>
                <h2>Name: {props.name}</h2>
                <h3>Email: {props.email}</h3>
                <h3>Role: {props.role}</h3>
            </div>
        );
    }


export default TeamMembers;