document.querySelectorAll(".accordion-btn").forEach(btn => {
    btn.addEventListener("click", () => {

        document.querySelectorAll(".accordion-content").forEach(c => {
            if (c !== btn.nextElementSibling) c.style.maxHeight = null;
        });

        const content = btn.nextElementSibling;
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
    });
});


