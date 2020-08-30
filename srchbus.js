// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCXrwru1EaD_Rqa0jElMb0g5xgseEgzoZU",
    authDomain: "my-bus-286122.firebaseapp.com",
    databaseURL: "https://my-bus-286122.firebaseio.com",
    projectId: "my-bus-286122",
    storageBucket: "my-bus-286122.appspot.com",
    messagingSenderId: "463999014833",
    appId: "1:463999014833:web:74234eef5d9b855c1b4f90",
    measurementId: "G-2CVL3DR85P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();

const busList = document.querySelector('#buses');
const searchbtn = document.querySelector('#searchbtn');

function renderHTML(doc) {
    let tr = document.createElement('tr');
    let from = document.createElement('td');
    let to = document.createElement('td');
    let departuretime = document.createElement('td');
    let arrivaltime = document.createElement('td');
    let duration = document.createElement('td');
    let traveller = document.createElement('td');
    let price = document.createElement('td');
    let button = document.createElement('button');

    button.innerHTML = 'Book';

    tr.setAttribute('data-id', doc.id);
    from.textContent = doc.data().from;
    to.textContent = doc.data().to;
    departuretime.textContent = doc.data().departuretime;
    arrivaltime.textContent = doc.data().arrivaltime;
    duration.textContent = doc.data().duration;
    traveller.textContent = doc.data().traveller;
    price.textContent = doc.data().price;
    button.setAttribute('class', 'bookbtn')


    tr.appendChild(from);
    tr.appendChild(to);
    tr.appendChild(departuretime);
    tr.appendChild(arrivaltime);
    tr.appendChild(duration);
    tr.appendChild(traveller);
    tr.appendChild(price);
    tr.appendChild(button);

    busList.appendChild(tr);

}



searchbtn.addEventListener('click', (e) => {
    e.preventDefault();
    $('.home1').hide();
    $('.home2').hide();
    $('.home3').hide();

    db.collection('bus').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderHTML(doc);
        })
    });
})