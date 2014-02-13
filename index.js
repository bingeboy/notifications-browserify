module.exports = notify;

var note = {
    image   : 'http://www.tomopop.com/ul/23560-Header2.jpg'
    , title   : 'Notification Title'
    , message : 'Look at this beast'
    , url     : 'http://duckduckgo.com'
}

function notify(note) {
  var havePermission = window.webkitNotifications.checkPermission();
  if (havePermission === 0) {
    // 0 is PERMISSION_ALLOWED
    var notification = window.webkitNotifications.createNotification(
      note.image,
      note.title,
      note.message
    );

    notification.onclick = function (note) {
      window.open(note.url);
      notification.close();
    };

    notification.show();
  } else {
      window.webkitNotifications.requestPermission();
  }
}
