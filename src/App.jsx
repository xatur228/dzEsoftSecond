import React, { useState } from 'react';
import Card from './Card';
import './App.css'; 
import MyCard from './MyCard';
import SkillCard from './SkillCard';
import TechCard from './TechCard';

const App = () => {
    const [skillCards, setSkillCards] = useState([
        { index:0,title: "ЛЮБЛЮ УЧИТЬСЯ", image: '/images/monkey.jpg', about: 'Потому что это помогает мне развиваться, открывать новые горизонты и улучшать свои навыки'},
        { index:1,title: "ВНИМАТЕЛЕНЬНЫЙ", image: '/images/image2.jpg', about: 'Я, внимателен к деталям. Это помогает мне видеть целостную картину и достигать высоких результатов в моей деятельности' },
        { index:2,title: "ТРУДОЛЮБИВИВЫЙ", image: '/images/image3.jpg', about: 'Я, трудолюбив и упорен. Я всегда добиваюсь поставленных целей благодаря своей настойчивости, усердию и стремлению к самосовершенствованию' },
        { index:3,title: "КОММУНИКАБЕЛЬНЫЙ", image: '/images/image4.jpg', about: 'Я легко нахожу общий язык с людьми и вливаюсь в коллектив. Поэтому я люблю программировать и решать задачи в креативной среде' }
    ]);

    const [techCards, setTechCards] = useState([
        { title: "Я ХОЧУ ПЛАВАТЬ", image: '/images/image5.jpg', about: 'Спортивное питание', color: 'lightpink' },
        { title: "Tech2", image: '/images/image6.jpg', about: 'some2' },
        { title: "Tech3", image: '/images/image7.jpg', about: 'some3' },
        { title: "Tech4", image: '/images/image8.jpg', about: 'some4' }
    ]);

    return (
        <div className="app-container">
            <MyCard className="my-card" />
            <div className="skill-cards-container">
                {skillCards.map((skill, index) => (
                    <SkillCard key={index} title={skill.title} image={skill.image} about={skill.about} className="skill-card" />
                ))}
            </div>
            <img src='/images/monkey.jpg' alt="portlandLogo" />
            <div className="tech-cards-container">
                {techCards.map((techs, index2) => (
                    <TechCard key={index2} title={techs.title} image={techs.image} about={techs.about} className="tech-card" />
                ))}
            </div>
        </div>
    );
}



export default App;