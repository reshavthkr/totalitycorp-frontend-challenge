import React, { useState, useEffect } from "react";
import logo from "../../../src/images/opensea.svg";
import allnft from '../../images/explore_icons/allnfts-light.svg'
import solananft from '../../images/explore_icons/solana-light.svg'
import art from '../../images/explore_icons/art-light.svg'
import domainname from '../../images/explore_icons/domain-names-light.svg'
import music from '../../images/explore_icons/music-light.svg'
import photography from '../../images/explore_icons/photography-category-light.svg'
import sports from '../../images/explore_icons/sports-light.svg'
import tradingc from '../../images/explore_icons/trading-cards-light.svg'
import utility from '../../images/explore_icons/utility-light.svg'
import virtualw from '../../images/explore_icons/virtual-worlds-light.svg'
import twitter from '../../images/social_icons/twitter.svg'
import instagram from '../../images/social_icons/instagram.svg'
import discord from '../../images/social_icons/discord.svg'
import reddit from '../../images/social_icons/reddit.svg'
import youtube from '../../images/social_icons/youtube.svg'
import './navbar.css'


const NavItemHover = ({ imgsrc, text, firstchild, lastchild, imgClass }) => {
    return (
        <>
            <div className={`item flex ai-center jc-flex-start ${firstchild} ${lastchild}`}>
                {imgsrc ? <img className={`ni_img ${imgClass}`} src={imgsrc} alt="" /> : <></>}
                <p>{text}</p>
            </div>

        </>
    )
}
const MobNavItem = ({ imgsrc, text, firstchild, lastchild, imgClass }) => {
    return (
        <>
            <div className={` flex ai-center jc-flex-start ${firstchild} ${lastchild}`}>
                {imgsrc ? <img className={`ni_img ${imgClass}`} src={imgsrc} alt="" /> : <></>}
                <p>{text}</p>
            </div>

        </>
    )
}

