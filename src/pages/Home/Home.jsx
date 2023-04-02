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
          title='Apie sportą'
          content='Sportas yra svarbus žmogaus gyvenimo aspektas, skatinantis fizinę formą, psichologinę sveikatą ir socialinį gerovę. Fizinis aktyvumas turi daugybę naudos, tokių kaip kardiovaskulinės sveikatos gerinimas, lėtinių ligų rizikos mažinimas ir kognityvinės funkcijos gerinimas. Be to, sportas padeda žmonėms įgyti kritinių gyvenimo įgūdžių, tokiais kaip komandos darbas, bendravimas ir lyderystė. Sporto dalyvavimas taip pat suteikia bendruomenės jausmą ir priklausomybę, sujungia žmones ir skatina socialinius ryšius. Nesvarbu, ar tai individualus, ar komandinis sportas, dalyvavimo fizinėje veikloje privalumai yra dideli ir nenuginčijami. Todėl svarbu skatinti ir skatinti dalyvavimą sporte, kad pagerintumėte bendrą sveikatą ir gerovę.'
        />
        <Card
          title='Apie sportą 2'
          content='Sportas yra svarbus žmogaus gyvenimo aspektas, skatinantis fizinę formą, psichologinę sveikatą ir socialinį gerovę. Fizinis aktyvumas turi daugybę naudos, tokių kaip kardiovaskulinės sveikatos gerinimas, lėtinių ligų rizikos mažinimas ir kognityvinės funkcijos gerinimas. Be to, sportas padeda žmonėms įgyti kritinių gyvenimo įgūdžių, tokiais kaip komandos darbas, bendravimas ir lyderystė. Sporto dalyvavimas taip pat suteikia bendruomenės jausmą ir priklausomybę, sujungia žmones ir skatina socialinius ryšius. Nesvarbu, ar tai individualus, ar komandinis sportas, dalyvavimo fizinėje veikloje privalumai yra dideli ir nenuginčijami. Todėl svarbu skatinti ir skatinti dalyvavimą sporte, kad pagerintumėte bendrą sveikatą ir gerovę.'
        />
        <Card
          title='Apie sportą 3'
          content='Sportas yra svarbus žmogaus gyvenimo aspektas, skatinantis fizinę formą, psichologinę sveikatą ir socialinį gerovę. Fizinis aktyvumas turi daugybę naudos, tokių kaip kardiovaskulinės sveikatos gerinimas, lėtinių ligų rizikos mažinimas ir kognityvinės funkcijos gerinimas. Be to, sportas padeda žmonėms įgyti kritinių gyvenimo įgūdžių, tokiais kaip komandos darbas, bendravimas ir lyderystė. Sporto dalyvavimas taip pat suteikia bendruomenės jausmą ir priklausomybę, sujungia žmones ir skatina socialinius ryšius. Nesvarbu, ar tai individualus, ar komandinis sportas, dalyvavimo fizinėje veikloje privalumai yra dideli ir nenuginčijami. Todėl svarbu skatinti ir skatinti dalyvavimą sporte, kad pagerintumėte bendrą sveikatą ir gerovę.'
        />
      </div>
    </div>
  );
};

export default Home;
