import "./App.css";
import { useRef, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";
import trending from './helpers/trending.json'
import top from './helpers/top.json'
import ListItem from "./components/listcard/ListItem";
import Slider2 from "./components/slider/Slider2";
import card2data from './helpers/card2Data.json'
import Card2 from "./components/cards/Card2";
import opensea_white from './images/social_icons/opensea-white.svg'

const TimeFrame = ({ timeframetext, lastchild, firstchild }) => {
  return (
    <>
      <div className={`item ${lastchild} ${firstchild} flex ai-center fw-bold`}> {timeframetext}</div>
    </>
  )
}

function App() {
  const [scNavActive, setscNavActive] = useState(true)
  const [showTimeLine, setShowTimeLine] = useState(false)
  const scroll_cont = useRef();
  const scroll_cont2 = useRef();
  const scroll_cont3 = useRef();
  const scroll_cont4 = useRef();


  const makeNavActive = () => {
    setscNavActive(true)
    setShowTimeLine(false)
  }

  return (
    <>
      <Navbar />
      <div className="hero_section flex ai-center jc-center fd-column">
        <h1 className="fw-bold">Explore, collect, and sell NFTs</h1>
      </div>
      <section className="container p-relative ">
        <div ref={scroll_cont} className="slider_cont ">
          <Slider scroll_cont={scroll_cont} />
        </div>
      </section>
      <section className="container mt-50x">
        <div className="  sc_nav flex jc-space_between ai-center">
          <div className="flex h-100  ai-flex-end">
            <div onClick={makeNavActive} className={`mr-50x c-pointer head fw-bold frfrfg ${scNavActive ? 'active' : ''}`}>Trending</div>
            <div onClick={() => setscNavActive(false)} className={`c-pointer frfrfg   head fw-bold ${!scNavActive ? 'active' : ''}`}>Top</div>
          </div>
          <div className="flex p-relative">
            {
              !scNavActive ?
                <button onClick={() => setShowTimeLine(!showTimeLine)} className="mr-20x c-pointer btn fw-bold flex jc-center ai-center">24h
                  <img src={require('./images/icons/down.png')} alt='down arrow' />
                </button> :
                <button className="mr-20x disable  btn fw-bold flex jc-center ai-center">24h
                  <img src={require('./images/icons/down.png')} alt='down arrow' />
                </button>
            }
            <button className="c-pointer btn fw-bold sc_btn">View All</button>
            {
              showTimeLine ?
                <div className="p-absolute timelineDiv">
                  <TimeFrame timeframetext={'1h'} firstchild={"firstchild"} />
                  <TimeFrame timeframetext={'6h'} />
                  <TimeFrame timeframetext={'24h'} />
                  <TimeFrame timeframetext={'7d'} />
                  <TimeFrame timeframetext={'30d'} />
                  <TimeFrame timeframetext={'All'} lastchild={'lastchild'} />
                </div> :
                <></>
            }
          </div>
        </div>
        <div className="flex jc-space_between w-100 mt-50x ">
          <div className="w-45">
            <div className="flex jc-space_between ai-center w-100">
              <div className="fs-12 faded uppercase fw-bold">Collection</div>
              <div className="flex ai-center">
                <div className="mr-50x fs-12 faded uppercase fw-bold desk">Floor Price</div>
                <div className="fs-12 faded uppercase fw-bold">Volume</div>
              </div>
            </div>
            {
              scNavActive ?
                <>
                  {trending.filter((elem, idx) => idx < 5).map((item, idx) => {
                    return (
                      <ListItem
                        key={item.id} itemname={item.name}
                        floor={item.floor} imgsrc={item.imgsrc}
                        volume={item.volume} verified={item.verified}
                        id={item.id} />
                    )
                  })}
                </> :
                <>
                  {top.filter((elem, idx) => idx < 5).map((item, idx) => {
                    return (
                      <ListItem
                        key={item.id} itemname={item.name}
                        floor={item.floor} imgsrc={item.imgsrc}
                        volume={item.volume} verified={item.verified}
                        change={item.change}
                        id={item.id} />
                    )
                  })
                  }
                </>
            }
          </div>

          <div className="w-45 desk">
            <div className="flex jc-space_between ai-center w-100">
              <div className="fs-14 faded uppercase fw-bold">Collection</div>
              <div className="flex ai-center">
                <div className="mr-50x fs-12 faded uppercase fw-bold">Floor Price</div>
                <div className="fs-12 faded uppercase fw-bold">Volume</div>
              </div>
            </div>
            {
              scNavActive ?
                <>
                  {trending.filter((elem, idx) => idx >= 5).map((item, idx) => {
                    return (
                      <ListItem
                        key={item.id} itemname={item.name}
                        floor={item.floor} imgsrc={item.imgsrc}
                        volume={item.volume} verified={item.verified}
                        id={item.id} />
                    )
                  })}
                </> :
                <>
                  {top.filter((elem, idx) => idx >= 5).map((item, idx) => {
                    return (
                      <ListItem
                        key={item.id} itemname={item.name}
                        floor={item.floor} imgsrc={item.imgsrc}
                        volume={item.volume} verified={item.verified}
                        change={item.change}
                        id={item.id} />
                    )
                  })
                  }
                </>
            }
          </div>
        </div>
      </section>

      <section className="container mt-50x p-relative">
        <h1>New and notable</h1>
        <div className=" ">
          <div ref={scroll_cont2} className="slider_cont2 ">
            <Slider2 scroll_cont={scroll_cont2} data={card2data.newnotable} slides={5} />
          </div>

        </div>
      </section>
      <section className="container mt-50x p-relative">
        <h1>Dreamers spotlight</h1>
        <div className=" ">
          <div ref={scroll_cont3} className="slider_cont3 ">
            <Slider2 scroll_cont={scroll_cont3} data={card2data.Dreamers} slides={6} />
          </div>

        </div>
      </section>
      <section className="container mt-50x p-relative">
        <h1 className="spn">NFT 101</h1>
        <span >Get comfortable with the basics</span>
        <div className=" ">
          <div ref={scroll_cont4} className="slider_cont4 ">
            <Slider2 scroll_cont={scroll_cont4} data={card2data.nft101} slides={8} />
          </div>
        </div>
      </section>
      <section className="container mt-50x">
        <h1>Browse by category</h1>
        <div className="cat_container">
          {card2data.category.map((elem) => {
            return (
              <>
                <Card2 key={elem.id} itemname={elem.name} primaryimg={elem.primaryimg} tacenter={'tacenter'} mobclass={'mobclass'} />
              </>
            )
          })}
        </div>
      </section>
      <footer className="container2 mt-50x flex flex-column">
        <div className="flex jc-space_between w-100 mt-50x upd">
          <div className="w-50  ">
            <h2>Stay in the loop</h2>
            <p className="fs-18 ">  Join our mailing list to stay in the loop with our newest feature releases,
              NFT drops, and tips and tricks for navigating OpenSea.</p>
            <div className="w-100  flex jc-space_between fic_c" >
              <div className="fic w-75">
                <input placeholder="Your email address" />
              </div>
              <button className="w-20 c-pointer">Sign up</button>
            </div>
          </div>
          <div>
            <h2>Join the community</h2>
            <div>
              <div className="sico_div c-pointer">
                <img alt="icon" src={require('./images/social_icons/twitter-white.png')} />
              </div>
              <div className="sico_div c-pointer">
                <img alt="icon" src={require('./images/social_icons/instagram-white.png')} />
              </div>
              <div className="sico_div c-pointer">
                <img alt="icon" src={require('./images/social_icons/discord-white.png')} />
              </div>
              <div className="sico_div c-pointer">
                <img alt="icon" src={require('./images/social_icons/reddit-white.png')} />
              </div>
              <div className="sico_div c-pointer">
                <img alt="icon" src={require('./images/social_icons/youtube-white.png')} />
              </div>
              <div className="sico_div c-pointer">
                <img alt="icon" src={require('./images/social_icons/tik-tok-white.png')} />
              </div>
              <div className="sico_div c-pointer">
                <img alt="icon" src={require('./images/social_icons/mail-white.png')} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-50x w-100 fsd_cm flex jc-space_between">
          <div className="w-25 flex flex-column fsd_c">
            <img className="w-15" src={opensea_white} alt='logo' />
            <h2 className="fw-bold fs-22">OpenSea</h2>
            <span className="fw-semibold">The world’s first and largest digital marketplace for crypto collectibles
              and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
            </span>
          </div>
          <div className="mob_foot">
            <div className="">
              <h4>Marketplace</h4>
              <div className="li_item ">
                <div>All NFTs</div>
                <div>Solana NFTs</div>
                <div>Art</div>
                <div>Collectibles</div>
                <div>Domain Names</div>
                <div>Music</div>
                <div>Photography</div>
                <div>Sports</div>
                <div>Trading Cards</div>
                <div>Utility</div>
                <div>Virtual Worlds</div>
              </div>
            </div>
            <div className=" flex flex-column jc-space_between">
              <div>
                <h4>My Account</h4>
                <div className="li_item ">
                  <div>Profile</div>
                  <div>Favorites</div>
                  <div>Watchlist</div>
                  <div>Collectibles</div>
                  <div>My Collections</div>
                  <div>Settings</div>
                </div>
              </div>
              <div>
                <h4>Stats</h4>
                <div className="li_item ">
                  <div>Rankings</div>
                  <div>Activity</div>
                </div>
              </div>
            </div>
            <div className="">
              <h4>Resources</h4>
              <div className="li_item ">
                <div>Learn</div>
                <div>Help Center</div>
                <div>Platform Status</div>
                <div>Partners</div>
                <div>Taxes</div>
                <div>Blog</div>
                <div>Docs</div>
                <div>Newsletter</div>
              </div>
            </div>
            <div className="">
              <h4>Company</h4>
              <div className="li_item ">
                <div>About</div>
                <div>Careers</div>
                <div>Ventures</div>
                <div>Grants</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex jc-space_between fld_c">
          <div className="fs-12 fw-semibold" >&copy; 2018 - 2022 Ozone network, Inc</div>
          <div className="flex ">
            <div className="fs-12 fw-semibold mr-50x c-pointer gh">Privacy Policy</div>
            <div className="fs-12 fw-semibold c-pointer gh">Terms of Service</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
