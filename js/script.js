console.log('yessss');//tesing script.js





//testing jquert function
$(document).ready(function(){

var myKey = JSON.parse(apiKey);
console.log(myKey[0]);
myKey = myKey[0].key;
console.log(myKey);

//reading users choice
document.getElementById('submit').addEventListener('click', function(){
  endPoint = document.getElementById('endpoints').value;
  size = document.getElementById('sizes').value;
  console.log(endPoint,size);
  displayData(endPoint,size);
});

function displayData(ep,si){
  console.log(ep, si);


  $.ajax({
    url:`https://api.unsplash.com/${ep}/?client_id=${myKey}`,
    type:'GET',
    data:'json',
    success:function(data){
      console.log(data);
      if (si === 'thumb') {
        console.log(console.log(data[0].cover_photo.urls.thumb);
      } else if (true) {

      }

      );
      // console.log(data.urls.thumb);
      // document.getElementById('unsplash').innerHTML +=
      // '<img src="' + data.urls.regular + '" alt="unsplash"></img>';
    },
    error:function(){
      console.log('error');
    }
  });//ajax end
};
  });//document.ready ending















// //javascript data - array of objects
// var jsData = [
//   {
//     name : 'Peter',
//     age : 50
//   },
//   {
//     name : 'David',
//     age : 23
//   },
//   {
//     name : 'Joe',
//     age : 10
//   }
// ]
//
// console.log(jsData);
// //displaying JS objects in the browser
//
//
//
//
//
// var i;
// for (i = 0; i < jsData.length; i++) {
//   document.getElementById('result').innerHTML +=
//     '<h3 class="bg-warning">' + jsData[i].name + ' is ' + jsData[i].age + ' years old</h3>'
// };
//
//
//
// //json data
// var jsonData = [
//   {
//     "name" : "Jim",
//     "age" : 23
//   },
//   {
//     "name" : "Mark",
//     "age" : 99
//   },
//   {
//     "name" : "Dave",
//     "age" : 1
//   }
// ];
//
// console.log(jsonData);
// //displaying JSON objects in browser
// var j;
// for (j = 0; j < jsonData.length; j++) {
//   document.getElementById('result').innerHTML +=
//     '<h3 class="bg-success">' + jsonData[j].name + ' is ' + jsonData[j].age + ' years old</h3>'
// };
//
// //retrieving json data from an external file
// var person = JSON.parse(myData);
// console.log(person);
//
//
// var k;
// for (k = 0; k < person.length; k++) {
//   document.getElementById('result').innerHTML +=
//     '<h3 class="bg-danger">' + person[k].name + ' is ' + person[k].age + ' years old</h3>'
// };

//ajax method
// $.ajax({
//   url:'https://my.api.mockaroo.com/plant.json?key=94ee26f0',
//   type:'GET',
//   data:'json',
//   success:function(data){
//     console.log(data);
//     var i;
//     for (i = 0; i < data.length; i++) {
//       document.getElementById('result').innerHTML +=
//         '<div class="card">' +
//           '<img class="card-img-top" src="' + data[i].image + '" alt="...">' +
//           '<div class="card-body">' +
//             '<h5 class="card-title">' + data[i].plant_name + '</h5>' +
//             '<p class="card-text">' + data[i].scientific_name + '</p>' +
//             '<p class="card-text">' + data[i].plant_family + '</p>' +
//           '</div>' +
//           '<div class="card-footer">' +
//           '<small class="text-muted">PLANTS</small>' +
//       '</div>'
//     }
//
//   },//success end
//
//
// });//ajax end
