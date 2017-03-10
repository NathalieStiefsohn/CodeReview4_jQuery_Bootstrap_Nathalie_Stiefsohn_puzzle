// array
var dragdrop = [
        ["#drag1", "pictures/image_part_1.jpg", "drag1", "drop1"],
        ["#drag2", "pictures/image_part_2.jpg", "drag2", "drop2"],
        ["#drag3", "pictures/image_part_3.jpg", "drag3", "drop3"],
        ["#drag4", "pictures/image_part_4.jpg", "drag4", "drop4"],
        ["#drag5", "pictures/image_part_5.jpg", "drag5", "drop5"],
        ["#drag6", "pictures/image_part_6.jpg", "drag6", "drop6"],
        ["#drag7", "pictures/image_part_7.jpg", "drag7", "drop7"],
        ["#drag8", "pictures/image_part_8.jpg", "drag8", "drop8"],
        ["#drag9", "pictures/image_part_9.jpg", "drag9", "drop9"],
        ["#drag10", "pictures/image_part_10.jpg", "drag10", "drop10"],
        ["#drag11", "pictures/image_part_11.jpg", "drag11", "drop11"],
        ["#drag12", "pictures/image_part_12.jpg", "drag12", "drop12"],

    ]
    // filling the divs
function fill_dragdrop() {
    for (i = 0; i < dragdrop.length; i++) {
        var drag = $(".draggable")[i];
        drag.innerHTML = "<img src='" + dragdrop[i][1] + "' alt='white temple'>";
        $(drag).attr('id', dragdrop[i][2]);
        var drop = $(".droppable")[i];
        drop.innerHTML = "<img src='" + dragdrop[i][1] + "' alt='white temple'>";
        $(drop).attr('id', dragdrop[i][3]);

    } //end of first for loop

} // end function filldragdrop

fill_dragdrop();

// putting the pics in randoms order

function random_order() {
    var cards = $(".draggable");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
}
random_order();

// drag and drop function

init_dragdrop();

function init_dragdrop() {
    $('.draggable').draggable({
        snap: ".droppable",
        cursor: "move",
        cursorAt: { top: 50, left: 50 },
        revert: "invalid",
        stack: ".draggable",

    });

    for (i = 0; i < $(".droppable").length; i++) {

        $(".droppable").eq(i).droppable({
            accept: $(dragdrop[i][0]),
            drop: function(event, ui) {


                $(dragdrop[$(this).index()][0]).addClass("dropped");
                var getscore = $("#getscore")[0];
                if ($(".dropped").length > 11) {
            		getscore.innerHTML = "<div class='alert alert-success'><strong>Congratulations! You solved the puzzle!</strong> Would you like to play again? <a href='index.html'><button type='button' class='btn btn-default'>yes</button></a>"
                } else {
                    getscore.innerHTML = "<div class='alert alert-success'><strong>Yess!</strong> You have " + $(".dropped").length + " out of 12.</div>"
                } //end if

            } //end function at drop

        })
    } //end for loop
} //end function
