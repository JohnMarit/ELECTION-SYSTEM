import { addVoter } from "./voters.js";

document.getElementById("addVoterForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const idNumber = document.getElementById("idNumber").value.trim();
  const payam = document.getElementById("payam").value.trim();
  const voterId = document.getElementById("voterId").value.trim();

  if (name && idNumber && payam && voterId) {
    await addVoter(name, idNumber, payam, voterId);
    updateVoterStats(); // Update stats after adding a voter
    event.target.reset(); // Clear the form
  } else {
    alert("All fields are required!");
  }
});
