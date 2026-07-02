// Theme toggle. The initial theme is applied in <head> before paint (no FOUC);
// this wires the nav button to flip it and persist the choice.
(function () {
    var root = document.documentElement;

    function currentTheme() {
        return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    }

    function applyTheme(theme) {
        root.setAttribute("data-theme", theme);
        try {
            localStorage.setItem("theme", theme);
        } catch (e) {}

        var btn = document.querySelector("[data-theme-toggle]");
        if (btn) {
            btn.textContent = theme === "dark" ? "☀︎" : "☾︎"; // ☀ / ☾
            btn.setAttribute(
                "aria-label",
                theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );
        }
    }

    function init() {
        // Sync the button glyph to whatever the head snippet already applied.
        applyTheme(currentTheme());

        var btn = document.querySelector("[data-theme-toggle]");
        if (btn) {
            btn.addEventListener("click", function () {
                applyTheme(currentTheme() === "dark" ? "light" : "dark");
            });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
