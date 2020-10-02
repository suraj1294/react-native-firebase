import * as firebase from "firebase";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const firebaseConfig = {
  apiKey: "AIzaSyABTkVPH5xyofyqxgSC2aHhsVlEIf1Ow6k",
  authDomain: "clinic-acad0.firebaseapp.com",
  databaseURL: "https://clinic-acad0.firebaseio.com",
  projectId: "clinic-acad0",
  storageBucket: "clinic-acad0.appspot.com",
  messagingSenderId: "303793431043",
  appId: "1:303793431043:web:710dcc4f6080a53aa42436",
  measurementId: "G-G9FRZ4M71T",
};
// Initialize Firebase
export const initFirebase = () => {
  if (firebase.apps.length === 0) {
    console.log("..initialize firebase");
    firebase.initializeApp(firebaseConfig);
  }
};
