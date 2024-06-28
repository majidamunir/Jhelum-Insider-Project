//loadmore
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById('load-more');
    var gallery = document.getElementById('gallery');
    var items = document.querySelectorAll('.Categories'); // Select all items
  
    var currentIndex = 4; // Start index for loading more items
  
    // Function to load more items
    function loadMoreItems() {
      for (var i = currentIndex; i < currentIndex + 4 && i < items.length; i++) {
        items[i].style.display = 'block';
      }
      currentIndex += 4;
      checkButtonVisibility();
    }
  
    // Check button visibility based on the number of items
    function checkButtonVisibility() {
      if (currentIndex >= items.length) {
        button.style.display = 'none';
      } else {
        button.style.display = 'block';
      }
    }
  
    // Load more items when the button is clicked
    button.addEventListener('click', loadMoreItems);
  
    // Initially hide items beyond the first three
    for (var i = 4; i < items.length; i++) {
      items[i].style.display = 'none';
    }
  
    // Initially check button visibility
    checkButtonVisibility();
  });

  
  
    
  