module.exports = notify;

var note = {
    image   : 'http://www.tomopop.com/ul/23560-Header2.jpg'
    , title   : 'Notification Title'
    , message : 'Look at this beast'
    , url     : 'http://duckduckgo.com'
}

//basic
var opt = {
  type: "basic",
  title: "Primary Title",
  message: "Primary message to display",
  iconUrl: "url_to_small_icon"
}
//list
var opt = {
  type: "list",
  title: "Primary Title",
  message: "Primary message to display",
  iconUrl: "url_to_small_icon",
  items: [{ title: "Item1", message: "This is item 1."},
          { title: "Item2", message: "This is item 2."},
          { title: "Item3", message: "This is item 3."}]
}

//create
chrome.notifications.create(string notificationId, NotificationOptions options, function callback)

//update
chrome.notifications.update(string notificationId, NotificationOptions options, function callback)

//clear
chrome.notifications.clear(string notificationId, function callback)
//Events
//onClosed
//onClicked
//onPermissionLevelChanged
//onShowSettings

chrome.notifications.onButtonClicked.addListener(note, callback);

var callback = function(string, notificationId, integer, buttonIndex) {

};


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
