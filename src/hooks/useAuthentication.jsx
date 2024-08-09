import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loagind, setLoading] = useState(null);

  // cleanup
  // deal with memory leak
  const [cancelled, setCanceled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }
};
