import { useTranslation } from 'react-i18next';
import hotel from './images/hotel.svg';
import establishment from './images/establishment.svg';
import photo from './images/photo.svg';
import restaurant from './images/restaurant.svg';
import wedding from './images/wedding.svg';
import weddingCake from './images/wedding-cake.svg';
import jacuzzi from './images/jacuzzi.svg';
import champagne from './images/champagne.svg';
import breakfast from './images/breakfast.svg';
import car from './images/car.svg';

import './Plan.styles.scss';

function Plan () {
    const { t } = useTranslation();

    const planItems = [
        {
            icon: establishment,
            time: '13:10',
            text: t('Arrival'),
            place: <p className='Plan-Item_Place'>Rīgas pilsētas Pārdaugavas Dzimtsarakstu nodaļa</p>,
            button:  <a className="Plan-Item_Button" href="https://maps.google.com/maps?hl=lv&amp;gl=lv&amp;um=1&amp;ie=UTF-8&amp;fb=1&amp;sa=X&amp;ftid=0x46eecffe53db6f23:0x38bb12d2058a8027" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https%3A%2F%2Fmaps.google.com%2Fmaps%3Fhl%3Dlv%26gl%3Dlv%26um%3D1%26ie%3DUTF-8%26fb%3D1%26sa%3DX%26ftid%3D0x46eecffe53db6f23%3A0x38bb12d2058a8027&amp;ved=0CBEQ4kBqFwoTCNCvmsm24IkDFQAAAAAdAAAAABAG&amp;opi=89978449"  target='_blank'><span>{t('Map')}</span></a>
        },
        {
            icon: wedding,
            time: '13:30',
            text: t('Ceremony')
        },
        {
            icon: champagne,
            time: '13:45',
            text: t('Buffet')
        }
    ];

    return (
        <div className="Plan">
            <p className='Plan-Title'>{t('Plan')}</p>
            <div className='Plan-List'>
                { planItems.map((item, index) => (
                    <div className='Plan-Item scroll-animation' key={`Item-${index}`}>
                        <p className='Plan-Item_Time'>{ item.time }</p>
                        { item.divider ? null : <img className='Plan-Item_Icon' src={ item.icon } alt={`Item-${index}`} />}
                        <p className='Plan-Item_Text'>{ item.text }</p>
                        { item.place ?? null }
                        { item.button ?? null }
                        { item.additional ?? null }
                    </div>
                )) }
            </div>
        </div>
    );
}

export default Plan;
