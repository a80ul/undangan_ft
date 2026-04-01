function phaseOneOpen() {
    const envelope = document.getElementById('envelope');
    const music = document.getElementById('backsound');

    envelope.classList.add('is-open');
    
    if (music) {
        music.play().catch(() => console.log("Audio interaction required"));
    }
}

function phaseTwoPopup() {
    const popup = document.getElementById('popupOverlay');
    popup.classList.add('show');
}

function closeAll() {
    const popup = document.getElementById('popupOverlay');
    const envelope = document.getElementById('envelope');

    popup.classList.remove('show');


    setTimeout(() => {
        envelope.classList.remove('is-open');
    }, 300); 
}

function closeAll() {
    const popup = document.getElementById('popupOverlay');
    const envelope = document.getElementById('envelope');
    const logo = document.getElementById('mainLogo');

    popup.classList.remove('show');

    setTimeout(() => {
        envelope.classList.remove('is-open');

        setTimeout(() => {
            logo.style.opacity = "1";
            logo.style.visibility = "visible";
        }, 500); 
        
    }, 300);
}

function phaseOneOpen() {
    const envelope = document.getElementById('envelope');
    const music = document.getElementById('backsound');

    envelope.classList.add('is-open');

    if (music) {
        music.play().catch(() => console.log("Musik butuh interaksi user"));
    }
}

function phaseTwoPopup() {
    const popup = document.getElementById('popupOverlay');
    popup.classList.add('show');
}

function closeAll() {
    const popup = document.getElementById('popupOverlay');
    const envelope = document.getElementById('envelope');
    popup.classList.remove('show');


    setTimeout(() => {
        envelope.classList.remove('is-open');
    }, 400);
}

function closeAll() {
    const popup = document.getElementById('popupOverlay');
    const envelope = document.getElementById('envelope');


    popup.classList.remove('show');

    setTimeout(() => {
        envelope.classList.remove('is-open');
    }, 400);
}