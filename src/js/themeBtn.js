const btnTheme = document.querySelector("[data-theme='btn']");
const elementTheme = document.querySelector("[data-theme='element']");

window.addEventListener('DOMContentLoaded', () => {

    console.log(window.matchMedia('(prefers-color-scheme: dark)'))
  const storedTheme = localStorage.getItem('theme');
  
  if (storedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

btnTheme.addEventListener('click', function(){
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
});



