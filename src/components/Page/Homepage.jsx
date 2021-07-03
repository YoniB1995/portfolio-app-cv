import React , {useState,useMemo} from 'react'
import {Header , Body , BlackBox , GreyBox , UserCardDetails , ProfileImg , Copyright , jacobIcon , techIcon} from './HomeCss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import AboutMe from './AboutMe/AboutMe'
import IconsMenu from '../Features/IconsMenu'
import {LanguageProvider} from '../Context/LanguageContext'
import Resume from '../Features/Resume/Resume'
import FirstPage from './FirstPage/FirstPage'
import DevDetails from '../Features/DevDetails/DevDetails'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'
import {Button} from '@material-ui/core'
import DevDetailsHebrew from '../Features/DevDetails/DevDetailsHebrew'
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'



export default function Homepage() {
  const [hebrew,setHebrew] = useState({isTrue:false});
  const backgroundStyle ={ backgroundImage: "url('images/background_Protfolio.jpeg')"}
  const changeToHebrew = () => {setHebrew({isTrue:true})}
  const changeToEnglish = () => {setHebrew({isTrue:false})}
  const style ={color:"white"};
  
  return (
  <>
  <LanguageProvider value={hebrew}>
    <Router>
    <div style={backgroundStyle}>
    <Header>
      {jacobIcon}
      {techIcon} 
    </Header>
    <Body>
      
    <BlackBox className="animate__animated animate__zoomInUp">
      <UserCardDetails > 
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route path="/AboutMe" component={AboutMe} />
        <Route path="/Resume" component={Resume} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Projects" component={Projects} />
      </Switch>
      </UserCardDetails>
    </BlackBox>   
    </Body>
    <IconsMenu/>
    <GreyBox className="animate__animated animate__zoomInUp">
   <ProfileImg src="images/fixedProfile.jpg" width="180px" height="150px"/>
   {hebrew.isTrue? <DevDetailsHebrew/> :<DevDetails/>}
   <div>{hebrew.isTrue? <Button variant="contained" color="primary" onClick={changeToHebrew} style={style}>עברית</Button> : <Button variant="contained" color="primary" onClick={changeToHebrew} style={style}>Hebrew</Button> }
        {hebrew.isTrue?<Button variant="contained" color="primary" onClick={changeToEnglish}> אנגלית</Button> : <Button variant="contained" color="primary" onClick={changeToEnglish}> English</Button>}</div> 
   <Copyright><FontAwesomeIcon icon={faCodepen} /> {hebrew.isTrue? "כל הזכויות שמורות יוני.ב" : "All Rights reserved Yoni_B" }</Copyright>
   </GreyBox>
   </div>
  </Router>
  </LanguageProvider>
    </>
  );
}
