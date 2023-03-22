import firebase from 'firebase/app';
import 'firebase/storage';

firebase.initializeApp({
    apiKey: 'AIzaSyCGkmH-C1Fh37iVOsosW8hFE3GQRc2g-8c',
    authDomain: 'game-caro-8ab67.firebaseapp.com',
    storageBucket: 'game-caro-8ab67.appspot.com',
    databaseURL: 'https://game-caro-8ab67-default-rtdb.firebaseio.com/'
});

const storage = firebase.storage();

export {
    storage, firebase as default
}