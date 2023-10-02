import './ManagePromotions.css'

function ManagePromotions(props) {
    return (
        <div className='movies-container'>
            {props.promoarray.map((item) => (
                <div>{item.code}</div>
        ))}
        </div>
    )
}

export default ManagePromotions;