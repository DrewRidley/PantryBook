import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app"

const firebaseApp = initializeApp({
	apiKey: 'AIzaSyB-wUG4UrAaC6gorqB_DZ4FOpYqHcuI8J0',
	authDomain: 'pantrybook.firebaseapp.com',
	projectId: 'pantrybook',
	storageBucket: 'pantrybook.appspot.com',
	messagingSenderId: '470048751220',
	appId: '1:470048751220:web:936d8d290a7807faf71b21'
  });

export let app = getFirestore(firebaseApp);

export let db = getFirestore(firebaseApp);

export let auth = getAuth(firebaseApp);