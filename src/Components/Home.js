import React from 'react'
import Navbar from './Navbar'
import HomeHero from './HomeHero'
import "./Home.css"
import EcoSystem from './EcoSystem'
import Tokenomics from './Tokenomics'
import HowToBuy from './HowToBuy'
import FAQPresale from './Faq1'
import Footer from './Footer'
import Roadmap from './Roadmap'
import Newsletter from './Newsletter'
import HomeCta from './HomeCta'
import Topbar from './Topbar'
import TokenIntro from './TokenIntro'
import ContactForm from './ContactForm'
import WagmiUtils from '../blockchain/WagmiUtils'
import Missionvision from './MissionVision'
import AllBlockchains from './AllBlockchains'
import AllUniversity from './AllUniversity'
import Faq from './Faq'
import Slider from './Slider'
import OurTeam from './Slider'
import Timeline from './Roadmap2'
import SecondCompo from './SecondCompo'

const Home = () => {
  return (
    <>
    <div className='background-home'>
    <Topbar/>
    <Navbar/>
    <HomeHero/>
    <SecondCompo/>
    {/* <EcoSystem/> */}
    <TokenIntro/>
    <Missionvision/>
    <Tokenomics/>
    {/* <Newsletter/> */}
    
    <HowToBuy/>
    <AllUniversity/>
    <AllBlockchains/>
    {/* <Roadmap/> */}
    <Timeline/>
    <OurTeam/>
    <HomeCta/>
    <Faq/>
    {/* <FAQPresale/> */}
    <Footer/>
    </div>
    <WagmiUtils/>
    
    </>
    

  )
}

export default Home