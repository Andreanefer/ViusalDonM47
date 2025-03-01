import bb from 'billboard.js'; //pronblème à cette ligne
import 'billboard.js/dist/billboard.css'; //Dois-je mettre le chemin exacte ?


const data = require('../data/data.json') ; 

console.log("Test")

bb.generate({
  
  data: {
    json: {
      passagers_train: data.map(({ passagers_train }) => passagers_train),
      passagers: data.map(({ passagers_tpr }) => passagers_tpr),
      passagers: data.map(({ passagers_bateau }) => passagers_bateau),
      km_train: data.map(({ km_train }) => km_train),
      km_tpr: data.map(({ km_tpr }) => km_tpr),
      km_bateau: data.map(({ km_bateau }) => km_bateau),
    },
    //Definition des axes y
    axes: {
      passagers_tpr: 'y',
      km_train: 'y2',
    },
    types: {
      passagers_train:"bar",
      passagers_tpr:"bar",
      passagers_bateau:"bar",
      km_train:"bar",
      km_tpr:"bar",
      km_bateau:"bar",
    },
  },
  axis: {
    x: {
      type: 'category',
      categories: data.map(({ annee }) => annee)
    },
    //Definition de l'axe y
    y: {
      tick:{
        format: x => `${x/1000}k`
      },
      label: 'Nombre de passagers (en millier)',
    },
    //Montage + définition du 2e axe y
    y2: {
      show: true,
      label: 'Nombre de km parcouru (en million)',
    }
  },
  bindto: '#graphiquePendulaire',
})
