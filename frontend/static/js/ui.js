/* Interactivitate minima UI: comutare tema Dark/Light si formular rezervare */
(function () {
  const savedTheme = localStorage.getItem("rrm-theme") || "dark";
  document.documentElement.dataset.theme = savedTheme;

  document.addEventListener("DOMContentLoaded", function () {
    const themeBtn = document.getElementById("theme-btn");
    if (themeBtn) {
      themeBtn.textContent = savedTheme === "dark" ? "🌙" : "☀️";
      themeBtn.addEventListener("click", function () {
        const isLight = document.documentElement.dataset.theme === "light";
        const next = isLight ? "dark" : "light";
        document.documentElement.dataset.theme = next;
        localStorage.setItem("rrm-theme", next);
        themeBtn.textContent = next === "dark" ? "🌙" : "☀️";
      });
    }

    const bookingType = document.getElementById("booking_type");
    const hoursGroup = document.getElementById("hours-group");
    if (bookingType && hoursGroup) {
      const toggleHours = function () {
        hoursGroup.style.display = bookingType.value === "zi" ? "none" : "flex";
      };
      bookingType.addEventListener("change", toggleHours);
      toggleHours();
    }
  });
})();