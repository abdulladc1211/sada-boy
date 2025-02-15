// Hide Login button by default
document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");
    loginButton.style.display = "none"; // Hide the button

    // Listen for the secret key combination (Ctrl + m)
    document.addEventListener("keydown", function (event) {
        if (event.ctrlKey && event.key === "m") { // Ctrl + m
            loginButton.style.display = "block"; // Show the button
        }
    });

    // Load saved drafts
    document.getElementById("title").value = localStorage.getItem("draftTitle") || "";
    document.getElementById("content").value = localStorage.getItem("draftContent") || "";
});

// Set your password here
let correctPassword = "khan24113896588698"; // Change this to your own password

// Login function
function login() {
    let inputPassword = prompt("Enter Password:");
    if (inputPassword === correctPassword) {
        document.getElementById("upload-section").style.display = "block"; // Show upload section
        alert("Login Successful!");
    } else {
        alert("Incorrect Password!");
    }
}

// Logout function
function logout() {
    document.getElementById("upload-section").style.display = "none"; // Hide upload section
    alert("You are logged out!");
}

// Upload function
function uploadContent() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if (title.trim() === "" || content.trim() === "") {
        alert("Please enter both a title and content.");
        return;
    }

    // Create a new blog post
    let newPost = document.createElement("section");
    newPost.innerHTML = `<h3>${title}</h3><p>${content}</p>
                         <button onclick="deletePost(this)">Delete</button>`;
    
    // Append to the blog section
    document.getElementById("blog-section").appendChild(newPost);

    // Clear the input fields
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    alert("Content uploaded successfully!");
}

// Character Counter
function updateCounter() {
    let content = document.getElementById("content").value;
    document.getElementById("char-count").textContent = `${content.length}/500 characters`;
}

// Delete Function
function deletePost(button) {
    button.parentElement.remove();
}

// Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Auto-save Drafts
document.getElementById("title").addEventListener("input", function () {
    localStorage.setItem("draftTitle", this.value);
});

document.getElementById("content").addEventListener("input", function () {
    localStorage.setItem("draftContent", this.value);
});
