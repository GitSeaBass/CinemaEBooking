import { useNavigate } from "react-router-dom";

function Checkout() {
    const navigate = useNavigate();
    
    function clickCheckout() {
        navigate('/orderconfirm')
    }

    return (
        <div>
            <h3>Checkout</h3>
            <button onClick={clickCheckout}>CHECKOUT</button>
        </div>
    )
}

export default Checkout;