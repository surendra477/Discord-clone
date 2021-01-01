import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDSHQgu9tEydQTetVARSr9bJuDpeJLXeRU",
  authDomain: "discord-clone-surendra-36f97.firebaseapp.com",
  projectId: "discord-clone-surendra-36f97",
  storageBucket: "discord-clone-surendra-36f97.appspot.com",
  messagingSenderId: "229322457070",
  appId: "1:229322457070:web:4cf245e34f20ac681498ff",
  measurementId: "G-JCKLVZD3W2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()


export {auth,provider } ;
export default db;