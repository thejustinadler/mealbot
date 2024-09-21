fetch('https://us-central1-genial-cab-436301-n4.cloudfunctions.net/mealbot')
  .then(response => response.json())
  .then(data => {
    document.getElementById('jsonData').textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => console.error('Error fetching JSON:', error));
