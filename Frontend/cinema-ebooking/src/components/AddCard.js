import './AddCard.css'
import { useState } from 'react';

function AddCard(props) {


    return (
        <>
            {
                <div className='AddCard-indent'>
                    <div className='AddCard-add-div'>
                        <label>Card Number</label>
                        <input type='text' onChange=''></input>
                    </div>
                    <div className='AddCard-add-div'>
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