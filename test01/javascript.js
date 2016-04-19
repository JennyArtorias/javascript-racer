$(document).ready(function(){
    
    //Variables for canvas
    
    var canvas = $("#canvas")[0];
    var ctx = canvas.getContext("2d");
    var w = $("#canvas").width();
    var h = $("#canvas").height();
    
    // Save cell width in variable for easy control 

    var cw = 10;
    var d;
    var food;
    var score;
    
    //Create snake
    
    var snake_array; // array of cells to make up the snake 
    
    
    function init(){
        
        d="right"; // default direction
        create_snake();
        create_food(); // show food
        
        score = 0;// display score
    }
    
    //Snake movement timer used to trigger paint function
    //every 60ms
        
    if(typeof game_loop != "undefined")
        clearInterval(game_loop);
    game_loop = setInterval(paint, 60);
}
    init();


        
        
        
        
        
        
        
        
        
    
    
    
    
    
    
    
    
})