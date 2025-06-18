// Toggle search box
document.getElementById("searchBtn").addEventListener("click", () => {
  const box = document.getElementById("searchBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
});

// Toggle side drawer
document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("sideDrawer").style.width = "60%";
});

// Close drawer
function closeDrawer() {
  document.getElementById("sideDrawer").style.width = "0";
}

// Dummy search logic
function performSearch() {
  const query = document.getElementById("searchInput").value;
  alert("You searched for: " + query);
}
