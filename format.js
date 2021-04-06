function createCookies() {
  var textSize = document.getElementById("textSizeSlider");
  var output = document.getElementById("demo");
  output.innerHTML = textSize.value;

  textSize.oninput = function() {
    output.innerHTML = this.value;
  }

  textSize.onchange = function() {
    var x = document.getElementsByClassName("Navi");
    var y = document.getElementsByClassName("test");

    for(var i = 0; i < x.length; i++){
      var font = (this.value.toString()) + "px times";
      x[i].style.font = font;
    }
    for(var i = 0; i < y.length; i++){
      var font = (this.value.toString()) + "px times";
      y[i].style.font = font;
    }

    document.cookie = "textSize=" + this.value.toString();
  }
}

function loadRefactor() {
  var bgColour = getCookie("bgColour");
  var textColour = getCookie("textColour");
  var textSize = getCookie("textSize");
  var a = document.getElementsByClassName("test");
  var b = document.getElementsByClassName("slidecontainer");
  var c = document.getElementsByClassName("textColourChanger");
  var d = document.getElementsByClassName("bgColourChanger");

  if(bgColour != null){
    for(var i = 0; i < a.length; i++){
      a[i].style.backgroundColor = bgColour;
    }
    for(var i = 0; i < b.length; i++){
      b[i].style.backgroundColor = bgColour;
    }
    for(var i = 0; i < c.length; i++){
      c[i].style.backgroundColor = bgColour;
    }
    for(var i = 0; i < d.length; i++){
      d[i].style.backgroundColor = bgColour;
    }
  }

  if(textColour != null){
    for(var i = 0; i < a.length; i++){
      a[i].style.color = textColour;
    }
    for(var i = 0; i < a.length; i++){
      a[i].style.color = textColour;
    }
    for(var i = 0; i < a.length; i++){
      a[i].style.color = textColour;
    }
    for(var i = 0; i < a.length; i++){
      a[i].style.color = textColour;
    }
  }

  if(textSize != null){
    for(var i = 0; i < a.length; i++){
      a[i].style.font = (textSize + "px times");
    }
    for(var i = 0; i < b.length; i++){
      b[i].style.font = (textSize + "px times");
    }
    for(var i = 0; i < c.length; i++){
      c[i].style.font = (textSize + "px times");
    }
    for(var i = 0; i < d.length; i++){
      d[i].style.font = (textSize + "px times");
    }
  }
}

function getCookie(name) {
  var cookieArray = document.cookie.split(";");

  for(var i = 0; i < cookieArray.length; i++){
    var cookiePair = cookieArray[i].split("=");
    if(name == cookiePair[0].trim()){
      return decodeURIComponent(cookiePair[1]);
    }
  }

  return null;
}

function setTextColour(colour) {
  var a = document.getElementsByClassName("test");
  var b = document.getElementsByClassName("slidecontainer");
  var c = document.getElementsByClassName("textColourChanger");
  var d = document.getElementsByClassName("bgColourChanger");


  for(var i = 0; i < a.length; i++){
    a[i].style.color = colour;
  }
  for(var i = 0; i < b.length; i++){
    b[i].style.color = colour;
  }
  for(var i = 0; i < c.length; i++){
    c[i].style.color = colour;
  }
  for(var i = 0; i < d.length; i++){
    d[i].style.color = colour;
  }

  document.cookie = "textColour=" + colour;
}

function setBackgroundColor(colour) {
  var a = document.getElementsByClassName("test");
  var b = document.getElementsByClassName("slidecontainer");
  var c = document.getElementsByClassName("textColourChanger")


  for(var i = 0; i < a.length; i++){
    a[i].style.backgroundColor = colour;
  }
  for(var i = 0; i < b.length; i++){
    b[i].style.backgroundColor = colour;
  }
  for(var i = 0; i < c.length; i++){
    c[i].style.backgroundColor = colour;
  }
  document.cookie = "bgColour=" + colour;
}
