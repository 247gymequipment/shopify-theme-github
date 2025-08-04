// ...existing code...
if (window.innerWidth <= 768) {
  console.log('Mobile view detected. Initializing slider...');
  // Ensure the slider logic is not disabling images
  const sliders = document.querySelectorAll('.collection-slider');
  sliders.forEach(slider => {
    if (!slider.classList.contains('initialized')) {
      initializeSlider(slider); // Replace with your slider initialization logic
      slider.classList.add('initialized');
    }
    // Ensure images inside the slider are visible
    const images = slider.querySelectorAll('img');
    images.forEach(image => {
      image.style.visibility = 'visible';
    });
  });
}
// ...existing code...
