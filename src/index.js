// Function to load the main page
function loadMainPage() {
    var appDiv = document.getElementById('app');
    
    var header = document.createElement('h1');
    header.textContent = 'CatFinder';
    
    var catImage = document.createElement('img');
    catImage.src = 'path/to/your/cat/image.jpg'; // Replace with your actual image path
    catImage.alt = 'Image of a cat';
  
    var aboutUsLink = document.createElement('a');
    aboutUsLink.href = 'about.html';
    aboutUsLink.textContent = 'About Us';
  
    var contactLink = document.createElement('a');
    contactLink.href = 'contact.html';
    contactLink.textContent = 'Contact Us';
  
    appDiv.appendChild(header);
    appDiv.appendChild(catImage);
    appDiv.appendChild(aboutUsLink);
    appDiv.appendChild(document.createElement('br')); // Line break between the links
    appDiv.appendChild(contactLink);
  }
  
  // Call the function to load the main page
  loadMainPage();