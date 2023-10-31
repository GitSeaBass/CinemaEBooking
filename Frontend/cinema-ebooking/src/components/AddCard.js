import './AddCard.css'
import { useState } from 'react';

function AddCard(props) {


    return (
        <>
            {
                <div className='indent'>
                    <div className=''>
                        <label>Card Number</label>
                        <input type='text' onChange=''></input>
                    </div>
                    <div className=''>
                        <label>Card Expiration Date</label>
                        <input type='text' onChange=''></input>
                    </div>
                </div>
            }
        </>
    )
}

export default AddCard;