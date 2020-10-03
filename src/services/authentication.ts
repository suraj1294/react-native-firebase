import firebase from "firebase";

interface SignInWith {
  email: string;
  password: string;
}
interface ResetPasswordWith {
  email: string;
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

export const signUpWith = async ({
  email,
  password,
}: SignInWith): Promise<firebase.User | null> => {
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    return Promise.resolve(user.user);
  } catch (e) {
    return Promise.reject(e.code);
  }
};

export const resetPasswordWith = async ({
  email,
}: ResetPasswordWith): Promise<any> => {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    return Promise.resolve();
  } catch (e) {
    return Promise.reject(e.code);
  }
};
