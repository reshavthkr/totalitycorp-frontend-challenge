import React from 'react'
import Card2 from '../cards/Card2'



export default function Slider2({ scroll_cont, data, slides }) {


    const moveright = () => {
        if (scroll_cont.current.scrollLeft === (936.5) || scroll_cont.current.scrollLeft === (1408) || scroll_cont.current.scrollLeft === (2350.5)) {
            scroll_cont.current.scrollLeft = 0;
        }
        else {
            scroll_cont.current.scrollLeft += 471.333;
        }
        console.log(scroll_cont.current.scrollLeft)
    }
    const moveleft = () => {
        if (scroll_cont.current.scrollLeft === (0)) {
            scroll_cont.current.scrollLeft = 471.333 * slides;
        }
        else {
            scroll_cont.current.scrollLeft -= 471.333;
        }

    }

    return (
        <div style={{ width: `calc(471.333px * ${slides})` }} className='slider2 flex jc-space_between ai-center '>
            <div onClick={moveleft} className='p-absolute arrow_bt c-pointer flex jc-center ai-center'>
                <img src={require('../../images/icons/left.png')} alt='left_arrow' />
            </div>
            {
                data.map((elem, idx) => {
                    return (
                        <Card2 key={elem.id} itemname={elem.name} primaryimg={elem.primaryimg} secondaryimg={elem.secondaryimg} verified={elem.verified} />
                    )
                })
            }
            <div onClick={moveright} className='p-absolute arrow_bt abr c-pointer flex jc-center ai-center'>
                <img src={require('../../images/icons/right.png')} alt='left_arrow' />
            </div>
        </div>
    )
}
