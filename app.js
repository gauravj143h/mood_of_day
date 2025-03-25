const moodOptions = document.querySelectorAll(".mood-option");
const moodContainer = document.querySelector(".mood-selector"); // Main container
const mood_note = document.querySelector(".mood-note");
const moodNote = document.getElementById("mood-note");
// const note_section = document.querySelector(".note-section")
// Define colors for each mood
const moodColors = {
    happy: "rgba(137, 231, 109, 0.4)",    // Light Green
    content: "rgba(173, 216, 230, 0.5)",  // Light Blue
    neutral: "rgba(211, 211, 211, 0.5)",  // Light Gray
    sad: "rgba(135, 206, 250, 0.4)",      // Soft Sky Blue
    angry: "rgba(255, 99, 71, 0.4)"       // Light Red (Tomato)
};
moodNote.disabled = true;
moodOptions.forEach(mood => {
    mood.addEventListener("click", () => {
        // Remove active class from all moods
        moodOptions.forEach(m => m.classList.remove("active")
      
    );
    moodNote.disabled = false;
        // Add active class to the clicked mood
        mood.classList.add("active");
        const selectedMood = mood.getAttribute("data-mood");
        console.log("Selected Mood:", selectedMood);

        // Change the container's background color based on mood
        moodContainer.style.backgroundColor = moodColors[selectedMood];

        moodOptions.forEach(m => {
            if (m !== mood) {
                m.style.pointerEvents = "none"; // Prevent further clicks
                m.style.opacity = "0.5"; // Reduce visibility (optional)
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const html = document.documentElement; // Target <html> to apply theme

    // 🛠 Load saved theme from localStorage
    if (localStorage.getItem("theme") === "light") {
        html.setAttribute("data-theme", "light");
        darkModeToggle.textContent = "🌙"; // Set moon icon for dark mode
    } else {
        html.setAttribute("data-theme", "dark");
        darkModeToggle.textContent = "☀️"; // Set sun icon for light mode
    }

    // 🌞 Toggle Light & Dark Mode on button click
    darkModeToggle.addEventListener("click", () => {
        if (html.getAttribute("data-theme") === "dark") {
            html.setAttribute("data-theme", "light"); // Switch to light mode
            darkModeToggle.textContent = "🌙"; // Change to moon icon
            localStorage.setItem("theme", "light"); // Save user preference
        } else {
            html.setAttribute("data-theme", "dark"); // Switch to dark mode
            darkModeToggle.textContent = "☀️"; // Change back to sun icon
            localStorage.setItem("theme", "dark"); // Save user preference
        }
    });
});

const save = document.querySelector("#save-btn")
const moodDay  = document.querySelector(".mood-day")
moodNote.addEventListener("input", () => {
  const note = moodNote.value;
  if(note!== ""){
 save.innerHTML = "save";
  }
});

save.addEventListener('click',()=>{
    if(moodNote.value != ""){
        moodDay.innerHTML = `"${moodNote.value}"`;
;        save.innerHTML ="saved";
        moodNote.value ="";
    }
})