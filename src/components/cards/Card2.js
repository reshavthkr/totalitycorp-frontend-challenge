import React from 'react'
import './card1.css'

export default function Card2({ itemname, primaryimg, secondaryimg, verified, tacenter, mobclass }) {
    return (
        <div className={`card2 flex flex-column c-pointer ${mobclass}`} >
            <img className='h-75 c2_imgm' src={primaryimg} alt="nft" />
            <div className={`flex ai-center h-25 textdiv w-100   ${tacenter}`}>
                {secondaryimg ?
                    <>
                        <div className='sm_img mr-10x'>
                            <img className='w-100 h-100' src={secondaryimg} alt='nft' />
                        </div>
                        <div className={`fw-bold flex ai-center`}>
                            {itemname}
                            {verified ? <img className='w-16x ml-10x' src={require('../../images/icons/icons8-verified-badge-30.png')} alt="nft" /> : <></>}
                        </div>
                    </> :
                    <>
                        <h3 className={`fw-bold flex ai-center w-100 ${tacenter}`}>{itemname}</h3>
                    </>
                }


            </div>

        </div>
    )
}
