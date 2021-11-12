import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import { useEffect, useState } from "react";
import firebaseInit from "../Componenets/Login/Firebase/Firebase.init";

firebaseInit();

const auth = getAuth();

const useFirebase = () => {
  const [user, setuser] = useState({});
  const [loading, setloading] = useState(true);
  const [usererror, seterror] = useState("");

  const providerGoogle = new GoogleAuthProvider();

  const signInWithGoogle = (location, history) => {
    setloading(true);
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        saveUserToDb(result.user.email, result.user.displayName, "PUT");
        const destination = location?.state?.from || "/home";
        history.replace(destination);
      })
      .catch((error) => {
        const errorMessage = error.message;
        seterror(errorMessage);
      })
      .finally(() => setloading(false));
  };

  const createRegister = (email, password, name, history) => {
    setloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const newUser = { email, displayName: name };
        saveUserToDb(email, name, "POST");
        setuser(newUser);

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});

        history.replace("/");
        seterror("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        seterror(errorMessage);
      })
      .finally(() => setloading(false));
  };

  const createLogin = (email, password, location, history) => {
    setloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const destination = location?.state?.from || "/home";
        history.replace(destination);
        seterror("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        seterror(errorMessage);
      })
      .finally(() => setloading(false));
  };

  useEffect(() => {
    setloading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      } else {
        setuser({});
      }
      setloading(false);
    });
  }, []);

  const logOut = () => {
    setloading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setloading(false));
  };

  const saveUserToDb = (email, name, method) => {
    const user = {
      email,
      name,
    };

    fetch("https://nameless-retreat-70223.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    createRegister,
    createLogin,
    user,
    logOut,
    signInWithGoogle,
    loading,
    usererror,
  };
};

export default useFirebase;
