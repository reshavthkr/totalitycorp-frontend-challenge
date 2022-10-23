import React from 'react'
import Card1 from '../cards/Card1'
import './slider.css'
import cardData from '../../helpers/carousel1.json'

export default function Slider({ scroll_cont }) {

    const moveright = () => {
        if (scroll_cont.current.scrollLeft === (2876)) {
            scroll_cont.current.scrollLeft = 0;
        }
        else {
            scroll_cont.current.scrollLeft += 360 * 4;
        }
    }
    const moveleft = () => {
        if (scroll_cont.current.scrollLeft === (0)) {
            scroll_cont.current.scrollLeft = 360 * 12;
        }
        else {
            scroll_cont.current.scrollLeft -= 360 * 4;
        }

    }
    return (
        <div className='slider flex jc-space_between ai-center '>
            <div onClick={moveleft} className='p-absolute arrow_bt c-pointer flex jc-center ai-center'>
                <img src={require('../../images/icons/left.png')} alt='left_arrow' />
            </div>
            {cardData.map((elem, idx) => {
                return (
                    <Card1 key={elem.id + elem.name} name={elem.name} floor={elem.floor} imgsrc={elem.imgsrc} verified={elem.verified} />
                )
            })}
            <div onClick={moveright} className='p-absolute arrow_bt abr c-pointer flex jc-center ai-center'>
                <img src={require('../../images/icons/right.png')} alt='left_arrow' />
            </div>
        </div>
    )

}
