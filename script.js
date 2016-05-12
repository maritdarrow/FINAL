$(document).ready(function() {
 
  //When button is clicked, run function
  $("button").on("click", function() {
    //use math object to get random number
    var number = Math.random();
    if (number > 0.5){
      //set paragraph with answer id to text
      $("#answer").text("Notorious RBG")
    } else if (number > 0.3)  {
       $("#answer").text("[W]hen I'm sometimes asked when will there be enough [women on the supreme court]? And I say 'When there are nine.' People are shocked. But there'd been nine men, and nobody's ever raised a question about that.")
    } else {
       $("#answer").text("Women will only have true equality when men share with them the responsibility of bringing up the next generation.")
    }
  });
  
})
