$(init);

function init() {
    $('.draggable').draggable({
        snap: ".droppable",
        cursor: "move",
        cursorAt: { top: 50, left: 50 },
        revert: "invalid",
        stack: ".draggable",

    });

    for (i = 0; i < $(".droppable").length; i++) {
        // var draggable = $(".draggable")[$(this).index()];
        $(".droppable").eq(i).droppable({
            accept: $(".draggable")[i],
            drop: function(event, ui) {
                    $(".draggable").eq($(this).index()).addClass("dropped");
                    console.log($(".droppable").length);
                    console.log($(".dropped").length);
                    console.log($(this).index())
                        // console.log(draggable);
                }
                // drop: function() { $('.draggable').eq(i).addClass("dropped") }
        })
    } //end for loop
} //end function


function random_order () {
var cards = $(".draggable");
for(var i = 0; i < cards.length; i++){
    var target = Math.floor(Math.random() * cards.length -1) + 1;
    var target2 = Math.floor(Math.random() * cards.length -1) +1;
    cards.eq(target).before(cards.eq(target2));
}
}
random_order();
