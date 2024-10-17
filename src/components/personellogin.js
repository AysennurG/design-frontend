import React from 'react';
import { TextField, Button, Typography, Link } from '@mui/material';
import backgroundImage from '../backgrounds/personelbackground.png'; // Arka plan resmini import et

export default function YoneticiLogin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Giriş işlemleri burada gerçekleştirilebilir
  };

  return (
    <div style={{ ...styles.container, backgroundImage: `url(${backgroundImage})` }}>
      <Typography variant="h3" style={styles.header}>
          PERSONEL GİRİŞİ
        </Typography>
      <div style={styles.rightHalf}>
        {/* PERSONEL GİRİŞİ başlığı */}
        

        <form onSubmit={handleSubmit} style={styles.form}>
          <TextField
            label="Kullanıcı ID"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Şifre"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <Button variant="contained" color="primary" type="submit" style={styles.button}>
            Giriş Yap
          </Button>
          <Link href="#" variant="body2" style={styles.forgotPassword}>
            Şifremi Unuttum
          </Link>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column', // Başlık ve formu dikey olarak sıralar
    justifyContent: 'center', // Yatay eksende ortalama
    alignItems: 'center', // Dikey eksende ortalama
    height: '100vh', // Tam ekran yüksekliği
    width: '100vw',  // Tam ekran genişliği
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundSize: 'cover', // Arka planın tam sayfaya yayılması için
    backgroundPosition: 'center',
  },
  rightHalf: {
    display: 'flex',
    flexDirection: 'column', // Formu dikey olarak sıralar
    justifyContent: 'center', // Dikeyde ortalama
    alignItems: 'center', // Yatayda ortalama
    width: '300px',
    padding: '50px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Arka planı biraz opak yaparak okunabilirlik sağlıyoruz
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    marginTop: '20px', // Başlık ile form arasında biraz boşluk
  },
  header: {
    color: 'white', // Başlık rengini mavi yapıyoruz
    marginBottom: '20px', // Başlık ile form arasında boşluk bırakıyoruz
    fontWeight: 'bold',
    letterSpacing: '2px', // Harfler arasında biraz boşluk ekliyoruz
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  button: {
    marginTop: '20px',
  },
  forgotPassword: {
    display: 'block',
    marginTop: '10px',
    textAlign: 'center',
  },
};
