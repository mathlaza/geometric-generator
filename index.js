const btn = document.getElementById('btn');

const shapes = [
  'quad-circle-1',
  'quad-circle-2',
  'quad-circle-3',
  'quad-circle-4',
  'triangle-1',
  'triangle-2',
  'triangle-3',
  'triangle-4',
  'circle'
];

const colors = ['#01d2f2', '#ffc700', '#fe9f12', '#06d0c7'];
const boxes = document.querySelectorAll('.container div');

const generatePattern = () => {
  boxes.forEach((box) => {
    box.className = '';
    const i = Math.floor(Math.random() * shapes.length);
    const j = Math.floor(Math.random() * colors.length);
    box.className = shapes[i]; 
    box.style.backgroundColor = colors[j];
  });
};

btn.addEventListener('click', generatePattern);
window.addEventListener('load', generatePattern);
