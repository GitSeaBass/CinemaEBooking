import { useNavigate } from "react-router-dom";

function Checkout(props) {
    const navigate = useNavigate();
    
    function clickCheckout() {
        navigate('/orderconfirm')
    }

    function cancel() {
        navigate('/')
    }

    return (
        <div>
            <h1>Checkout</h1>
            <h3>Movie: {props.movie}</h3>
            <h3>Date: {props.date}</h3>
            <h3>Time: {props.time}</h3>
            <h3>Child Tickets: {props.child}</h3>
            <h3>Adult: {props.adult}</h3>
            <h3>Senior: {props.senior}</h3>
            <h3>Total: ${5 * parseInt(props.child) + 10 * parseInt(props.adult) + 7.5 * parseInt(props.senior)}</h3>
            <form>
                <label>Credit Card Number</label><br/>
                <input type='text' required></input><br/>
                <label>Credit Card CRV</label><br/>
                <input type='text' required></input><br/>
                <label>Address</label><br/>
                <input type='text' required></input><br/>
                <input type='submit' onClick={clickCheckout} value={'Checkout'}></input>
            </form>
            <button onClick={cancel}>Cancel</button>
        </div>
    )
}

export default Checkout;