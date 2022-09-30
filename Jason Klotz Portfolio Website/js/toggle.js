var btn = document.querySelector('[data-role="btn"]');

function toggleMenu(e) {
    var el = document.querySelector('.hdr')
    var className = 'open-menu';

    if ( !e.target.closest('[data-role="btn"]') ) {
        return
    }

    if ( el.classList.contains(className) ) {
      el.classList.remove(className);
    } else {
        el.classList.add(className);
    }
}

document.addEventListener('click', toggleMenu);
