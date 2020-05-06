/* eslint-disable no-undef */
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.API_KEY, 
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.db = firebase.database();
  }

  orders = () => this.db.ref('orders');
  getOrders = () => this.db.ref('orders').orderByChild('complete').equalTo(false).limitToFirst(5)
  updateOrders = (updates) => this.db.ref('orders').update(updates)
}

export default Firebase;
