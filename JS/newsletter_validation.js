document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.querySelector('input[name="user-name"]').value;
    var email = document.querySelector('input[name="user-email"]').value;

    document.getElementById('userName').textContent = 'Name: ' + name;
    document.getElementById('userEmail').textContent = 'Email: ' + email;

    document.getElementById('thankYouMessage').style.display = 'block';
});

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.querySelector('input[name="user-name"]').value;
    var email = document.querySelector('input[name="user-email"]').value;

    // Display a popup message
    alert('Thank you for subscribing, ' + name + '! A confirmation email has been sent to ' + email + '.');

    // Optionally, you can reset the form
    document.getElementById('newsletterForm').reset();
});