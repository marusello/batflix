import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import './Menu.css';
import Button from '../Button';

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">        
       <img className="Logo" src={Logo} alt="Logo do BatFlix" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}
