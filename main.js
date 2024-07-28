// Array of notification options
const notifications = [
  { title: "Rouri!!!", body: "Don't forget to eat and drink water baby!", image: "Polish_20230804_005556130.jpg", icon: "crocodilepng-removebg-preview.png" },
  { title: "Rouri!!!", body: "Dada loves his baby girl so much <3", image: "Polish_20230804_005556130.jpg", icon: "crocodilepng-removebg-preview.png" },
  { title: "Rouri!!!", body: "I LOVE YOU SO DAMN MUCH LOVE OF MY LIFE", image: "Polish_20230804_005556130.jpg", icon: "crocodilepng-removebg-preview.png" },
  { title: "Rouri!!!", body: "The cats kissing are us, Mama!", image: "Polish_20230804_005556130.jpg", icon: "crocodilepng-removebg-preview.png" },
  { title: "Rouri!!!", body: "MWAH MWAH MWAH MAMA!", image: "Polish_20230804_005556130.jpg", icon: "crocodilepng-removebg-preview.png" }
];

// Function to send a random notification
function sendRandomNotification() {
  // Check if the browser supports notifications
  if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
      return;
  }

  // Request permission if not granted
  if (Notification.permission !== "granted") {
      Notification.requestPermission();
  }

  // If permission is granted, send a random notification
  if (Notification.permission === "granted") {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
      new Notification(randomNotification.title, {
          body: randomNotification.body,
          icon: randomNotification.icon,
          image: randomNotification.image
      });
  }
}

// Add click event listener to the div
document.getElementById("notifyDiv").addEventListener("click", sendRandomNotification);