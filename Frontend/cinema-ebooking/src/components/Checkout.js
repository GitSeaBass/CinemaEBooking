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
            <h3>Total: ${props.ticketPrice}</h3>
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