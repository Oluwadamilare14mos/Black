importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDsrL5UHWeFtQAX5XCI1hX7As91PWz59Cs",
  authDomain: "black-1108.firebaseapp.com",
  projectId: "black-1108",
  storageBucket: "black-1108.firebasestorage.app",
  messagingSenderId: "639439190327",
  appId: "1:639439190327:web:b08b640aba7e8f7d76c2b2"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon || "/icons/icon-192x192.png"
  });
});
