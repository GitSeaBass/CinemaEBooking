import './ManagePromotions.css'
import { useState, useEffect } from 'react'

function ManagePromotions(props) {

    const [promotion, setPromotion] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/system/getAllPromotions`)
            .then(res => res.json())
            .then(data => {
                setPromotion(data)
                console.log(promotion)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const [code, setCode] = useState('code');
    const [percentage, setPercentage] = useState('percentage');

    const data = {
        'code': code,
        'percentage': percentage
    }

    const submitPromotion = async () => {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        const result = await fetch("http://localhost:8080/system/getAllPromotions", requestOptions)

        const resultinJSON = await result.json();
        console.log(resultinJSON)
    }

    return (
        <>
            <div className='ManagePromotions-promos-container'>
                <div>
                    {promotion.map((item) => (
                        <div className='ManagePromotions-promo-info' key={item.id}>
                            <div>{item.code}</div>
                            <div>{item.percent}%</div>
                        </div>
                    ))}


                </div>
                <div className='ManagePromotions-vl'></div>
                <div>
                    <form className='ManagePromotions-promo-form'>
                        <label>Code: </label>
                        <input type='text' required onChange={(event) => {
                            setCode(event.target.value);
                        }} />
                        <label>Percentage: </label>
                        <input type='text' required onChange={(event) => {
                            setPercentage(event.target.value);
                        }} />
                        <button className='ManagePromotions-add-promo-button' onClick={submitPromotion}>Add</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ManagePromotions;