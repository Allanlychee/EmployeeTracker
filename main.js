console.log(moment('12/13/1901', 'DD/MM/YYYY').format('ddd MMM, DD, YYYY'))

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCJ-ReRnQoo-srdudik-rfey-HSrqLXK3U",
  authDomain: "whatever-first.firebaseapp.com",
  databaseURL: "https://whatever-first.firebaseio.com",
  projectId: "whatever-first",
  storageBucket: "whatever-first.appspot.com",
  messagingSenderId: "110419074122"
}
firebase.initializeApp(config)

var database = firebase.database()

var users = database.ref('/users')

$('#submitBTN').on('click', function () {
  var name = $('#name').val().trim()
  var email = $('#email').val().trim()
  var number = parseInt($('#number').val().trim())

  users.push({
    name: name,
    email: email,
    number: number
  })
})

users.orderByChild('number').limitToLast(1).on('child_added', function (snap) {
  console.log(snap.val())
})