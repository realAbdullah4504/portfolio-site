import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Client from './components/Client';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';
import WOW from "wowjs";
import { jquery } from './main';
import { useState } from 'react';
import { getSettings } from './api/postUserDetails';
import { getServices } from './api/services';

function App() {
  const [setting,setSetting]=useState({});
  const [services,setServices]=useState([]);

  useEffect(() => {
    getSettings().then(res=>{
      //console.log('response',res)
      setSetting(res);
    })
    .catch(err=>console.error(err));

    getServices().then(res=>{
      //console.log('response',res)
      setServices(res);
    })

    const wow = new WOW.WOW({
      animateClass: "animated",
      offset: 100,
    });
    
    wow.init();
    jquery(window.$);   

  }, []);

  //Email is not working on deployed version
  
  return (
    <div className="App">
      <Home mainLogoName={setting?.mainLogoName}/>
      <NavBar mainLogoName={setting?.mainLogoName}/>
      <Service services={services}/>
      <Portfolio />
      <Client />
      {/* <Badge /> */}
      <Team />
      <Contact contactDetails={setting.contactDetails} socialLinks={setting.socialLinks}/>
      <Footer footerName={setting.footerName}/>
    </div>
  );
}
export default App;
