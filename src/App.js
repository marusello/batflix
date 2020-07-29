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
        videoDescription={"Liga da Justiça Sem Limites Episódio: Esta Porquinha Nesse episódio, Batman canta para que a feiticeira Circe desfizesse o feitiço em Diana a Mulher Maravilha."}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />         

      <Footer />
    </div>
  );
}

export default App;
