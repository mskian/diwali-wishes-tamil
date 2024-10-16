import slugify from 'slugify';

let url = new URL(window.location);
let searchParams = new URLSearchParams(url.search);
const getInput = searchParams.get('name') || 'Your Name';
const random_id = Math.floor(1000 + Math.random() * 9000);
const basename = 'happy-diwali-wishes-' + random_id;
const seo_title = slugify(getInput, {
    replacement: '-',
    remove: /[$*_+~.()'"!\-:@]+/g,
    lower: false,
    strict: false,
});
const userInput =
    slugify(getInput, {
        replacement: ' ',
        remove: /[*+~.()'"!:@]/g,
        lower: false,
        strict: false,
    }) || 'Your Name';
const pageCatch = encodeURIComponent(seo_title).replace(/%20/g, '-');
if (getInput == 'Your Name') {
    if (window.history.replaceState) {
        window.history.replaceState(null, null, '/');
    }
} else {
    if (window.history.replaceState) {
        window.history.replaceState(null, null, '/?name=' + pageCatch);
    }
}
const word = userInput.replace(/[-]/g, ' ');
document
    .getElementsByTagName('meta')
    .namedItem('description')
    .setAttribute(
        'content',
        `அனைத்து விதமான இன்பங்களும் உங்கள் குடும்பத்திற்கு வந்தடைய இனிய தீபாவளி நல்வாழ்த்துக்கள் - ${word} - Diwali Wishes in Tamil.`
    );
document.title = `${word} Sending you the Happy தீபாவளி Greeting Wishes in Tamil`;

document
    .querySelectorAll('meta[property=og\\:title]')[0]
    .setAttribute(
        'content',
        `${word} Sending you the Happy தீபாவளி Greeting Wishes in Tamil`
    );
document
    .querySelectorAll('meta[property=og\\:description]')[0]
    .setAttribute(
        'content',
        `அனைத்து விதமான இன்பங்களும் உங்கள் குடும்பத்திற்கு வந்தடைய இனிய தீபாவளி நல்வாழ்த்துக்கள் - ${word} - Diwali Wishes in Tamil.`
    );
document
    .querySelectorAll('meta[property=og\\:image]')[0]
    .setAttribute('content', `https://img.sanweb.info/dt/dt?name=${pageCatch}`);
document
    .querySelectorAll('meta[property=og\\:image\\:alt]')[0]
    .setAttribute('content', `${word}`);

const link = document.querySelector('link[rel="canonical"]')
    ? document.querySelector('link[rel="canonical"]')
    : document.createElement('link');
const pathname = typeof window !== 'undefined' ? window.location.href : '';
link.setAttribute('rel', 'canonical');
link.setAttribute('href', pathname);
document.head.appendChild(link);

const ogurl = document.createElement('meta');
ogurl.setAttribute('property', 'og:url');
ogurl.content = pathname;
document.getElementsByTagName('head')[0].appendChild(ogurl);

window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-16C4S2MMTJ', {
    page_title: `${word} Sending you the Happy தீபாவளி Greeting Wishes in Tamil`,
    page_location: `${pathname}`,
});
window.addEventListener('DOMContentLoaded', event => {
    const clipboardBtn = document.getElementById('clipboardButton');
    if (clipboardBtn) {
        clipboardBtn.addEventListener('click', function () {
            const text = `https://wishes.tamilwords.net/?name=${pageCatch}`;
            navigator.clipboard.writeText(text);
            Toastify({
                text: 'URL Copied',
                duration: 2500,
                close: true,
                gravity: 'top',
                position: 'right',
                style: {
                    background: '#B33771',
                },
            }).showToast();
        });
    }
});
const LoadmyFont = new FontFace(
    'Anek Tamil',
    'url(https://fonts.gstatic.com/s/anektamil/v4/XLYJIZH2bYJHGYtPGSbUB8JKTp-_9n55SsLHW0WZez6TjtkDu3uNnCB6qw.ttf)'
);
LoadmyFont.load().then(function (font) {
    document.fonts.add(font);

    const imageObj = new Image();
    const canvas = document.getElementById('Canvas');
    const context = canvas.getContext('2d');
    context.font = '600 26pt Anek Tamil';
    imageObj.onload = function () {
        context.textAlign = 'center';
        context.drawImage(imageObj, 0, 0, 1080, 1080);
        context.fillStyle = '#152039';
        context.fillText(word, 536, 360);
        let image = canvas.toDataURL('image/png', 0.5);
        const sharetext = encodeURIComponent(
            word +
                ' Sending You a Happy Diwali Wishes For You ' +
                window.location.href
        );
        const Whatsappshare = 'https://api.whatsapp.com/send?text=' + sharetext;
        const Telegramshare =
            'https://telegram.me/share/url?url=' +
            window.location.href +
            '&text=' +
            sharetext;
        if (word == 'Your Name') {
            document.getElementById('result').innerHTML = `
             <br><div class="flex flex-wrap mt-4 mb-8 items-center justify-center" style="overflow: auto;" role="group"></div>`;
        } else {
            document.getElementById('result').innerHTML = `
             <br><div class="flex items-center justify-center"><a class="inline-block px-10 py-3 rounded text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase" href="${image}" download="${basename}">⬇ Download image</a></div>`;
        }
    };

    imageObj.setAttribute('crossOrigin', 'anonymous');
    imageObj.src = './diwali-2024.png';
});
