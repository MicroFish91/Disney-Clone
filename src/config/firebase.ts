import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import config from "./config";

const firebaseApp = initializeApp(config.firebase);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
