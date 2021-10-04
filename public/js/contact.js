const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(data.message);
      form.reset();
    })
    .catch((error) => {
      alert(error.message);
    });
});
