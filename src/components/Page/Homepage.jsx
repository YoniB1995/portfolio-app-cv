import React , {useState,useReducer,useMemo} from 'react'
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
  const style ={color:"white"};
    const [state, dispatch] = useReducer(changeLanguage, {isTrue:false});

  function changeLanguage(state, action) {
  switch (action.type) {
    case 'Hebrew':
      return setHebrew({isTrue:true});
    case 'English':
      return setHebrew({isTrue:false});
    default:
      throw new Error();
  }

}
const changeLang = useMemo(()=>{
  return hebrew.isTrue? <DevDetailsHebrew/> :<DevDetails/>
})
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
   {changeLang}
   <div>{hebrew.isTrue? <Button variant="contained" color="primary" style={style} onClick={()=>{dispatch({type:'Hebrew'})}}>עברית</Button> : <Button variant="contained" color="primary" style={style} onClick={()=>{dispatch({type:'Hebrew'})}}>Hebrew</Button> }
        {hebrew.isTrue?<Button variant="contained" color="primary" onClick={()=>{dispatch({type:'English'})}}> אנגלית</Button> : <Button variant="contained" color="primary" onClick={()=>{dispatch({type:'English'})}}> English</Button>}</div> 
   <Copyright><FontAwesomeIcon icon={faCodepen} /> {hebrew.isTrue? "כל הזכויות שמורות יוני.ב" : "All Rights reserved Yoni_B" }</Copyright>
   </GreyBox>
   </div>
  </Router>
  </LanguageProvider>
    </>
  );
  }
