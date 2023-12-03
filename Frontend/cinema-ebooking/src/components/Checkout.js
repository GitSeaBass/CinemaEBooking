import './Checkout.css'
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Checkout(props) {
    const location = useLocation()

    const navigate = useNavigate()

    function clickCheckout() {
        const data = {
            'total': total,
            'num_adult_tickets': adult,
            'num_child_tickets': child,
            'num_senior_tickets': senior,
            'promo': promo,
            'movie_title': location.state.movie.title,
            'show_date': props.date,
            'show_time': props.time,
            'customer_email': props.user
            /*'seat_selection': ,*/
        }
        console.log(data)

        //navigate('/orderconfirm')
    }

    function cancel() {
        navigate('/')
    }

    const [child, setChild] = useState(props.child)
    const [adult, setAdult] = useState(props.adult)
    const [senior, setSenior] = useState(props.senior)

    const [total, setTotal] = useState(5 * parseInt(child) + 10 * parseInt(adult) + 7.5 * parseInt(senior))

    const [promo, setPromo] = useState('')
    const addPromo = (e) => {
        setPromo(e.target.value)
    }

    function removeChild() {
        let num = parseInt(child) - 1
        setChild(num)
        console.log(location.state)
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
    }, [child, adult, senior])

    return (
        <>
            <div className='Checkout-container-wrap'>
                <div className='Checkout-checkout-container'>
                    <div className='Checkout-info'>
                        <h1>Checkout</h1>
                        <h3>Movie: {location.state.movie.title}</h3>
                        <h3>Date: {props.date}</h3>
                        <h3>Time: {props.time}</h3>

                        <div className='Checkout-ticket-info'>
                            <h3>Child Tickets ($5.00): {child}</h3>
                            {child > 0 ? <button className='Checkout-remove-ticket' onClick={removeChild}>Remove Ticket</button> : <></>}
                        </div>

                        <div className='Checkout-ticket-info'>
                            <h3>Adult Tickets ($10.00): {adult}</h3>
                            {adult > 0 ? <button className='Checkout-remove-ticket' onClick={removeAdult}>Remove Ticket</button> : <></>}
                        </div>

                        <div className='Checkout-ticket-info'>
                            <h3>Senior Tickets ($7.50): {senior}</h3>
                            {senior > 0 ? <button className='Checkout-remove-ticket' onClick={removeSenior}>Remove Ticket</button> : <></>}
                        </div>
                        <h3>Total: ${total}</h3>
                    </div>
                    <form className='pCheckout-ayment-info'>
                        <label>Credit Card Number</label><br />
                        <input type='text' required></input><br />
                        <label>Credit Card CRV</label><br />
                        <input type='text' required></input><br />
                        <label>Address</label><br />
                        <input type='text' required></input><br />
                        <label>Promo Code</label><br />
                        <input type='text' onChange={addPromo}></input><br />
                        <input type='submit' className='Checkout-checkout-button' onClick={clickCheckout} value={'Checkout'}></input>
                    </form>
                    <button className='Checkout-cancel-button' onClick={cancel}>Cancel</button>
                </div>
            </div>
        </>
    )
}

export default Checkout;