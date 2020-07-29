import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Olivia Pope (Kerry Washington) passa seu tempo protegendo a reputação das personalidades estadunidenses da elite, evitando que nasçam grandes escândalos. A moça decide abrir uma empresa após deixar seu trabalho na Casa Branca, mas não consegue se desvencilhar totalmente de seu passado profissional. Sua equipe é formada por Harrison Wright (Columbus Short), Quinn Perkins (Katie Lowes), Stephen Finch (Henry Ian Cusick), Abby Whelan (Darby Stanchfield) e o hacker Huck Finn (Guillermo Diaz)."}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />         

      <Footer />
    </div>
  );
}

export default App;
