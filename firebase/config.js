import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDhdx_RbP68ds7_gqOBim7EgwVm2unE8_0',
  authDomain: 'netflix-clone-8629e.firebaseapp.com',
  projectId: 'netflix-clone-8629e',
  storageBucket: 'netflix-clone-8629e.appspot.com',
  messagingSenderId: '454300489135',
  appId: '1:454300489135:web:c8b14311996ad967be8b5a',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
