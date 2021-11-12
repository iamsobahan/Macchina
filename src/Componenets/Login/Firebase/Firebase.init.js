import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const firebaseInit = () => {
  const app = initializeApp(firebaseConfig);
  return app;
};

export default firebaseInit;
