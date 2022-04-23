const topMenu = document.getElementById('hd-top-menu');
const toggleTopMenuIcon = document.getElementById('hd-toggle-top-menu-icon');

document.addEventListener('click', (e) => {
    if(toggleTopMenuIcon.contains(e.target)) {
        topMenu.classList.toggle('hidden');
        topMenu.classList.toggle('hd-topmenu-expanded');
    } else {
        if(topMenu.classList.contains('hd-topmenu-expanded')) {
            topMenu.classList.remove('hd-topmenu-expanded');
            topMenu.classList.add('hidden');
        }
    }
})