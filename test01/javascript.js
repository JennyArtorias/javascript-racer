

//--- EXTRA NOTES for myself--------
// Context constructor object JSON notation

//var Object1 = {colors: 1, size: 150, draw: function(){this.color;}}; JSON object 

//console.log(Object1.colors);
//alert(Object1.size);

//Dont have to initialize JSON object

//not intialized yet
//var Object2 = function(){ 
//    this.colors = 2; // 2
//    this.size = 150; // 2
//    this.draw = function() {}
//}
//
//CONSTRUCTOR object and create an instance of the object BLUE PRINT of object
//
//Object2.colors; //undefined -> object 1 would work FUNCTION CONSTRUCTORS
//
//var obj2 = new Object2();
//
//intialize object above
//
//obj2.colors; // 2
//obj2.size; // 150
//
//EXIST right away JSON vs object constructor need to initialize then create instance ->
//    Two different ways to add properties, methods 
//--------------------------------------------------------------




var Context = {
    canvas : null,
    context : null,
    create: function(canvas_tag_id){
        this.canvas = document.getElementById(canvas_tag_id);
        this.canvas = this.canvas.getContext('2d');
        return this.context;
        
        
    }
    
  
    
    
    
};











$(document).ready(function(){
    
    //initialize
    
    
    
    
    
    
    
    
    
});