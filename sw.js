self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'KYOUKANO';
  const options = {
    body: data.body || '',
    icon: '/kyoukano/icon.png',
    badge: '/kyoukano/icon.png'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/kyoukano/'));
});
