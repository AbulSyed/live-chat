import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDI-1k8VAR1o4OEy6MS7MPm1Ev1DwQZKZI",
  authDomain: "live-chat-app-57a05.firebaseapp.com",
  projectId: "live-chat-app-57a05",
  storageBucket: "live-chat-app-57a05.appspot.com",
  messagingSenderId: "827008951763",
  appId: "1:827008951763:web:ab5a29a77a8ad8f828fb26"
};

firebase.initializeApp(firebaseConfig)

const firestoreService = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { firestoreService, timestamp }