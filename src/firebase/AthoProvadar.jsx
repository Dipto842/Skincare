import { useEffect, useState } from "react";
import AuthContes from "./Authcontes";
import auth, { db } from "./firebase.Config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { collection, query, where, getDocs, setDoc, doc } from "firebase/firestore";

import { GoogleAuthProvider } from "firebase/auth";



const AthoProvadar = ({children }) => {
    const Googleprovider = new GoogleAuthProvider()
const [user,setuser]=useState(null)

const singup = (email, password, name) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;

      // 1. update profile
      return updateProfile(user, {
        displayName: name,
      }).then(() => {
        // 2. check if any admin exists
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("role", "==", "admin"));
        return getDocs(q).then(querySnapshot => {
          const role = querySnapshot.empty ? "admin" : "user";

          // 3. save to Firestore
          return setDoc(doc(db, "users", user.uid), {
            email,
            displayName: name,
            role
          }).then(() => user); // return user after Firestore save
        });
      });
    });
};

    const singin = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)

    }

    const logout = () => {
        return signOut(auth)

    }
    const updateProfil = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }
    const Google = () => {
        return signInWithPopup(auth, Googleprovider)
    }







useEffect(()=>{
   
 const unsubscribe = onAuthStateChanged(auth,currentUser =>{
        
            setuser(currentUser)
        
     })
     return ()=> unsubscribe()
},[])

const userInfolmechon={
user,
singup,
singin,
logout,
updateProfil,
Google
}

return (
    <AuthContes.Provider value={userInfolmechon}>
        {children }
    </AuthContes.Provider>
)

};

export default AthoProvadar;