fetch('http://127.0.0.1:3000/email', {
  method: 'POST', // Change the method to POST if you want to send data in the request body
  body: JSON.stringify({ email: 'timmeeuwsen@hotmail.nl' }), // Send the number 10 as JSON data in the request body
  headers: {
    'Content-Type': 'application/json'
  }
})
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
