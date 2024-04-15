import React from 'react';
import Card from './Card';
const MyCard = () => {
    return (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <Card
                title='Пономаренко Никита '
                image='/images/mePhoto.jpg'
                about='Студент ТИУ хочет стать сеньором  Обожает программировать и хочет становиться действительно крутым  развивает алгоритимическое мышление(решает задачки на лит коде) Никита так же позаболитлся о вашем досуге здесь так что нажмите на него что бы он покрутился(и не только он)'
            />
        </div>
    );
}
export default MyCard;