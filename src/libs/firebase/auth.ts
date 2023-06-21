import { log } from "console";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "./firebase.config";
export const useAuth = () => {
  const auth = getAuth(app);

  const signin = async (email: string, password: string) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  };

  const signup = async (name: string, email: string, password: string) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    updateUserName(name);
    return response;
  };

  const updateUserName = async (name: string) => {
    console.log({ auth });
    if (!auth.currentUser) return;
    await updateProfile(auth.currentUser, { displayName: name });
  };

  return { signin, signup };
};