export default function Navbar() {
    const [navbar, setNavbar] = useState(false)
    const [mobnavopen, setMobNavopen] = useState(false)
    const [itemActivated, setItemActivated] = useState(false)
    // const [itemData, setItemData] = useState({

    // })

    const [hoverfnc, sethoverfnc] = useState({
        explore: false,
        stats: false,
        resources: false,
        profile: false
    })
    const changeBackground = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 66) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    useEffect(() => {
        changeBackground()

        // adding the event when scroll change Logo
        window.addEventListener("scroll", changeBackground)
    })

    return (
        <>
            <div className={navbar ? 'bgwhite container flex jc-space_between ai-center vw-100 navbar_main ' : `container flex jc-space_between ai-center vw-100 navbar_main`}>
                <div className="flex jc-flex-start ai-center w-20 c-pointer">
                    <img className="logo" src={logo} alt="logo" />
                    <p className="brandname">OpenSea</p>
                </div>

                <div className="flex jc-center ai-center w-40 desk">
                    <div className={navbar ? ' flex jc-flex-start ai-center w-100 input_containter ipb' : 'flex jc-flex-start ai-center w-100 input_containter'}>
                        <img className="" src={require("../../images/icons/search.png")} alt="" />
                        <input className={'w-80'} placeholder="Search items, collections, and accounts" />
                    </div>
                </div>
                <div className="flex jc-space_between ai-center w-40 c-pointer h-100 ">
                    <div
                        onMouseOver={() => sethoverfnc(prev => ({ ...prev, explore: true }))}
                        onMouseOut={() => sethoverfnc(prev => ({ ...prev, explore: false }))}
                        className="fw-bold fs-16 c-pointer p-relative h-100 flex jc-center ai-center desk">
                        Explore
                        {hoverfnc.explore ?
                            <>
                                <div
                                    onMouseOver={() => sethoverfnc(prev => ({ ...prev, explore: true }))}
                                    onMouseOut={() => sethoverfnc(prev => ({ ...prev, explore: false }))}
                                    className="p-absolute navItem-container d-flex fd-colum ">

                                    <NavItemHover imgsrc={allnft} text={"All NFTs"} firstchild={'firstchild'} />
                                    <NavItemHover imgsrc={solananft} text={"Solana NFTs"} firstchild={''} />
                                    <NavItemHover imgsrc={art} text={"Art"} firstchild={''} />
                                    <NavItemHover imgsrc={art} text={"Collectibles"} firstchild={''} />
                                    <NavItemHover imgsrc={domainname} text={"Domain Names"} firstchild={''} />
                                    <NavItemHover imgsrc={music} text={"Music"} firstchild={''} />
                                    <NavItemHover imgsrc={photography} text={"Photography"} firstchild={''} />
                                    <NavItemHover imgsrc={sports} text={"Sports"} firstchild={''} />
                                    <NavItemHover imgsrc={tradingc} text={"Trading Cards"} firstchild={''} />
                                    <NavItemHover imgsrc={utility} text={"Utility"} firstchild={''} />
                                    <NavItemHover imgsrc={virtualw} text={"Virtual World"} lastchild={'lastchild'} />
                                </div>
                            </> :
                            <></>
                        }
                    </div>
                    <div

                        onMouseOver={() => sethoverfnc(prev => ({ ...prev, stats: true }))}
                        onMouseOut={() => sethoverfnc(prev => ({ ...prev, stats: false }))}
                        className="fw-bold fs-16 c-pointer p-relative desk">
                        Stats
                        {
                            hoverfnc.stats ?
                                <div
                                    className="p-absolute navItem-container stat_nic d-flex fd-colum "
                                    onMouseOver={() => sethoverfnc(prev => ({ ...prev, stats: true }))}
                                    onMouseOut={() => sethoverfnc(prev => ({ ...prev, stats: false }))}
                                >
                                    <NavItemHover text={"Rankings"} firstchild={'firstchild'} />
                                    <NavItemHover text={"Activity"} lastchild={'lastchild'} />
                                </div> :
                                <></>
                        }
                    </div>
                    <div
                        onMouseOver={() => sethoverfnc(prev => ({ ...prev, resources: true }))}
                        onMouseOut={() => sethoverfnc(prev => ({ ...prev, resources: false }))}
                        className="fw-bold fs-16 c-pointer p-relative desk">
                        Resources
                        {
                            hoverfnc.resources ?
                                <div
                                    className="p-absolute navItem-container stat_nic d-flex fd-colum"
                                    onMouseOver={() => sethoverfnc(prev => ({ ...prev, resources: true }))}
                                    onMouseOut={() => sethoverfnc(prev => ({ ...prev, resources: false }))}
                                >
                                    <NavItemHover text={"Learn"} firstchild={'firstchild'} />
                                    <NavItemHover text={"Help Canter"} />
                                    <NavItemHover text={"Platform Status"} />
                                    <NavItemHover text={"Partners"} />
                                    <NavItemHover text={"Taxes"} />
                                    <NavItemHover text={"Blogs"} />
                                    <NavItemHover text={"Docs"} />
                                    <NavItemHover text={"Newsletter"} />
                                    <div className="item flex jc-space_between ai-center w-80 si_cont">
                                        <img className="social_ico" src={twitter} alt="logo" />
                                        <img className="social_ico" src={instagram} alt="logo" />
                                        <img className="social_ico" src={discord} alt="logog" />
                                        <img className="social_ico" src={reddit} alt="lgo" />
                                        <img className="social_ico" src={youtube} alt="logog" />
                                        <img className="social_ico" src={require('../../images/social_icons/tik-tok.png')} alt="logo" />
                                    </div>
                                </div>
                                : <></>
                        }
                    </div>
                    <div className="fw-bold fs-16 c-pointer desk">
                        Create
                    </div>
                    <div
                        onMouseOver={() => sethoverfnc(prev => ({ ...prev, profile: true }))}
                        onMouseOut={() => sethoverfnc(prev => ({ ...prev, profile: false }))}
                        className="fw-bold fs-16 c-pointer p-relative desk">
                        <img className="nav_icon" src={require('../../images/icons/user.png')} alt="" />
                        {
                            hoverfnc.profile ?
                                <div
                                    className="p-absolute navItem-container prof_nic d-flex fd-colum"
                                    onMouseOver={() => sethoverfnc(prev => ({ ...prev, profile: true }))}
                                    onMouseOut={() => sethoverfnc(prev => ({ ...prev, profile: false }))}
                                >
                                    <NavItemHover imgsrc={require('../../images/icons/profile.png')} text={"Profile"} firstchild={'firstchild'} imgClass={'imgc'} />
                                    <NavItemHover imgsrc={require('../../images/icons/heart.png')} text={"Favorites"} imgClass={'imgc'} />
                                    <NavItemHover imgsrc={require('../../images/icons/eye.png')} text={"Watchlist"} imgClass={'imgc'} />
                                    <NavItemHover imgsrc={require('../../images/icons/grid.png')} text={"My Collections"} imgClass={'imgc'} />
                                    <NavItemHover imgsrc={require('../../images/icons/settings.png')} text={"Settings"} imgClass={'imgc'} />
                                    <NavItemHover imgsrc={require('../../images/icons/internet.png')} text={"Languages"} imgClass={'imgc'} />
                                    <NavItemHover imgsrc={require('../../images/icons/dark-mode.png')} text={"Night Mode"} imgClass={'imgc'} />

                                </div>
                                : <></>
                        }
                    </div>

                    <div className="desk">
                        <img className="nav_icon" src={require('../../images/icons/wallet.png')} alt="nft" />
                    </div>
                    <div className="mob">
                        <img className="nav_icon" alt="search" src={require('../../images/icons/search-black.png')} />
                    </div>
                    <div>
                        <img className="nav_icon" src={require('../../images/icons/cart.png')} alt="nft" />
                    </div>
                    {
                        !mobnavopen ?
                            <div onClick={() => setMobNavopen(!mobnavopen)} className="mob">
                                <img className="nav_icon" alt="menu" src={require('../../images/icons/menu.png')} />
                            </div> :
                            <div onClick={() => setMobNavopen(!mobnavopen)} className="mob">
                                <img className="nav_icon" alt="menu" src={require('../../images/icons/close.png')} />
                            </div>
                    }
                    {
                        mobnavopen ?
                            <>
                                <div className="p-absolute navItem_cont">
                                    {
                                        !itemActivated ?
                                            <>

                                                <div onClick={() => setItemActivated(false)} className="flex jc-space_between ai-center nic_item">
                                                    <div className="flex ai-center fs-18 fw-bold">
                                                        <img className="w-20 mr-10x" alt="logo" src={require('../../images/icons/explore.png')} />
                                                        Explore
                                                    </div>
                                                    <img className=" ricon" src={require('../../images/icons/right.png')} alt="nft" />
                                                </div>
                                                <div className="flex jc-space_between ai-center nic_item">
                                                    <div className="flex ai-center fs-18 fw-bold">
                                                        <img className="w-20 mr-10x" alt="logo" src={require('../../images/icons/stats.png')} />
                                                        Stats
                                                    </div>
                                                    <img className=" ricon" src={require('../../images/icons/right.png')} alt="nft" />
                                                </div>
                                                <div className="flex jc-space_between ai-center nic_item">
                                                    <div className="flex ai-center fs-18 fw-bold">
                                                        <img className="w-20 mr-10x" alt="logo" src={require('../../images/icons/resources.png')} />
                                                        Resources
                                                    </div>
                                                    <img className=" ricon" src={require('../../images/icons/right.png')} alt="nft" />
                                                </div>
                                                <div className="flex jc-space_between ai-center nic_item">
                                                    <div className="flex ai-center fs-18 fw-bold">
                                                        <img className="w-20 mr-10x" alt="logo" src={require('../../images/icons/create.png')} />
                                                        Create
                                                    </div>
                                                </div>
                                                <div className="flex jc-space_between ai-center nic_item">
                                                    <div className="flex ai-center fs-18 fw-bold">
                                                        <img className="w-20 mr-10x" alt="logo" src={require('../../images/icons/internet.png')} />
                                                        Languages
                                                    </div>
                                                    <img className=" ricon" src={require('../../images/icons/right.png')} alt="nft" />
                                                </div>
                                                <div className="flex jc-space_between ai-center nic_item">
                                                    <div className="flex ai-center fs-18 fw-bold">
                                                        <img className="w-20 mr-10x" alt="logo" src={require('../../images/icons/dark-mode.png')} />
                                                        Night Mode
                                                    </div>
                                                </div>

                                                <div className="wlt-cnct w-85 mt-20x">
                                                    Connect Wallet
                                                </div>

                                            </>
                                            :
                                            <>
                                                <div>
                                                    <MobNavItem imgsrc={allnft} text={"All NFTs"} firstchild={'firstchild'} />
                                                    <MobNavItem imgsrc={allnft} text={"All NFTs"} firstchild={'firstchild'} />
                                                    <MobNavItem imgsrc={allnft} text={"All NFTs"} firstchild={'firstchild'} />
                                                </div>
                                            </>

                                    }
                                    <div className="si_c_mob w-100 flex jc-center ai-center  mt-20x">
                                        <img className="social_ico mr-20x" src={twitter} alt="logo" />
                                        <img className="social_ico mr-20x" src={instagram} alt="logo" />
                                        <img className="social_ico mr-20x" src={discord} alt="logog" />
                                        <img className="social_ico mr-20x" src={reddit} alt="lgo" />
                                        <img className="social_ico mr-20x" src={youtube} alt="logog" />
                                        <img className="social_ico mr-20x" src={require('../../images/social_icons/tik-tok.png')} alt="logo" />
                                    </div>
                                </div>
                            </>
                            : <></>
                    }


                </div>
            </div>
        </>
    );
}
