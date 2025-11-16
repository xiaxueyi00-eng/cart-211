const input = document.getElementById("searchInput");
const results = document.getElementById("results");

input.addEventListener("input", () => {
  const value = input.value.trim();
  results.textContent = value ? `You searched: "${value}"` : "";
});
