function upDate(previewPic) {
    // Console log for event trigger check
    console.log("Image activated:", previewPic.src); 
    
    const display = document.getElementById('image');
    display.style.backgroundImage = `url(${previewPic.src})`;

    display.innerHTML = previewPic.alt;
}

function undo() {
    console.log("Image deactivated");
    
    const display = document.getElementById('image');

    // Resetting background to an empty URL (imperfection left in)
    display.style.backgroundImage = "url('')"; 
    
    display.innerHTML = "Hover over or focus on an image below to display here.";
}

// Function called by the body's onload event
function setupGallery() {
    // Console log for onload event trigger check
    console.log("Window loaded: Starting gallery setup to add tabindex attributes."); 

    // Select all preview images
    var images = document.querySelectorAll('#gallery .preview');

    // Write a for loop to loop through each image
    for (var i = 0; i < images.length; i++) {
        // Add the tabindex attributes
        images[i].setAttribute('tabindex', '0');
    }
}