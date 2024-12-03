import { db } from "./firebase";
import { collection, addDoc, updateDoc, doc, increment } from "firebase/firestore";

const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const idNumber = document.getElementById("idNumber").value;
  const payam = document.getElementById("payam").value;
  const voterId = document.getElementById("voterId").value;

  try {
    await addDoc(collection(db, "voters"), {
      name,
      idNumber,
      payam,
      voterId,
      hasVoted: false,
    });

    alert("Voter added successfully!");
  } catch (error) {
    console.error("Error adding voter: ", error);
  }
});



// fetch data


import { collection, query, where, getDocs } from "firebase/firestore";

const totalVoters = document.getElementById("totalVoters");
const votedCount = document.getElementById("votedCount");
const notVotedCount = document.getElementById("notVotedCount");

async function updateDashboard() {
  const votersRef = collection(db, "voters");

  const allVoters = await getDocs(votersRef);
  const votedVoters = await getDocs(query(votersRef, where("hasVoted", "==", true)));
  const notVotedVoters = await getDocs(query(votersRef, where("hasVoted", "==", false)));

  totalVoters.textContent = allVoters.size;
  votedCount.textContent = votedVoters.size;
  notVotedCount.textContent = notVotedVoters.size;
}

updateDashboard();



// search functionality


import { doc, getDoc, updateDoc } from "firebase/firestore";

const searchForm = document.getElementById("searchForm");
const searchResult = document.getElementById("searchResult");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = document.getElementById("searchQuery").value;

  const votersRef = collection(db, "voters");
  const q = query(votersRef, where("name", "==", query)); // or search by voterId

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    searchResult.textContent = "No voter found.";
  } else {
    querySnapshot.forEach((doc) => {
      const voter = doc.data();
      searchResult.innerHTML = `
        <p>${voter.name} - ${voter.voterId} - ${voter.hasVoted ? "Voted" : "Not Voted"}</p>
        ${!voter.hasVoted ? `<button onclick="markAsVoted('${doc.id}')">Mark as Voted</button>` : ""}
      `;
    });
  }
});

async function markAsVoted(voterId) {
  const voterDoc = doc(db, "voters", voterId);
  await updateDoc(voterDoc, { hasVoted: true });
  alert("Voter marked as voted!");
  updateDashboard();
}
