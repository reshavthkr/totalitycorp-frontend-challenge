import React from 'react'
import './listItem.css'

export default function ListItem({ id, imgsrc, itemname, volume, floor, verified, change }) {
    return (
        <>
            <div className='flex ai-center jc-space_between li-card mt-20x c-pointer p-relative' >
                <div className='flex ai-center jc_center'>
                    <h1 className='faded mr-20x fw-bold '>{id}</h1>
                    <img className='mr-20x lic_img' src={imgsrc} alt='nfts' />
                    <p className='fw-bold fs-16 lic_name mr-10x'>{itemname}</p>
                    {verified ?
                        <img className='w-16x' src={require('../../images/icons/icons8-verified-badge-30.png')} alt="nft" /> : <></>
                    }
                </div>
                <div className='flex ai-center'>
                    <p className='mr-50x fw-bold fs-16 mob_floor'>{floor}</p>
                    <p className='fw-bold fs-16 flex flex-column'>{volume}
                        {change ? <span className={change > 0 ? 'green' : 'red'}>{change}%</span> : <></>}
                    </p>
                </div>
            </div>
        </>
    )
}
