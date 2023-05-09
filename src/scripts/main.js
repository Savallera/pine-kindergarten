import "../blocks/header/header.js";
import "../blocks/feedback/feedback.js";

// Появление секций при загрузке
function onEntry(entry) {
    entry.forEach((change) => {
        if (change.isIntersecting) {
            change.target.classList.add("section_showed");
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".section");
for (let elm of elements) {
    observer.observe(elm);
}
