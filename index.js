const pxInput = document.getElementById('px_input');
const remInput = document.getElementById('rem_input');
const remCopy = document.getElementById('copy-rem-btn');
const pxCopy = document.getElementById('copy-px-btn');
const middle = document.getElementById('middle');

pxInput.addEventListener('change', calculateRem);
remInput.addEventListener('change', calculatePx);

remCopy.addEventListener('click', () => copy(remInput.value, 'rem'));
pxCopy.addEventListener('click', () => copy(pxInput.value, 'px'));

function calculateRem(e) {
  const rem = Number(e.target.value) / 16;
  remInput.value = rem;
}
function calculatePx(e) {
  const px = Number(e.target.value) * 16;
  pxInput.value = px;
}

function copy(value, unit) {
  const p = document.createElement('p');
  if (value) {
    navigator.clipboard.writeText(value + unit);
    p.textContent = 'Copied > ' + value + unit;
  } else p.textContent = 'empty value';

  middle.appendChild(p);
  setTimeout(() => middle.removeChild(p), 2000);
}
