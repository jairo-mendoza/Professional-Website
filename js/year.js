// Keep the footer copyright year current so i don't have to do it on New Years
(function () {
    function setYear() {
        var el = document.getElementById("year");
        if (el) {
            el.textContent = new Date().getFullYear();
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", setYear);
    } else {
        setYear();
    }
})();
