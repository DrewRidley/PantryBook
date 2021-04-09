import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Cookies from 'js-cookie';

let firebaseCfg = {
	apiKey: 'AIzaSyB-wUG4UrAaC6gorqB_DZ4FOpYqHcuI8J0',
	authDomain: 'pantrybook.firebaseapp.com',
	projectId: 'pantrybook',
	storageBucket: 'pantrybook.appspot.com',
	messagingSenderId: '470048751220',
	appId: '1:470048751220:web:936d8d290a7807faf71b21'
};

firebase.default.initializeApp(firebaseCfg);

firebase.default.auth().onIdTokenChanged(async (user) => {
	if (user) {
		const token = await user.getIdToken();
		Cookies.set('token', token);
		return;
	}
	Cookies.remove('token');
});

//For debugging purposes.
window.firebase = firebase.default;

export default firebase.default;
