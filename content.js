const interval = setInterval(() => {
    const header = document.querySelector("._3auIg");
    if(header)
    {
        clearInterval(interval);
        const div = document.createElement("div");
        const img = document.createElement("img");
        const span = document.createElement("span");
        img.setAttribute('src', chrome.runtime.getURL('fast-foward.png') );
        img.setAttribute('data-speed', '1')
        img.setAttribute('id', 'speed-audio')
        div.setAttribute('title', '>> 1x');
        div.classList.add("speedButton");
        span.classList.add("tooltiptext");
        span.setAttribute('id', 'span-speed-audio')

  
        div.addEventListener("click", () =>{

        const audios = document.querySelectorAll("audio");
        const audioSpeeds = document.getElementById("speed-audio");
        let speed = audioSpeeds.getAttribute('data-speed');
        const spanSpeed = document.getElementById("span-speed-audio");

            if(speed == '2'){
                speed = 1; 
            }
            else{
                speed = parseFloat(speed) + 0.25;
            }
            audioSpeeds.setAttribute('data-speed', speed);
            div.setAttribute('title', `Velocidade ${speed}x`);
            spanSpeed.innerHTML = `Velocidade Atualizada para ${speed}x`;

        audios.forEach((audio) => {
            console.log(speed);
            audio.playbackRate = speed;
    });
});
        div.appendChild(img);
        div.appendChild(span);
        header.appendChild(div);
    }
});