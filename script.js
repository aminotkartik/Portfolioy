const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.header nav');
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('open', !expanded);
  menuButton.textContent = expanded ? '☰' : '×';
});
navigation.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  });
});
document.querySelector('#print-profile').addEventListener('click', () => window.print());
