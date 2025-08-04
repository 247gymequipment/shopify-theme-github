document.addEventListener('DOMContentLoaded', () => {
  const quantityInputs = document.querySelectorAll('.quantity-input');

  quantityInputs.forEach((inputWrapper) => {
    const input = inputWrapper.querySelector('input[type="number"]');
    const minusButton = inputWrapper.querySelector('.quantity-minus');
    const plusButton = inputWrapper.querySelector('.quantity-plus');

    const min = parseInt(input.getAttribute('min')) || 1;
    const max = parseInt(input.getAttribute('max')) || Infinity;
    const step = parseInt(input.getAttribute('step')) || 1;

    const updateButtonsState = () => {
      minusButton.disabled = input.value <= min;
      plusButton.disabled = input.value >= max;
    };

    minusButton.addEventListener('click', () => {
      const newValue = Math.max(min, parseInt(input.value) - step);
      input.value = newValue;
      input.dispatchEvent(new Event('change'));
      updateButtonsState();
    });

    plusButton.addEventListener('click', () => {
      const newValue = Math.min(max, parseInt(input.value) + step);
      input.value = newValue;
      input.dispatchEvent(new Event('change'));
      updateButtonsState();
    });

    input.addEventListener('input', () => {
      let value = parseInt(input.value);
      if (isNaN(value)) value = min;
      value = Math.max(min, Math.min(max, value));
      input.value = value;
      updateButtonsState();
    });

    input.addEventListener('change', () => {
      let value = parseInt(input.value);
      if (isNaN(value)) value = min;
      value = Math.max(min, Math.min(max, value));
      input.value = value;
      updateButtonsState();
    });

    // Initialize button states
    updateButtonsState();
  });
});