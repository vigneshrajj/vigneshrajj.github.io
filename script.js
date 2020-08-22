document.getElementById("game-btn").addEventListener("click", hidegames);
function hidegames(){
    x = document.querySelectorAll(".gallery-item-1,.gallery-item-3");
    for (var i = 0; i < x.length; i++) {
        var currentEl = x[i];
        currentEl.style.display = 'none';
    }
    y = document.querySelectorAll(".gallery-item-2");
    for (var i = 0; i < y.length; i++) {
        var currentEl2 = y[i];
        currentEl2.style.display = 'inline';
    }
}

document.getElementById("web-btn").addEventListener("click", hideweb);
function hideweb(){
    x = document.querySelectorAll(".gallery-item-2,.gallery-item-3");
    for (var i = 0; i < x.length; i++) {
        var currentEl = x[i];
        currentEl.style.display = 'none';
    }
    y = document.querySelectorAll(".gallery-item-1");
    for (var i = 0; i < y.length; i++) {
        var currentEl2 = y[i];
        currentEl2.style.display = 'inline';
    }
}

document.getElementById("other-btn").addEventListener("click", hideother);
function hideother(){
    x = document.querySelectorAll(".gallery-item-1,.gallery-item-2");
    for (var i = 0; i < x.length; i++) {
        var currentEl = x[i];
        currentEl.style.display = 'none';
    }
    y = document.querySelectorAll(".gallery-item-3");
    for (var i = 0; i < y.length; i++) {
        var currentEl2 = y[i];
        currentEl2.style.display = 'inline';
    }
}

document.getElementById("all-btn").addEventListener("click", hideall);
function hideall(){
    x = document.querySelectorAll(".gallery-item-1,.gallery-item-2,.gallery-item-3");
    for (var i = 0; i < x.length; i++) {
        var currentEl = x[i];
        currentEl.style.display = 'inline';
    }
}