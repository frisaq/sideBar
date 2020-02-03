const navslide = () => {
    const burger = document.querySelector('.burger');
    const sidebar = document.querySelector('.sidebar')

    burger.addEventListener('click', () => {
        sidebar.classList.toggle('showSidebar');

    })
};
navslide();
