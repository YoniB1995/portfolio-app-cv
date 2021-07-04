import React,{useState,useEffect,useMemo} from 'react'
import {Button} from 'react-bootstrap'
import Homepage from './Homepage'
import { UserProvider } from '../Context/Context'
import MediaCard from '../Features/MainPageCards/MediaCard'
import Footer from '../Features/Footer/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from '@fortawesome/free-solid-svg-icons';
import {MainPage , NewDivBody , WelcomePage , MainPageHeaderLight , DogLoaderGif , ImgCards , LetsStart , IconImages } from './ContainerCss'


export default function MainPageContainer() {
    const [startBtn,setStartBtn] = useState(false)
    const [fade,setFade] = useState(true)
    const [box,showBox] = useState(false)
    const [card,showCards] = useState(false)
    const [newStyle,setNewStyle] = useState({display:"none"})
    const [cardStyle,setCardStyle] = useState({display:"flex"})
    const [dogStyle,setDogStyle] = useState({display:"flex"})

    setTimeout(()=>{
        {dogStyle === {display:"flex"} ? setStartBtn(false) : setStartBtn(true) }
    },4000)

    const beginBtn =()=>{
        setDogStyle({display:"none"})
        setNewStyle({display:"flex"})
    }
    

    const toPictures = () => {
        showCards(true);
        setCardStyle({display:"none"});
    }

    const changeFade = () => {
    setStartBtn(false)
    setFade(false);
    showCards(false);
    

    setTimeout(() => {
    setCardStyle({display:"none"});
    setNewStyle({display:"none"});
    showBox(true);
    }, 2000);
    }
    

    const [data,setData] = useState({})

    useEffect(()=>{
        fetch("api/techYoniApi.txt")
        .then(res => res.json())
        .then(req => setData(req))
    },[])

    

    return (
    
    <UserProvider value={fade,changeFade}>
        <DogLoaderGif style={dogStyle}>
        {startBtn&& <Button variant="primary" size="lg" onClick={beginBtn}  className="animate__animated animate__backInDown">
        TO PROTFOLIO
        </Button> }
        
        <img src="images/loaderDogGif.gif" alt="dogLoader" height="200px" width="200px"/>
        </DogLoaderGif>
        
    <NewDivBody className={fade? "animate__animated animate__fadeInDown": "animate__animated animate__fadeOutDown"} style={newStyle}  >
    <WelcomePage style={cardStyle}>
    <h1>Welcome To My Protfolio</h1>
    
    <h1><MainPageHeaderLight>I AM</MainPageHeaderLight> YONI BITEW</h1>
    <span>
    <img src="images/INDI_COM.png" alt="indi com logo"  width="180px" height="300px" className="floatImg" />  
    <img src="images/טק_קריירה.png" alt="indi com logo" width="180px" height="150px" className="floatImgTwo" />  </span>
    </WelcomePage>
    <IconImages onClick={toPictures}><FontAwesomeIcon icon={faImages} /></IconImages>
    <LetsStart src={"images/mouse-scroll.png"} alt="lets start button" onClick={changeFade} />
    {card&& <ImgCards className="animate__animated animate__fadeInDown">
    {data.cardDesc.map((desc,i)=>
             <MediaCard img={data.images[i]} cardType={data.cardDesc[i]} cardHeader={data.dates[i]} />)}</ImgCards> }

    </NewDivBody> 
    <MainPage >
    {box && <Homepage/> } 
    {box && <Footer/> }
    </MainPage>
    
    </UserProvider>
    
    )}

