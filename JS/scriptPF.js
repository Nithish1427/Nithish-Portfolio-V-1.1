document.addEventListener("DOMContentLoaded", () => {
    const titleText = "Hi! I'm Nithish";
    const descText = "A Software Developer specializing in modern web technologies.";

    const titleEl = document.getElementById("type-title");
    const descEl = document.getElementById("type-desc");

    let i = 0;

    function typeTitle() {
        if (i < titleText.length) {
            titleEl.textContent += titleText.charAt(i);
            i++;
            setTimeout(typeTitle, 100);
        } else {
            titleEl.classList.add("hide-cursor"); // hide cursor after typing title
            titleEl.classList.add("slide-up"); // move up
            setTimeout(typeDesc, 500); // start description typing
        }
    }

    let j = 0;
    function typeDesc() {
        descEl.style.opacity = 1;
        descEl.classList.add("typing"); // make cursor blink without affecting height
        if (j < descText.length) {
            descEl.textContent += descText.charAt(j);
            j++;
            setTimeout(typeDesc, 60);
        }
    }

    typeTitle();
});

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}