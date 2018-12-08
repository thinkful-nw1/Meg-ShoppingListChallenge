// create an event listner for form submission
'use strict';
$('#js-shopping-list-form').on('submit',
  function(e){
    e.preventDefault();
    console.log('clicked');
    //capture the new list item
    let newItem = $('input[name = shopping-list-entry]').val();
    console.log(newItem);
    // add the new list item to the list
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${
  newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });
//toggle the checked and unchecked items
$('ul').on('click', '.shopping-item-toggle',function () {
  console.log('clicked2');
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});
// delete the shopping list items when delete is clicked
$('ul').on('click', '.shopping-item-delete',function() {
  console.log("hello");
  $(this).parents('li').remove();
});


