import React from 'react';
import '../../src/App.css';
import Card from '../component/Card';
import Footer from '../component/Footer';
import HeroSecrion  from '../component/HeroSecrion';


 function Home() {
 return(
    <>
      <HeroSecrion/>
       <Card/>
       <Footer/>
    </>
 )    
}

export default Home;