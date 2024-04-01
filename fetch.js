fetch('http://127.0.0.1:3000/hello')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => {
    console.log(data); // Output: Hello!
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
