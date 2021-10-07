let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let moonCenter = document.getElementById('moon-center');
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');
let text = document.getElementById('text');

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  console.log(moon.style.left);

  bg.style.top = value * 0.5 + 'px';
  moon.style.left = value * 1 + 'px';
  moon.style.top = value * 1 + 'px';
  moonCenter.style.left = value * 1 + 'px';
  moonCenter.style.top = value * 1 + 'px';
  mountain.style.top = -value * 0.15 + 'px';
  road.style.top = value * 0.15 + 'px';
  text.style.top = value * 1 + 'px';
});

console.log(moon.style);
