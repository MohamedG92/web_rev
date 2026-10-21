// Sur Vercel le back est sur le même domaine, en local il tourne sur le port 5000
const API_URL = location.hostname.endsWith('vercel.app') ? '' : 'http://localhost:5000';

const messageEl = document.getElementById('message');

fetch(API_URL + '/api/test')
    .then((res) => res.json())
    .then((data) => {
        messageEl.textContent = data.message;
    })
    .catch((err) => {
        messageEl.textContent = 'Erreur : ' + err.message;
    });
