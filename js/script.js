const toggleBtn = document.querySelector('.toggle-button');
const links = document.querySelector('nav')

toggleBtn.addEventListener('click', toggle)

function toggle(){
  links.classList.toggle('active')
  //console.log(toggleBtn.innerHTML)

  if(toggleBtn.innerHTML === `<img src="images/icon-hamburger.svg" alt="">`)
  {
    toggleBtn.innerHTML = `<img src="images/icon-close.svg" alt="">`
  }
  else
  {
    toggleBtn.innerHTML = `<img src="images/icon-hamburger.svg" alt="">`
  }
}
