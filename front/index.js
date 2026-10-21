const messageEl = document.getElementById('message');

fetch('http://localhost:5000/api/test')
    .then((res) => res.json())
    .then((data) => {
        messageEl.textContent = data.message;
    })
    .catch((err) => {
        messageEl.textContent = 'Erreur : ' + err.message;
    });
