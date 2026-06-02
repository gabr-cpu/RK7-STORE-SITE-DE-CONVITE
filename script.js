const imagens = [

"https://images-ext-1.discordapp.net/external/3NR3U5Fj4946pDttzOGTj8StL9oVh1yMaW3ad4ZYCco/https/i.postimg.cc/ZRj6nYfS/Chat-GPT-Image-24-de-mai-de-2026-01-42-56.png?format=webp&quality=lossless&width=1310&height=439",

"https://images-ext-1.discordapp.net/external/DBX-7kwWA04OFb92672PD9XzQ-hy48NfZBbYTHwJIkE/https/i.postimg.cc/g25RLBqN/Chat-GPT-Image-24-de-mai-de-2026-01-29-15.png?format=webp&quality=lossless&width=440&height=147",

"https://images-ext-1.discordapp.net/external/Kp3T-Ik_5LN2OfrbvWiqsUNQBdocuFXdX6CB8lHaVDs/https/i.postimg.cc/xC9K9NPq/Chat-GPT-Image-24-de-mai-de-2026-01-44-11.png?format=webp&quality=lossless&width=440&height=146",

"https://images-ext-1.discordapp.net/external/lm3l9_vWPNimWj_QIPugVkR0JXzkpyokxUm23tkfqr0/https/i.postimg.cc/vmrwdNQs/c63bf75db7f2208fa4f5dc7f3f9bf7c6.jpg?format=webp&width=780&height=439",

"https://images-ext-1.discordapp.net/external/ESVjM4RhjElRuV1k3mxJGl43ZH5bgcpUeMz4AbgGU44/https/i.postimg.cc/C5fZh0dc/3edbb5de02c55c27177be8813dd82598.jpg?format=webp&width=780&height=439",

"https://images-ext-1.discordapp.net/external/uJEvF8e-qeoV4enbW_jY_fo7LQCWx6OANrz61qZeYrE/https/i.postimg.cc/4xGdn4N1/image-2.webp?format=webp&width=514&height=334"

];

const slider = document.getElementById("slider");

let atual = 0;

slider.src = imagens[0];

const intervalo = setInterval(() => {

    atual++;

    if (atual >= imagens.length) {

        clearInterval(intervalo);

        const final = document.querySelector(".final");

        final.style.display = "block";

        final.scrollIntoView({
            behavior: "smooth"
        });

        return;
    }

    slider.style.opacity = "0";

    setTimeout(() => {

        slider.src = imagens[atual];
        slider.style.opacity = "1";

    }, 500);

}, 2000);
