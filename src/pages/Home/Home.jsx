import React from 'react';
import Header from '../../components/Header/Header';
import Card from './../../components/Card/Card';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.mainPage}>
      <Header />
      <div className={css.container}>
        <Card
          src='https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=1380&t=st=1680454535~exp=1680455135~hmac=0b41e433a98b269d090db21fa78188471dfffc302006602096437fa6ea370a0a'
          title='Apie sportą'
          content='Sportas yra svarbus žmogaus gyvenimo aspektas, skatinantis fizinę formą, psichologinę sveikatą ir socialinį gerovę. Fizinis aktyvumas turi daugybę naudos, tokių kaip kardiovaskulinės sveikatos gerinimas, lėtinių ligų rizikos mažinimas ir kognityvinės funkcijos gerinimas. Be to, sportas padeda žmonėms įgyti kritinių gyvenimo įgūdžių, tokiais kaip komandos darbas, bendravimas ir lyderystė. Sporto dalyvavimas taip pat suteikia bendruomenės jausmą ir priklausomybę, sujungia žmones ir skatina socialinius ryšius. Nesvarbu, ar tai individualus, ar komandinis sportas, dalyvavimo fizinėje veikloje privalumai yra dideli ir nenuginčijami. Todėl svarbu skatinti ir skatinti dalyvavimą sporte, kad pagerintumėte bendrą sveikatą ir gerovę.'
        />
        <Card
          src='https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=1380&t=st=1680454535~exp=1680455135~hmac=0b41e433a98b269d090db21fa78188471dfffc302006602096437fa6ea370a0a'
          title='Apie sportą 2'
          content='Sportas yra svarbus žmogaus gyvenimo aspektas, skatinantis fizinę formą, psichologinę sveikatą ir socialinį gerovę. Fizinis aktyvumas turi daugybę naudos, tokių kaip kardiovaskulinės sveikatos gerinimas, lėtinių ligų rizikos mažinimas ir kognityvinės funkcijos gerinimas. Be to, sportas padeda žmonėms įgyti kritinių gyvenimo įgūdžių, tokiais kaip komandos darbas, bendravimas ir lyderystė. Sporto dalyvavimas taip pat suteikia bendruomenės jausmą ir priklausomybę, sujungia žmones ir skatina socialinius ryšius. Nesvarbu, ar tai individualus, ar komandinis sportas, dalyvavimo fizinėje veikloje privalumai yra dideli ir nenuginčijami. Todėl svarbu skatinti ir skatinti dalyvavimą sporte, kad pagerintumėte bendrą sveikatą ir gerovę.'
        />
        <Card
          src='https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=1380&t=st=1680454535~exp=1680455135~hmac=0b41e433a98b269d090db21fa78188471dfffc302006602096437fa6ea370a0a'
          title='Apie sportą 3'
          content='Sportas yra svarbus žmogaus gyvenimo aspektas, skatinantis fizinę formą, psichologinę sveikatą ir socialinį gerovę. Fizinis aktyvumas turi daugybę naudos, tokių kaip kardiovaskulinės sveikatos gerinimas, lėtinių ligų rizikos mažinimas ir kognityvinės funkcijos gerinimas. Be to, sportas padeda žmonėms įgyti kritinių gyvenimo įgūdžių, tokiais kaip komandos darbas, bendravimas ir lyderystė. Sporto dalyvavimas taip pat suteikia bendruomenės jausmą ir priklausomybę, sujungia žmones ir skatina socialinius ryšius. Nesvarbu, ar tai individualus, ar komandinis sportas, dalyvavimo fizinėje veikloje privalumai yra dideli ir nenuginčijami. Todėl svarbu skatinti ir skatinti dalyvavimą sporte, kad pagerintumėte bendrą sveikatą ir gerovę.'
        />
      </div>
    </div>
  );
};

export default Home;
