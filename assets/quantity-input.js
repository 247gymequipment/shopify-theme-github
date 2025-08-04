document.addEventListener('DOMContentLoaded', () => {
  const quantityInputs = document.querySelectorAll('.quantity-input');

  quantityInputs.forEach(inputWrapper => {
    const input = inputWrapper.querySelector('input');
    const incrementButton = document.createElement('button');
    const decrementButton = document.createElement('button');

    // Add buttons
    incrementButton.textContent = '+';
    decrementButton.textContent = '-';
    incrementButton.classList.add('quantity-increment');
    decrementButton.classList.add('quantity-decrement');
    inputWrapper.appendChild(decrementButton);
    inputWrapper.appendChild(incrementButton);

    // Set default min/max if not provided
    const min = parseInt(input.getAttribute('min')) || 1;
    const max = parseInt(input.getAttribute('max')) || Infinity;

    // Update value and trigger callback
    const updateValue = (newValue) => {
      const clampedValue = Math.min(Math.max(newValue, min), max);
      input.value = clampedValue;
      input.dispatchEvent(new Event('change')); // Trigger change event
    };

    // Button click handlers
    incrementButton.addEventListener('click', () => {
      updateValue(parseInt(input.value || 0) + 1);
    });

    decrementButton.addEventListener('click', () => {
      updateValue(parseInt(input.value || 0) - 1);
    });

    // Input validation
    input.addEventListener('input', () => {
      const value = parseInt(input.value);
      if (isNaN(value)) {
        input.value = min; // Reset to min if invalid
      } else {
        updateValue(value);
      }
    });
  });
});