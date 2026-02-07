const themeToggleBtn = document.getElementById("theme-toggle");
const mobileThemeToggleBtn = document.getElementById("mobile-theme-toggle");
const lightIcon = document.getElementById("theme-toggle-light-icon");
const darkIcon = document.getElementById("theme-toggle-dark-icon");
const mobileDarkIcon = document.getElementById("mobile-theme-toggle-dark-icon");
const mobileLightIcon = document.getElementById(
  "mobile-theme-toggle-light-icon"
);

const btn = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");

const themeCheck = () => {
  if (
    localStorage.getItem("color-theme") === "light" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: light)").matches)
  ) {
    document.documentElement.classList.add("light");
    updateIcons("light");
  } else {
    document.documentElement.classList.remove("light");
    updateIcons("dark");
  }
};

const updateIcons = (theme) => {
  if (theme === "dark") {
    lightIcon.classList.remove("hidden");
    darkIcon.classList.add("hidden");

    mobileLightIcon.classList.remove("hidden");
    mobileDarkIcon.classList.add("hidden");
  } else {
    lightIcon.classList.add("hidden");
    darkIcon.classList.remove("hidden");

    mobileLightIcon.classList.add("hidden");
    mobileDarkIcon.classList.remove("hidden");
  }
};

const toggleTheme = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
    updateIcons("light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
    updateIcons("dark");
  }
};

themeToggleBtn.addEventListener("click", toggleTheme);
if (mobileThemeToggleBtn) {
  mobileThemeToggleBtn.addEventListener("click", toggleTheme);
}

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

themeCheck();
