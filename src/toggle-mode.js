let darkMode = true
const buttonToggle = document.getElementById('toggle-mode') 

buttonToggle.addEventListener('click', (event) =>{ 
  document.documentElement.classList.toggle('light') 
  const mode = darkMode ? 'light' : "dark" 
  
  event.currentTarget.querySelector('span').textContet = `${mode} mode ativado!`

  darkMode = !darkMode 
})