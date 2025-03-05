import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWYhTYPaA2lOAX9l1vyYzis97GERR6J38",
  authDomain: "ai-diary-07.firebaseapp.com",
  projectId: "ai-diary-07",
  storageBucket: "ai-diary-07.appspot.com",  // Fixed storage bucket URL
  messagingSenderId: "398150612026",
  appId: "1:398150612026:web:846d0b8518b20241f2b103",
  measurementId: "G-WHFP6GXLB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, collection, addDoc, getDocs, analytics };
