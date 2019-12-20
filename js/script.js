'use strict';


{
    setInterval(function(){
        let t = new Date();
        let h = t.getHours();
        let m = t.getMinutes();
        let s = t.getSeconds();
        let tPosition = 'AM';
        if (h > 12) {
            h = h - 12;
            tPosition = ' PM';
        };
        let hour = document.querySelector('#hour');
        hour.innerHTML = h + tPosition;
        let minutes = document.querySelector('#minutes');
        minutes.innerHTML = m;
        let seconds = document.querySelector('#seconds');
        seconds.innerHTML = s;
    }, 900)
}