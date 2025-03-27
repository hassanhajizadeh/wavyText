const container= document.querySelector('.container');

container.innerHTML = container.innerText.split('')
                        .map((letter,idx)=>`<span style='animation-delay:${idx*25}ms'>${letter}</span>`).join('');

