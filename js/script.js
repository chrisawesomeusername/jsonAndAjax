console.log('yessss');//tesing script.js





//testing jquert function
$(document).ready(function(){
  $('body').click(function(){
  $(this).css('color','white');
});


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

$.ajax({
  url:'https://api.unsplash.com/photos/random/?client_id=5df13735da95f53f2a31b3d098f4fd12c0dceba5f18fd2b145692b5827d200a3',
  type:'GET',
  data:'json',
  success:function(data){
    console.log(data);
    console.log(data.urls.thumb);
    document.getElementById('unsplash').innerHTML +=
    '<img>' + data.urls.thumb + '</img>';
  }



})


});//document.ready ending
