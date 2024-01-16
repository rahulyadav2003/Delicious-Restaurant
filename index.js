let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const newPosition = -currentIndex * 100 + '%';
  document.querySelector('.slider').style.transform = 'translateX(' + newPosition + ')';
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

 // JavaScript for filtering menu items
        document.getElementById('categoryFilter').addEventListener('change', function() {
            const selectedCategory = this.value;
            const menuItems = document.querySelectorAll('.menuItem');

            menuItems.forEach(item => {
                const itemCategory = item.classList.contains(selectedCategory);

                if (selectedCategory === 'all' || itemCategory) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
