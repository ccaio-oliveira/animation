// document.addEventListener("DOMContentLoaded", function () {
//     const loader = document.querySelector('.loading-screen');
//     const progressBar = document.getElementById("progress");
//     const progressText = document.getElementById("progressText");
//     let progress = 0;

//     const interval = setInterval(function () {
//         progress += 1;
//         progressBar.style.width = progress + "%";
//         progressText.innerText = progress + "%";

//         if (progress >= 100) {
//             clearInterval(interval);
//             setTimeout(function () {
//                 loader.style.display = 'none';
//             }, 500);
//         }
//     }, 50);
// });

const loader = document.querySelector('.loading-screen');
const progressBar = document.getElementById("progress");
const progressText = document.getElementById("progressText");
let progress = 0;

const interval = setInterval(function () {
    progress += 1;
    progressBar.style.width = progress + "%";
    progressText.innerText = progress + "%";

    if (progress >= 100) {
        clearInterval(interval);
        setTimeout(function () {
            loader.style.display = 'none';
        }, 500);
    }
}, 50);