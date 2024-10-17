import React from 'react';
import { TextField, Button, Typography, Link } from '@mui/material';
import backgroundImage from '../backgrounds/yoneticibackground.png'; // Arka plan resmini import et

export default function YoneticiLogin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Giriş işlemleri burada gerçekleştirilebilir
  };

  return (
    <div style={{ ...styles.container, backgroundImage: `url(${backgroundImage})` }}>
      <div style={styles.rightHalf}>
        {/* YÖNETİCİ GİRİŞİ başlığı */}
        <Typography variant="h3" style={styles.header}>
          YÖNETİCİ GİRİŞİ
        </Typography>

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
    justifyContent: 'flex-end', // Sağ yarıya yerleşmek için
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
    flexDirection: 'column',
    justifyContent: 'center', // Dikeyde ortalamak için
    alignItems: 'center', // Yatayda ortalamak için
    width: '50vw', // Sağ yarının genişliği
    height: '100vh', // Sağ yarının tam yükseklik kaplaması
    
  },
  header: {
    color: 'white', // Başlık rengini mavi yapıyoruz
    marginBottom: '20px', // Başlık ile form arasında boşluk bırakıyoruz
    fontWeight: 'bold',
    letterSpacing: '2px', // Harfler arasında biraz boşluk ekliyoruz
    textAlign: 'center',
  },
  form: {
    width: '300px',
    height: '400px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
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
