const container = document.querySelector('.container');

function animateText() {
    container.innerHTML = container.innerText.split('')
        .map((letter, idx) => `<span style='animation-delay:${idx * 25}ms'>${letter}</span>`)
        .join('');

    const spans = container.querySelectorAll('span');
    spans[spans.length - 1].addEventListener('animationend', animateText, { once: true });
}

animateText();