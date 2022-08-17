import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAICmymZuh8g4rRnQh2X4zY_8TH50iUQWw',
  authDomain: 'pastebin-clone-8eae1.firebaseapp.com',
  databaseURL: 'https://pastebin-clone-8eae1-default-rtdb.firebaseio.com',
  projectId: 'pastebin-clone-8eae1',
  storageBucket: 'pastebin-clone-8eae1.appspot.com',
  messagingSenderId: '1016507551927',
  appId: '1:1016507551927:web:067f5dc4255dc8b3fd3d32',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();