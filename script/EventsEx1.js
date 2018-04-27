(function(ns1, ns3){

    ns3.JQEvents = function JQEvents(){
        
        //private members
        createClick = function createClick(findElem, elem1, elem2){
            $(findElem).click(function(){
                var firstN = $(elem1).val();
                var LastN = $(elem2).val();
                $('#OutputDiv').text(firstN +' ' + LastN);
            })
        },
        changeFired = function changeFired(className){
            $(className).change(function(){
                $(this).addClass('Highlight');
            })
        },
        mouseIn = function mouseIn(findElem){
            $(findElem).mouseenter(function(e){ 
                $(this).toggleClass('HighlightYellow');
                $('.myOutputDiv').text('X:' + e.pageX + ' Y:' + e.pageY);
            });
        },
        mouseOut = function mouseOut(findElem){
            $(findElem).mouseleave(function(e){
                $(this).toggleClass('HighlightYellow');
                //alert($(e.target).attr('class'));
            });
        },
        onUsage = function onUsage(findElem){
            $(findElem).on('mouseenter mouseleave click', function(e){
                $(this).toggleClass('HighlightYellow');
                if(e.type == 'click') {
                    $('.myOutputDiv').text('X:' + e.pageX + ' Y:' + e.pageY);
                }
            })
        };
        
        //public members
        return {
            createClick: createClick,
            changeFired: changeFired,
            mouseIn: mouseIn,
            mouseOut: mouseOut,
            onUsage: onUsage
        };
    };

})(window.Gus = window.Gus || {}, 
   window.Gus.ExJqEvents = window.Gus.ExJqEvents || {});