import './ManagePromotions.css'

function ManagePromotions(props) {
    return (
        <div className='movies-container'>
            <h4 className='promotitle'>Current Promotions: </h4>
            {props.promoarray.map((item) => (
                <div className='promoinfo'>
                    <div>{item.code}</div>
                    <div>{item.percent}%</div>
                </div>
            ))}
            <form className='promoform'>
                <label>Code: </label>
                <input type='text' required></input>
                <label>Percentage: </label>
                <input type='text' required></input>
                <input className='addpromobutton' value='Add Promotion' type='submit'></input>
            </form>
        </div>
    )
}

export default ManagePromotions;