// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export interface Environment {
    production: boolean;
    firebase: {
      apiKey: string;
      authDomain: string;
      databaseURL: string;
      projectId: string;
      storageBucket: string;
      messagingSenderId: string;
      appId: string;
      measurementId: string;
    };
  }
  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const environment: Environment ={
    production: false,
        firebase : {
        apiKey: "AIzaSyBUscPghOXxCs49Si09Qsn9eamlSQCD5Wg",
        authDomain: "myhrtimesheet.firebaseapp.com",
        databaseURL: "https://myhrtimesheet-default-rtdb.firebaseio.com",
        projectId: "myhrtimesheet",
        storageBucket: "myhrtimesheet.appspot.com",
        messagingSenderId: "838291135009",
        appId: "1:838291135009:web:2b0a0dbb5566235d442160",
        measurementId: "G-1Q9XSNCDTV"
      },
      
}


// Initialize Firebase
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);