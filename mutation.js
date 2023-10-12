

    // Get the target element to observe
    const target = document.getElementById('target');
    
    // Function to be called when a mutation is detected
    const callback = function(mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          console.log('A child node has been added or removed.');
        } else if (mutation.type === 'attributes') {
          console.log('Attributes of the target have changed.');
        }
      }
    };
    
    // Create a MutationObserver instance
    const observer = new MutationObserver(callback);
    
    // Configure the observer to watch for changes to child elements and attributes
    const config = { childList: true, attributes: true };
    
    // Start observing the target element
    observer.observe(target, config);
    
    // Add a button to add an element to the target
    const addButton = document.getElementById('add-element');
    addButton.addEventListener('click', function() {
      const newElement = document.createElement('p');
      newElement.textContent = 'New paragraph added.';
      target.appendChild(newElement);
    });

