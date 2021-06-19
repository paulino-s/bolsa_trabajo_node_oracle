import React from 'react';
import IntroBanner from './Banners/IntroBanner';
import ComoFunciona from './Banners/ComoFunciona';

const Home = () => {
  return (
    <div style={{height: '100vh'}}>
      <IntroBanner/>
      <ComoFunciona/>
    </div>
  );
}
 
export default Home;