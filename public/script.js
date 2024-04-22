document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('medicine-form');
  const medicineList = document.getElementById('medicines');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById('medicine-name').value,
      repetitiveness: document.getElementById('repetitiveness').value,
      repetitionCount: document.getElementById('repetition-count').value
    };

    console.log('Form Data:', formData);

    const response = await fetch('/add-medicine', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      const medicine = await response.json();
      console.log('Medicine added:', medicine);
      displayMedicine(medicine);
    } else {
      console.error('Failed to add medicine');
    }
  });

  function displayMedicine(medicine) {
    const li = document.createElement('li');
    li.textContent = `Name: ${medicine.name}, Repetitiveness: ${medicine.repetitiveness}, Repetition Count: ${medicine.repetitionCount}`;
    medicineList.appendChild(li);
  }
});
