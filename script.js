document.querySelector('.btnLogin-popup').onclick = () => {
    document.querySelector('.wrapper').classList.toggle('active');
};

document.querySelector('.icon-close').onclick = () => {
    document.querySelector('.wrapper').classList.remove('active');
};
