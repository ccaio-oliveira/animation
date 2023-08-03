const btnSideOpen = document.querySelector('#nav-button');
const btnSideClose = document.querySelector('.close-button');
const sideBar = document.querySelector('.sidebar');

btnSideOpen.onclick = () => {
    sideBar.classList.add('open');
}

btnSideClose.onclick = () => {
    sideBar.classList.remove('open');
}