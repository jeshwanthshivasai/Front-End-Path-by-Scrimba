/**
Challenge: 

- Add some styling! Be creative, play with layout a bit
  (Spoiler: I'm going to use a single-column flexbox layout)
  add some color, grab a font from Google fonts - whatever
  you'd like!
*/

const Get = document.getElementById('get-btn')

Get.addEventListener('click', function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
        console.log(data)
        document.getElementById("activity").textContent = data.activity
        document.getElementById("container").classList.toggle('change')
    })
})



// fetch("https://apis.scrimba.com/bored/api/activity")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         document.getElementById("activity-name").textContent = data.activity
//     })