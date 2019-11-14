import React, {useState} from "react";


const Form = props => {

    const [teamData, setTeamData] = useState({
        name: '',
        email: '',
        role: ''
    });

    const newChanges = e => {
        setTeamData({...teamData, [e.target.name]: e.target.value});
        console.log(e.target.value);
      } 
    
    const submitForm = e => {
        e.preventDefault();
        props.addTeamData(teamData);
        setTeamData({
            name: '',
            email: '',
            role: ''
        });

    return (
        <form onSubmit = {submitForm}>
            {/* <label htmlFor="title">Title</label> */}
            <input 
                name="name"
                type="text"
                onChange={newChanges}
                value={teamData.body}
            />

        </form>
    )
    }
}
export default Form;