import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics'; // Nếu bạn muốn dùng Analytics

// Cấu hình Firebase của ứng dụng web
const firebaseConfig = {
  apiKey: "AIzaSyCyJumfQY0bJv2OUpDvor5SfdV_5zSEXvo",
  authDomain: "qit2902.firebaseapp.com",
  databaseURL: "https://qit2902-default-rtdb.firebaseio.com",
  projectId: "qit2902",
  storageBucket: "qit2902.appspot.com",
  messagingSenderId: "307626611978",
  appId: "1:307626611978:web:7517e6238d1e71e04796f3",
  measurementId: "G-PFKG2S7FBH" // Measurement ID nếu bạn dùng Analytics
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// Nếu bạn muốn sử dụng Google Analytics
const analytics = getAnalytics(app);

export { db, storage, analytics };
