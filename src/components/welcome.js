import React, { useState } from 'react';
import { Button } from '@mui/material';
import backgroundImage from '../backgrounds/welcomebackground.png'; // Resmi import et
import YoneticiLogin from './yoneticilogin'; // Yönetici login bileşenini import et
import PersonelLogin from './personellogin'; // Personel login bileşenini import et

export default function Welcome() {

  const [currentComponent, setCurrentComponent] = useState('welcome'); // Varsayılan bileşen

  const handleYoneticiClick = () => {
    setCurrentComponent('yonetici');
  };

  const handlePersonelClick = () => {
    setCurrentComponent('personel');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`, // Resmi arka plan olarak ayarla
    backgroundSize: 'cover', // Resmin boyutunu kaplamak için
    backgroundPosition: 'center', // Resmi ortalamak için
    color: 'white', // Yazı rengini beyaz yaparak görünürlüğü artırabilirsiniz
  };

  return (
    <div style={containerStyle}>
      {currentComponent === 'welcome' && (
        <>
          <h1>Akıllı Şirket Sistemine Hoşgeldiniz</h1>
          <div style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
            <Button variant="contained" color="primary" onClick={handleYoneticiClick}>
              Yönetici Girişi
            </Button>
            <Button variant="contained" color="secondary" onClick={handlePersonelClick}>
              Personel Girişi
            </Button>
          </div>
        </>
      )}

      {currentComponent === 'yonetici' && <YoneticiLogin />}
      {currentComponent === 'personel' && <PersonelLogin />}
    </div>
  );
}
