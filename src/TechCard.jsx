import React from "react"
import Card from "./Card"

const TechCard=({ title, image, about })=>{
    return (
        <div>
            <Card
                title={title}
                image={image}
                about={about}
            />
        </div>
    )
}
export default TechCard;