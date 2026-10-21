// En local, le back tourne sur le port 5000 (PORT du .env) ; sur Vercel, front et back partagent le même domaine
const isLocal = location.protocol === 'file:' || ['localhost', '127.0.0.1'].includes(location.hostname);
const API_URL = isLocal ? 'http://localhost:5000' : '';

const messageEl = document.getElementById('message');

fetch(API_URL + '/api/test')
    .then((res) => res.json())
    .then((data) => {
        messageEl.textContent = data.message;
    })
    .catch((err) => {
        messageEl.textContent = 'Erreur : ' + err.message;
    });
