import './AddCard.css'
import { useState } from 'react';

function AddCard(props) {


    return (
        <>
            {
                <div className='indent'>
                    <div className='add-div'>
                        <label>Card Number</label>
                        <input type='text' onChange=''></input>
                    </div>
                    <div className='add-div'>
                        <label>Card Expiration Date</label>
                        <input type='text' onChange=''></input>
                    </div>
                    <button type='submit'></button>
                </div>
            }
        </>
    )
}

export default AddCard;