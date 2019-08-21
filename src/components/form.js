import React, { useState } from 'react';


const Form = props => {
    const [data, setData] = useState({ name: "", email: "", role: ""})
    const ChangeData = event => {
        setData({...data, [event.target.name]: event.target.value})
        console.log(event.target.value)
    }
    const DataSubmit = event => {
        event.preventDefault();
        const newData = {
            ...data
        };
        props.SetNewMember(newData)
        setData({ name: "", email: "", role: ""})
    }
    return(
        <div className="form-wrapper">
            <form onSubmit={DataSubmit}>
            <div className="forms">
            <label htmlFor="name">Your Name: </label>
            <br></br>
            <input 
                type='text' 
                name="name" 
                placeholder="Name" 
                value={data.name}
                onChange={ChangeData}
            />
            </div>

            <br></br>
            <div className="forms">
            <label htmlFor="email">Your Email: </label>
            <br></br>
            <input 
                type='text' 
                name="email" 
                placeholder="Email" 
                value={data.email}
                onChange={ChangeData}
            />
            </div>

            <br></br>
            <div className="forms">
            <label htmlFor="role">Your Role: </label>
            <br></br>
            <input 
                type='text' 
                name="role" 
                placeholder="Role" 
                value={data.role}
                onChange={ChangeData}
            />
            </div>
            <button >Submit Form</button>
            </form>

        </div>
    )
}

export default Form;