import firebase from "firebase";

export const getClinics = async (): Promise<Clinic[] | any> => {
  const db = firebase.firestore();
  try {
    var docRef = db.collection("Clinics");
    const clinics = await docRef.get();
    return Promise.resolve(clinics.docs.map((doc) => doc.data() as Clinic));
  } catch (e) {
    return Promise.reject(e);
  }
};
