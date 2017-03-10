$(init);

    function init() {
        $('.draggable').draggable({
        	snap: ".droppable",
        	cursor: "move", cursorAt: { top: 50, left: 50 },
        	revert: "invalid",
        	stack: ".draggable"
        });

        // for (i=0;i<$(".droppable").length;i++){
        // $(".droppable").eq(i).droppable({accept: $(".draggable")[i]});
        // }//end for loop
    } //end function