const myHeader = document.getElementsByTagName("h1");
const generateListButton = document.querySelector("button.generateListButton");
const itemEntry = document.querySelector('input.itemEntry');
const addToListButton = document.querySelector( 'button.addToListButton');
const listDiv = document.querySelector(".list-section");
const list = document.querySelector( 'ul.list');
const removeItemButton = $('.removeItemButton');
const titleEntry = document.querySelector('.titleEntry');
const listDate = document.querySelector('.listDate');
const menu = document.querySelector('.menu');
const $addNewListButton = $('.fa-plus');
const $deleteListButton = $('.fa-minus');
const $markItemButton = $('.markItem');



$('.fa-bars').on("click", function() { 
  if (menu.style.display !== "block") {
    // in plain javascript: menu.style.display = "block";
    $('.menu').slideDown(500).show();
  } else {
    //  in plain javascript: menu.style.display = "none";
    $('.menu').slideUp().hide(500);
  }  
}); // end event handler




// Code for the Add New List Button

$addNewListButton.on("click", function () {
  
  $('.list-section').slideDown(500).show();
  $('.list-header i.fa-plus').hide();
  $('.fa-minus').show();
  $('ul.list').text('');
  
}); // end event handler


// Code for the Delete List Button

$('.fa-minus').on("click", function () {
  
  $('.list-section').slideUp().hide(500);
  $('i.fa-minus').hide();
  $('.fa-plus').show();
  
  

}); // end event handler




// Code for the itemEntry text input


// Code for Add to List Button

addToListButton.addEventListener('click', () => {
  let li = document.createElement('li');
  li.textContent = itemEntry.value;
  list.appendChild(li);
  
  
  let itemMarker = document.createElement('button');
  itemMarker.className = 'markItemButton';
  itemMarker.innerHTML = `<i class="fas fa-cart-arrow-down"></i>`;
  li.appendChild(itemMarker);
  
  let itemRemoval = document.createElement('button');
  itemRemoval.className = 'removeItemButton';
  itemRemoval.innerHTML = `<i class="fas fa-trash"></i>`;
  li.appendChild(itemRemoval);
  itemEntry.value = "";

});

itemEntry.addEventListener("keydown", checkKeyPressed);

function checkKeyPressed(evt) {
  if (evt.keyCode == "13") {
    let li = document.createElement('li');
    li.textContent = itemEntry.value;
    list.appendChild(li);

    let itemMarker = document.createElement('button');
    itemMarker.className = 'markItemButton';
    itemMarker.innerHTML = `<i class="fas fa-cart-arrow-down"></i>`;
    li.appendChild(itemMarker);
    
    let itemRemoval = document.createElement('button');
    itemRemoval.className = 'removeItemButton';
    itemRemoval.innerHTML = `<i class="fas fa-trash"></i>`;
    li.appendChild(itemRemoval);
    itemEntry.value = "";
  }
}

// Code for mark Item Button - whichever markItemButton is clicked, its parent list item should be marked through to indicate it being scratched off of a list.

list.addEventListener('click', (event) => {
  if (event.target.className == 'markItemButton' || event.target.className == 'itemMarker') {
    let li = event.target.parentNode;
    
    if (li.className == 'marked') {
      li.className -= 'marked';
      } else {
        li.className += 'marked';
      }
    
}}) // end event handler

// Code for remove Item Button - whichever removeItemButton is clicked, its parent list item should be removed from the DOM.

list.addEventListener('click', (event) => {
  if (event.target.className == 'removeItemButton') {
    let li = event.target.parentNode;
    list.removeChild(li);
  }
})


// This code will include the date (and possibly the time) of when the user's list was created or last worked on.

// 1. Create a div element that will sit at the very top of the listDiv variable and give it the class of "listHeader".

// 2. Append the div element's node as the first child of the listDIv variable.

// 3. Create a div within the listHeader variable and give it the class of "listTitle".

// 4. Append the node of the listTitle variable within the listHeader variable.



// 5. Create a div within the listHeader variable and give it the class of "listDate".
// 6. Append the node of the listDate variable within the listHeader variable.

// Code for the listDate div

function generateDate() {
  let date = new Date();
  let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let currentMonth = months[date.getMonth()] + " ";
  let currentDay = date.getDate() + ", " ;
  let currentYear = date.getFullYear();
  let currentTime = "  at " + date.getHours() + ":" + date.getMinutes();
  let currentDate =  currentMonth + currentDay + currentYear + currentTime;

  // if (titleEntry.textContent  == "") {
  //     listDate.style.display = "none";
  // } else {
  //     listDate.style.display = "block";
  $('.listDate').html(currentDate);



};


generateDate();











// this is how you write the code to style the myButton variable after you've given it a handler using document.querySelectorAll();//
// myButton[0].style.color = 'blue';

// this is how you write the code to style the listDiv variable after you've given it a handler using document.querySelectorAll();//
// listDiv[0].style.display = 'block';



// Features to Add to this app:

// 2. Include the date (and possibly the time) of when the user's list was created or last worked on.

// 3. Also give the user the ability to title their lists, being that they may be creating multiple lists for multiple kinds of groceries.

// 4. Allow the user to edit an item entry. The purpose of this will provide the user the ability to change a submitted  entry.

// 5. Create a checkbox that allows the user to check off each item they currently have in the cart.
