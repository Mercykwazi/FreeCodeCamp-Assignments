function search(){

 $(document).ready(function(){
   var input=document.getElementById("mySearch").value;
   $.ajax({
    type: 'GET',
    url: 'https://en.wikipedia.org/w/api.php?action=opensearch&limit=15&format=json& search='+input,
     dataType: 'jsonp',
success: function(data) {
  $('#display').html('');
     
  var definition ="";
 for(var i=0; i < data[1].length;i++){
   $("#display").append("<a href="+ data[3][i] + " target='_blank'>" + data[1][i] + "</a><br/>"); 
   
 };
   
}
})
                          })
  

}