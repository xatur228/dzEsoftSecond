import React, { useState } from "react";
import './Card.css'; // Импорт файла стилей для анимации

const Card = ({ title, image, about }) => {
    const [isRotated, setIsRotated] = useState(false);

    const handleImageClick = () => {
        setIsRotated(!isRotated);
    };

    return (
        <div className="card-container">
            <div className={`image-container ${isRotated ? 'rotate' : ''}`} onClick={handleImageClick}>
                <img src={image} alt="" className="card-image" />
            </div>
            <h2>{title}</h2>
            <p>{about}</p>
        </div>
    );
}

export default Card;