import './ViewProfile.css'

function ViewProfile() {
    return (
        <div className='form-container'>
            <h3>Edit Profile</h3>
            <form className='update-profile-form'>
                <label>Street: </label>
                <br></br>
                <input></input>
                <br></br>
                <label>City: </label>
                <br></br>
                <input></input>
                <br></br>
                <label>State: </label>
                <br></br>
                <input></input>
                <br></br>
                <label>Zipcode: </label>
                <br></br>
                <input></input>
                <br></br>

                <label>Credit Card Number: </label>
                <br></br>
                <input></input>
                <br></br>
                <label>Credit Card CSV: </label>
                <br></br>
                <input></input>
                <br></br>
                <input type='submit' id='update-submit'></input>
            </form>
        </div>
    )
}

export default ViewProfile;