import firebase from "firebase";

let config = {
  apiKey: "AIzaSyAnXKtO4BLFvs3T7Z76_tw6AcCjdW2Y2ng",
  authDomain: "flow-chart-2.firebaseapp.com",
  databaseURL: "https://flow-chart-2-default-rtdb.firebaseio.com/",
  projectId: "flow-chart-2",
  storageBucket: "flow-chart-2.appspot.com",
  messagingSenderId: "103120281113",
  appId: "1:103120281113:web:5c461b3371cdc07ed85488",
};

var fireDb = firebase.initializeApp(config);

export default fireDb.database().ref();
