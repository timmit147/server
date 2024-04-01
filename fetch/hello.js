fetch('http://127.0.0.1:3000/hello', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  console.log("hello"); // This line replaces the data handling
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});
