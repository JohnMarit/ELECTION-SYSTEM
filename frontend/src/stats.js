import { db } from "./firebase.js";
import { collection, getDocs } from "firebase/firestore";

export async function fetchVoterStats() {
  const querySnapshot = await getDocs(collection(db, "voters"));
  const totalVoters = querySnapshot.size;
  const voted = querySnapshot.docs.filter((doc) => doc.data().hasVoted).length;
  const notVoted = totalVoters - voted;

  return { totalVoters, voted, notVoted };
}
