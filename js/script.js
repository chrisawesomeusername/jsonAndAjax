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
$.ajax({
  url:'js/MOCK_DATA.json',
  type:'GET',
  data:'json',
  success:function(data){
    console.log(data);
    var i;
    for (i = 0; i < data.length; i++) {
      document.getElementById('result').innerHTML +=
      '<div class="card col-md-3" style="width: 16rem;">' +
        '<img src="' + data[i].avatar + '" class="card-img-top" alt="...">' +
        '<div class="card-body">' +
          '<h5 class="card-title">' + data[i].first_name + ' ' + data[i].last_name + ' </h5>' +
          '<p class="card-text">' + data[i].email + '</p>' +
          '<p class="card-text">' + data[i].gender + '</p>' +
          '<a href="#" class="btn btn-primary">Profile</a>' +
        '</div>' +
      '</div>'
    }

  },//success end
  error: function(){
    console.log('error');
  }//error end
});//ajax end

});//document.ready ending
