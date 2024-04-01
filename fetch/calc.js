fetch('https://084d-2001-1c02-1c19-7b00-c9d0-c468-4ce0-53fe.ngrok-free.app/calc', {
  method: 'POST', // Change the method to POST if you want to send data in the request body
  body: JSON.stringify({ data: 10 }), // Send the number 10 as JSON data in the request body
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
