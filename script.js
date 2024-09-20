//HTML variable elements
const toggleSwitch = document.querySelector('input[type="checkbox"]')
const currentTheme = window.localStorage.getItem("theme")
const navBar = document.querySelector("#nav")
const toggleIcon = document.querySelector("#toggle-icon")
const imageContainerList = document.querySelectorAll(".image-container")
const textBox = document.querySelector(".text-box")

// Check current theme
if (currentTheme) {
	document.documentElement.setAttribute("data-theme", currentTheme)

	if (currentTheme === "dark") {
		toggleSwitch.checked = true
		themeToggle(true)
	} else {
		themeToggle(false)
	}
} else {
	document.documentElement.setAttribute("data-theme", "light")
}

// Toggle Theme Modes
function themeToggle(isDark) {
	textBox.style.backgroundColor = isDark ? "rgb(255 255 255/50%)" : "rgb(0 0 0 / 50%)"
	imageContainerList.forEach((imageContainer) => {
		imageContainer.style.boxShadow = isDark
			? "0 5px 20px 1px rgba(3, 218, 197, 1)"
			: "0 5px 20px 1px rgba(0, 0, 0, 0.5)"
	})
	toggleIcon.children[0].textContent = isDark ? "Light Mode" : "Dark Mode"
	toggleIcon.children[1].classList.replace(
		isDark ? "fa-moon" : "fa-sun",
		isDark ? "fa-sun" : "fa-moon"
	)
}

// Event listener
toggleSwitch.addEventListener("change", function () {
	if (this.checked) {
		document.documentElement.setAttribute("data-theme", "dark")
		window.localStorage.setItem("theme", "dark")
		themeToggle(true)
	} else {
		document.documentElement.setAttribute("data-theme", "light")
		window.localStorage.setItem("theme", "light")
		themeToggle(false)
	}
})
