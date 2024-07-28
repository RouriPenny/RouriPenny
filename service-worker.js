self.addEventListener('install', function(event) {
    console.log('Service Worker installed');
  });
  
  self.addEventListener('activate', function(event) {
    console.log('Service Worker activated');
    // Since intervals aren't ideal in service workers, using setTimeout instead for demonstration
    scheduleNotification();
  });
  
  self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
      clients.openWindow('https://rouripenny.github.io/RouriPenny/') // Replace with your desired URL
    );
  });
  
  self.addEventListener('push', function(event) {
    const options = {
      body: 'Do not forget to eat and drink baby Penny! mwah mwah <3',
      icon: 'crocodilepng-removebg-preview.png', // Replace with your image URL
      image: 'Polish_20230804_005556130.jpg' // Replace with your image URL
    };
  
    event.waitUntil(
      self.registration.showNotification('Rouri Reminder!', options)
    );
  });
  
  // Function to schedule notifications
  function scheduleNotification() {
    setTimeout(function() {
      self.registration.showNotification('Rouri Reminder!', {
        body: 'Do not forget to eat and drink baby Penny! mwah mwah <3',
        icon: 'crocodilepng-removebg-preview.png', // Replace with your image URL
        image: 'Polish_20230804_005556130.jpg' // Replace with your image URL
      });
      scheduleNotification(); // Reschedule the next notification
    }, 10800000); // 3 hours in milliseconds
  }
  