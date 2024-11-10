// Pastikan semua script dijalankan setelah halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded");

    // Smooth Scroll untuk link di footer (Information & Order)
    const footerLinks = document.querySelectorAll(".footer-section a");

    footerLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const target = link.getAttribute("href");

            // Cek apakah link mengarah ke halaman internal (#hash)
            if (target && target.startsWith("#")) {
                e.preventDefault();
                const section = document.querySelector(target);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    // Dropdown menu interaktif
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector(".dropbtn");
        const content = dropdown.querySelector(".dropdown-content");

        button.addEventListener("click", () => {
            // Toggle visibility saat diklik
            content.style.display = content.style.display === "flex" ? "none" : "flex";
        });

        // Menutup dropdown jika pengguna mengklik di luar menu
        document.addEventListener("click", (e) => {
            if (!dropdown.contains(e.target)) {
                content.style.display = "none";
            }
        });
    });

    // Log tambahan untuk memastikan script bekerja dengan baik
    console.log("Interactive elements initialized.");

});
