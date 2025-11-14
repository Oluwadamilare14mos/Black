// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js");

// initialize with your firebase config
firebase.initializeApp({
  apiKey: "AIzaSyDsrL5UHWeFtQAX5XCI1hX7As91PWz59Cs",
  authDomain: "black-1108.firebaseapp.com",
  projectId: "black-1108",
  storageBucket: "black-1108.firebasestorage.app",
  messagingSenderId: "639439190327",
  appId: "1:639439190327:web:b08b640aba7e8f7d76c2b2"
});

const messaging = firebase.messaging();

// background notifications handler
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notification = payload.notification || {};
  const title = notification.title || 'Notification';
  const options = {
    body: notification.body || '',
    icon: notification.icon || '/favicon.ico',
    // you can add click_action or data for notificationclick handling
    data: payload.data || {}
  };
  self.registration.showNotification(title, options);
});

// Optionally handle notification click
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const urlToOpen = event.notification?.data?.url || '/';
  event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
    for (let client of windowClients) {
      if (client.url === urlToOpen && 'focus' in client) return client.focus();
    }
    if (clients.openWindow) return clients.openWindow(urlToOpen);
  }));
});
