import firebase from "firebase";
export interface AuthenticationState {
  isLogging: boolean;
  user: firebase.User | undefined | null;
}
