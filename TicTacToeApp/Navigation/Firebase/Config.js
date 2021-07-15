import firebase from "firebase";
import "@firebase/firestore";
 
var config = {

        apiKey: "AIzaSyC-mtHCVj0oxdwcxTJfyoEbr0IrME_bzXQ",
        authDomain: "portfolio-c4a93.firebaseapp.com",
        databaseURL: "https://portfolio-c4a93.firebaseio.com",
        projectId: "portfolio-c4a93",
        storageBucket: "portfolio-c4a93.appspot.com",
        messagingSenderId: "315295652774",
        appId: "1:315295652774:web:a2e4e789544178f8e2cd67",
        measurementId: "G-E9EFE5PNNW"
  
      };

  // Initialize Firebase
firebase.initializeApp(config);

export default firebase;
