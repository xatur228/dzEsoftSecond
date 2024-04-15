import React, { useState } from 'react';
import Card from './components/Card';
import './App.css'; 
import MyCard from './components/MyCard';
import SkillCard from './components/SkillCard';
import TechCard from './components/TechCard';

const App = () => {
    const [skillCards, setSkillCards] = useState([
        { index:0,title: "ЛЮБЛЮ УЧИТЬСЯ", image: '/images/monkey.jpg', about: 'Потому что это помогает мне развиваться, открывать новые горизонты и улучшать свои навыки'},
        { index:1,title: "ВНИМАТЕЛЕНЬНЫЙ", image: '/images/image2.jpg', about: 'Я, внимателен к деталям. Это помогает мне видеть целостную картину и достигать высоких результатов в моей деятельности' },
        { index:2,title: "ТРУДОЛЮБИВИВЫЙ", image: '/images/image3.jpg', about: 'Я, трудолюбив и упорен. Я всегда добиваюсь поставленных целей благодаря своей настойчивости, усердию и стремлению к самосовершенствованию' },
        { index:3,title: "КОММУНИКАБЕЛЬНЫЙ", image: '/images/image4.jpg', about: 'Я легко нахожу общий язык с людьми и вливаюсь в коллектив. Поэтому я люблю программировать и решать задачи в креативной среде' }
    ]);

    const [techCards, setTechCards] = useState([
        { index2:0,title: "Я хочу создать проект", image: '/images/image5.jpg', about: 'Я хочу обретси знания фуллстак джуна на опыте разработки проекта', color: 'lightpink' },
        { index2:1,title: "Я хочу научиться работать с сервер", image: '/images/image6.jpg', about: 'Мне очень интересно работать с node.js и пробовать что то новое' },
        { index2:2,title: "Я хочу научиться работать в команде над проектом", image: '/images/image7.jpg', about: 'Все программисты разрабатывая проект разрабатывают его в командах и я хочу узнать и научиться тому как это происходит' },
        { index2:3,title: "Я хочу научиться работать с БД", image: '/images/image8.jpg', about: 'SQL очень важен для разработчика а так как я хочу стать крутым мне это очень очень нужно' },
        { index2:4,title: "Я хочу научиться работать с TypeScript", image: '/images/image8.jpg', about: 'TypeScript  для frontend-разработки, то есть создания той части приложений, с которой непосредственно контактирует пользователь' },
        { index2:5,title: "Я хочу научиться смотреть на решение проблем как программист ", image: '/images/image8.jpg', about: 'траблшутинг это основная задача программиста которой я хочу обучиться' },
        { index2:6,title: "Я хочу научиться оптимизации производительности веб-приложений", image: '/images/image8.jpg', about: ' Хочу изучить методы оптимизации производительности веб-приложений, такие как lazy loading, code splitting, оптимизация изображений и другие техники' },
        { index2:7,title: "Я хочу обучиться работе с API и AJAX", image: '/images/image8.jpg', about: 'Хочу углубить знания в работе с API и AJAX запросами для взаимодействия с сервером и получения данных для веб-приложений' },
        { index2:8,title: "GraphQL", image: '/images/image8.jpg', about: 'GraphQL поможет мне понять принципы работы с API и эффективно обмениваться данными между фронтендом и бэкендом' },
        { index2:9,title: "Техники оптимизации загрузки и производительности", image: '/images/image8.jpg', about: 'Знание методов оптимизации загрузки ресурсов и улучшения производительности веб-приложений поможет создавать быстрые и отзывчивые сайты' }
    ]);

    return (
        <div className="app-container">
            <MyCard className="my-card"/>
            <div className="skill-cards-container">
                {skillCards.map((skill, index) => (
                    <SkillCard key={index} title={skill.title} image={skill.image} about={skill.about} className="skill-card" />
                ))}
            </div>
           
            <div className="tech-cards-container">
                {techCards.map((techs, index2) => (
                    <TechCard key={index2} title={techs.title} image={techs.image} about={techs.about} className="tech-card" />
                ))}
            </div>
        </div>
    );
}
export default App;
