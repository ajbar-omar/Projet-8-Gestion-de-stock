$(document).ready(function(){
var studentsList;
function getall() {
  $(".studentsList").html(" ");
  $.ajax({
    url:"/api/getStudents.php",
    method:"GET",
    success:function(data) {
      studentsList = JSON.parse(data);
      console.log(studentsList);
      for (var i = 0; i < studentsList.length; i++) {
        $(".studentsList").append('<li><h2>'+"ID: "+studentsList[i]["id"]+'</h2><h3>'+"Lébillé: "+studentsList[i]["lébillé"]+'</h3><h4>'+"Prix: "+studentsList[i]["prix"]+'</h4></li>');
      }
    }
  })
}
getall();
})
