(function () {

    var names = ["Yalini", "Josuah", "Jeni rube jane", "Jackie chan", "Peter", "Franky", "Lisa manobal", "Paul", "Lalisa", "Johny"];
    
    for (var i = 0; i < names.length; i++) {
    
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } 
      else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    })();