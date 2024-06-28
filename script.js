document.getElementById('helloButton').addEventListener('click', function() {
    const notificationBackdrop = document.getElementById('notificationBackdrop');
    const notification = document.getElementById('notification');

    // Activate notification backdrop
    notificationBackdrop.style.display = 'block';
    setTimeout(function() {
        notificationBackdrop.style.opacity = '1';
    }, 10);

    // Activate notification
    notification.classList.add('active');
});

document.getElementById('okButton').addEventListener('click', function() {
    const notificationBackdrop = document.getElementById('notificationBackdrop');
    const notification = document.getElementById('notification');

    // Deactivate notification
    notificationBackdrop.style.opacity = '0';
    notification.classList.remove('active');
    
    // Hide notification backdrop after animation
    setTimeout(function() {
        notificationBackdrop.style.display = 'none';
    }, 300);
});
