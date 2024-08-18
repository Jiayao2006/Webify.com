document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    // Use XMLHttpRequest to send the form data
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload', true); // Replace '/upload' with your server endpoint

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            document.getElementById('uploadStatus').textContent = 'Upload successful!';
        } else {
            document.getElementById('uploadStatus').textContent = 'Upload failed!';
        }
    };

    xhr.onerror = function() {
        document.getElementById('uploadStatus').textContent = 'Upload error!';
    };

    xhr.send(formData);
});
