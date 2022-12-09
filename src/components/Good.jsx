import React from 'react'
import "./Good.css"
const Good = ({ id, name, description, price, rating, image, color }) => {
    return (
        <div className='card'>
            <img src={image} alt="Card" />
            <div className="card_content">
                <h4>{name}</h4>
                <p>{description} </p>
                <p><strong>Цвет</strong> {color}</p>
                <p><strong>Цена</strong> {price}</p>
                <p><strong>Рейтинг</strong> {rating}</p>
            </div>
        </div>
    )
}

export default React.memo(Good)