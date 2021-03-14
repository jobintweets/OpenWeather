const warriors = [
    { name: 'Son Goku', powerLevel: 32000 },
    { name: 'Vegetar', powerLevel: 18000 },
    { name: 'Piccolo', powerLevel:  3500 },
    { name: 'Krillin', powerLevel: 1770 },
    { name: 'Yamcha', powerLevel: 1000 },
   ];
   console.table(warriors);
function apiCall() {
  
    const Http = new XMLHttpRequest();
    const url='https://cors-anywhere.herokuapp.com/http://dev-fe-assesment.pantheonsite.io/jobs?_format=json';
                Http.open("GET", url,true);
               Http.send();
               Http.onreadystatechange = function() {
                   if (this.readyState == 4 && this.status == 200) {
                       let result =JSON.parse(Http.responseText);
                    console.log(result);
                    let data = "";
                    for (let i = 0; i < result.length; i++) {
                     data+="<div class='card' id='"+ i +"'>"
                      data+="<div class='card-body'>"
                       data+="<h3 class='card-title'>" +  result[i].title+"<span class='close' onclick='closeJob("+ i +")'>&times;</span>"+"</h3>"
                       if(result[i].location!==''){
                        data+="<span><i class='fa fa-map-marker'>&nbsp;"+result[i].location+"</i></span>"
                       }
                     data+="<p class='card-text'>" +  result[i].company+"</p>"
                         data+="<p class='card-text'>" +  result[i].tags+"</p>"
                        if(result[i].remote==1){
                        data+="<p><i class='fa fa-wifi' aria-hidden='true'>Remote</i><p>" 
                    }
                      data+="</div>";
                      data+="</div>";
                      data+="<div class='card test'>";
                      data+="<h2 class='undo_text'>You Wont see this any more !</h2>"
                      data+="<a   href='#' onclick='undo("+i+")'>undo</a>"
                      data+="</div>"
                      
            }
            document.getElementById("result").innerHTML=data;
          }
               };
}
function  closeJob(test_id) {
   document.getElementById(test_id).style.display="none";
  document.getElementsByClassName('test')[test_id].style.display="block";
  }
function undo(test_id){
    event.preventDefault();
    document.getElementById(test_id).style.display="block"; 
    document.getElementsByClassName('test')[test_id].style.display="none";
}
apiCall();
