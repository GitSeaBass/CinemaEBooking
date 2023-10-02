import "./Checkout.css"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Checkout(props) {
    const navigate = useNavigate();

    function clickCheckout() {
        navigate('/orderconfirm')
    }

    function cancel() {
        navigate('/')
    }

    const [child, setChild] = useState(props.child)
    const [adult, setAdult] = useState(props.adult)
    const [senior, setSenior] = useState(props.senior)

    const [total, setTotal] = useState(5 * parseInt(child) + 10 * parseInt(adult) + 7.5 * parseInt(senior))

    function removeChild() {
        let num = parseInt(child) - 1
        setChild(num)
    }

    function removeAdult() {
        let num = parseInt(adult) - 1
        setAdult(num)
    }

    function removeSenior() {
        let num = parseInt(senior) - 1
        setSenior(num)
    }

    useEffect(() => {
        setTotal(5 * parseInt(child) + 10 * parseInt(adult) + 7.5 * parseInt(senior))
    })

    return (
        <div className='form'>
            <h1>Checkout</h1>
            <h3>Movie: {props.movie}</h3>
            <h3>Date: {props.date}</h3>
            <h3>Time: {props.time}</h3>
            <h3>Child Tickets: {child}</h3>
            {child > 0 ? <button onClick={removeChild}>Remove Ticket</button> : <></>}
            <h3>Adult: {adult}</h3>
            {adult > 0 ? <button onClick={removeAdult}>Remove Ticket</button> : <></>}
            <h3>Senior: {senior}</h3>
            {senior > 0 ? <button onClick={removeSenior}>Remove Ticket</button> : <></>}
            <h3>Total: ${total}</h3>
            <form>
                <label>Credit Card Number</label><br />
                <input type='text' required></input><br />
                <label>Credit Card CRV</label><br />
                <input type='text' required></input><br />
                <label>Address</label><br />
                <input type='text' required></input><br />
                <input className='checkout' type='submit' onClick={clickCheckout} value={'Checkout'}></input>
            </form>
            <button className='cancel' onClick={cancel}>Cancel</button>
        </div>
    )
}

export default Checkout;