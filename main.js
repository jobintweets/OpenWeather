document.addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "click Event Occured";
  });
  document.addEventListener("mouseover", myFunction);
  function myFunction() {
      document.getElementById("demo").innerHTML="Mouse Over Event Occured"
  }
  function get_uri() {
     let uri= document.baseURI;
    document.getElementById("uri").innerHTML=uri;
}
function get_charset() {
    let char= document.characterSet;
   document.getElementById("char").innerHTML=char;
}

  function create_Attribute() {
    var h1 = document.getElementsByTagName("H1")[0];
    var att = document.createAttribute("class");
    att.value = "democlass";
    h1.setAttributeNode(att);

  }
  function create_Button() {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "New Button Created";
    document.body.appendChild(btn); 
  }
 function  create_Element() {
    var h3 = document.createElement("H3");
    var text = document.createTextNode("H3 Created");
    h3.appendChild(text);
    document.body.appendChild(h3);

  }
  function getBy_ClassName() {
   var element= document.getElementsByClassName("example");
element[1].innerHTML="My Content Changed";
  }
  function getBy_Name() {
    var val = document.getElementsByName("name")[0].value;
    document.getElementById("getby_name_result").innerHTML = val;
  }
  function getImageUrl() {
    var source = document.images[0].src;
    document.getElementById("imageurl").innerHTML = source;
  }
  function getId_OfHead() {
    var x = document.head.id;
    document.getElementById("headid_result").innerHTML = x; 
  }
  function query_selector() {
    document.querySelector(".query_selector").style.backgroundColor = "red";
  }
  function execCommand1(event) {
      // to make the document editable
    document.designMode = "on";

    if (event.keyCode == 16) {
        // Execute command if user presses the SHIFT button:
        document.execCommand("italic");
      }
  }
  function removeChild1() {
    let list = document.getElementById("list");
    list.removeChild(list.childNodes[0]);
  }