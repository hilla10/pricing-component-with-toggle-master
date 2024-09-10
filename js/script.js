const toggle = document.querySelector('#toggle');
const basic = document.querySelector('.basic');
const pro = document.querySelector('.pro');
const master = document.querySelector('.master');

const updateValue = () => {
  toggle.classList.toggle('checked');
  if (toggle.classList.contains('checked')) {
    basic.innerHTML = '&dollar;19.99';
    pro.innerHTML = '&dollar;24.99';
    master.innerHTML = '&dollar;39.99';
  } else {
       basic.innerHTML = '&dollar;199.99';
       pro.innerHTML = '&dollar;249.99';
       master.innerHTML = '&dollar;399.99';
  }
};

toggle.addEventListener('click', updateValue);
