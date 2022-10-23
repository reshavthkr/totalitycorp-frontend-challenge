import React from 'react'
import './card1.css'

export default function Card1({ name, floor, imgsrc, verified }) {
    return (
        <>
            <div className='c-pointer p-relative card1'>
                <img className='c-pointer w-100 p-absolute' src={imgsrc} alt='nft' />
                <div className='p-absolute flex flex-column  w-100 h-100'>
                    <h2 className='flex ai-center fw-bold' >{name}
                        {verified ? <img src={require('../../images/icons/icons8-verified-badge-30.png')} alt="nft" /> : <></>}
                    </h2>
                    <p>Floor: {floor}</p>
                </div>
            </div>

        </>
    )
}
