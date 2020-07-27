import firebase  from "firebase";
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDabMVdHYJ84OKJJLAQiVjimPEU67G8rzE",
    authDomain: "m-city-de098.firebaseapp.com",
    databaseURL: "https://m-city-de098.firebaseio.com",
    projectId: "m-city-de098",
    storageBucket: "m-city-de098.appspot.com",
    messagingSenderId: "178411849901",
    appId: "1:178411849901:web:62ed14e7db53b026715e24",
    measurementId: "G-X0G1T1W3SM"
};
firebase.initializeApp(firebaseConfig);

const firebaseDB= firebase.database();
const firebaseMatches= firebaseDB.ref('matches');
const firebasePromotion= firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');

export {
    firebase,
    firebaseMatches,
    firebasePromotion,
    firebaseTeams,
    firebaseDB
}