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
  });
}
// ...existing code...
