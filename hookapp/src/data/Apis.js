//import the imgs files
import aquaman from '../assets/aquaman.jpg'
import badgenius from '../assets/badgenius.jpg'
import Davincicode from '../assets/Davincicode.jpg'
import gameofthrones from '../assets/gameofthrones.jpg'
import ghosted from '../assets/ghosted.jpg'
import johnwick from '../assets/johnwick.jpg'
import lupin from '../assets/lupin.jpg'
import theblueelephant from '../assets/theblueelephant.jpg'
import TheLastAirbender from '../assets/TheLastAirbender.png'




//create an array of movie data 
const apis = [
    {
      Title: 'aquaman',
      PosterUrl: aquaman,
      description: "Arthur Curry apprend qu'il est l'héritier du royaume sous-marin d'Atlantis et qu'il doit prendre les mesures nécessaires pour diriger son peuple et devenir un héros pour le reste du monde.",
      Rating: '7',
    },
    {
      Title: 'badgenius',
      PosterUrl: badgenius,
      description: "Lynn, a genius high school student who makes money by cheating tests, receives a new task that leads her to set foot on Sydney, Australia. In order to complete the millions-Baht task, Lynn and her classmates have to finish the international STIC(SAT) exam and deliver the answers back to her friends in Thailand before the exam takes place once again in her home country.",
      Rating: '8',
    },
    {
      Title: 'ghosted',
      PosterUrl: ghosted,
      description: "Cole, un agriculteur sans histoire, tombe éperdument amoureux de la mystérieuse Sadie, mais découvre avec stupeur qu'elle est agent secret. Avant même un second rencard, Cole et Sadie vont être embarqués dans une aventure au-delà des frontières lors de laquelle ils vont devoir sauver le monde.",
      Rating: '6',
    },
    {
      Title: 'lupin',
      PosterUrl: lupin,
      description: "Inspiré par les aventures d'Arsène Lupin, le gentleman cambrioleur Assane Diop décide de venger son père d'une terrible injustice.",
      Rating: '8',
    },
    {
      Title: 'the blue elephant',
      PosterUrl: theblueelephant,
      description: "While trying to help an inmate at the mental hospital, a psychotherapist unravels mysteries he never thought existed.",
      Rating: '8',
    },
    {
      Title: 'the last airbander',
      PosterUrl: TheLastAirbender,
      description: "Dans un monde magique déchiré par la guerre, un jeune garçon se réveille et se lance dans une quête mystique et dangereuse pour accomplir son destin d'Avatar et apporter la paix dans le monde.",
      Rating: '9',
    },
    {
      Title: 'Davinci code',
      PosterUrl: Davincicode,
      description: "Un meurtre à l'intérieur du Louvre et des indices dans des tableaux de Da Vinci ont permis de découvrir un mystère religieux protégé par une société secrète pendant deux mille ans, ce qui pourrait ébranler les fondements du christianisme.",
      Rating: '7',
    },
    {
      Title: 'game of thrones',
      PosterUrl: gameofthrones,
      description: "Neuf nobles familles se battent pour le contrôle des terres mythiques de Westeros, tandis qu'un ancien ennemi revient après avoir été endormi pendant des milliers d'années.",
      Rating: '9',
    },
    {
      Title: 'johnwick',
      PosterUrl: johnwick,
      description: "La suite des aventures de l'assassin John Wick.",
      Rating: '8',
    },
  ];
  
  export default apis;
  