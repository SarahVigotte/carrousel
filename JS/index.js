$(document).ready(function(){

let img =$('#carrousel img');
let index=1;

img.hide();

img.eq(index).show();

img.click( function(){
    img.eq(index).hide();
    index ++;
    img.eq(index).show();
    if (index >= img.length) {
        index = 0;
        img.eq(index).show();
    }
});

$('.next').click(function(){
    img.eq(index).hide();
    index ++;
    img.eq(index).show();
    if (index >= img.length) {
        index = 0;
        img.eq(index).show();
    }
});


$('.prev').click(function(){
    img.eq(index).hide();
    index --;
    img.eq(index).show();
    if (index < 0) {
        index = img.length -1;
    }
    console.log(index);
});

$('body').keydown(function(e){
    ;
    let keycode = e.which;
    if (keycode==39) {
        img.eq(index).hide();
        index --;
        img.eq(index).show();
        if (index < 0) {
            index = img.length -1;
    }


    }
    if (keycode==37) {
        img.eq(index).hide();
        index ++;
        img.eq(index).show();
        if (index >= img.length) {
            index = 0;
            img.eq(index).show();
        }
    }
});

img.on('wheel', function(event){

    // deltaY obviously records vertical scroll, deltaX and deltaZ exist too.
    // this condition makes sure it's vertical scrolling that happened
    if(event.originalEvent.deltaY !== 0){

      if(event.originalEvent.deltaY < 0){
        // wheeled up
        img.eq(index).hide();
        index ++;
        img.eq(index).show()
        if(index >= img.length){
            index = 0;
            img.eq(index).show();
        }
     } else {
        // wheeled down
        img.eq(index).hide();
        index --;
        img.eq(index).show()
        if(index < 0){
            index = img.length -1;}
        }
    }
});


});
