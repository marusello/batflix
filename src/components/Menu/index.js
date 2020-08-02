import React from 'react';
import { Link } from 'react-router-dom';

import LogoNome from '../../assets/logo.png';
import LogoBatman from '../../assets/batman.jpg';
import './Menu.css';
import Button from '../Button';

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">        
       <img className="LogoNome" src={LogoNome} alt="Logo do BatFlix" />
       <img className="LogoBatman" src={LogoBatman} alt="Logo do Batman" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo vídeo
      </Button>
    </nav>
  );
}
