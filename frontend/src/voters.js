import { db } from "./firebase.js";
import { doc, setDoc } from "firebase/firestore";

export async function addVoter(name, idNumber, payam, voterId) {
  await setDoc(doc(db, "voters", voterId), {
    name,
    idNumber,
    payam,
    voterId,
    hasVoted: false,
  });
  console.log("Voter added successfully!");
}
