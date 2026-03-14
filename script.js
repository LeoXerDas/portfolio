document.querySelectorAll('.dropdown > a').forEach(menu => {
  menu.addEventListener('click', function(e) {
    e.preventDefault();
    const dropdown = this.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
});
