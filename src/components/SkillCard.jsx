import React from "react";
import Card from "./Card";
const SkillCard = ({ title, image, about }) => {
    return (
        <div>
            <Card
                title={title}
                image={image}
                about={about}
            />
        </div>
    );
}
export default SkillCard;