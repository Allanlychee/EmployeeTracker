
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
    var role = $('#role').val().trim()
    var startDate = $('#startDate').val()
    var monthsWorked = $('#monthsWorked')
  var monthlyRate = $('#monthlyRate')
  var totalBilled = $('#totalBilled')
  
  users.push({
      name: name,
    role : role,
    Start_Date : startDate,
    Months_Worked : monthsWorked,
    Monthly_Rate : monthlyRate,
    Total_Billed : totalBilled

})


})

users.orderByChild('number').on('child_added', function (snap) {
    console.log(snap.val())
})

console.log(moment(startDate, 'DD/MM/YYYY').format('MM/DD/YY'))