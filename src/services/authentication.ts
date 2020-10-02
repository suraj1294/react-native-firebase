import firebase from "firebase";

interface SignInWith {
  email: string;
  password: string;
}

export const signInWith = async ({
  email,
  password,
}: SignInWith): Promise<firebase.User | null> => {
  try {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return Promise.resolve(user.user);
  } catch (e) {
    return Promise.reject(e.code);
  }
};
