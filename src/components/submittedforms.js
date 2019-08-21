import React from 'react';

const SubmittedForms = props => {
    console.log(props)
    return(
        <div className="submitted-forms">
            {props.Member.map(member => {
                return (
                    <div>
                        <h1>Name: {member.name}</h1>
                        <h3>Email: {member.email}</h3>
                        <p>Role: {member.role}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default SubmittedForms;