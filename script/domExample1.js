(function(ns1, ns2){

    ns2.DomWork = function DomWork(){
        //Private members 
        var itterateNode = function itterateNode(findNode, output){
            var outputTo = $(output);
            var html = '';
            $(findNode).each(function(index){
                html += "<br>" + index + " " + $(this).text();
            });
            outputTo.html(html);
        },

        // Mapping
        attrMapFunction = function attrMapFunction(findNode){
            $(findNode).each(function(){
                $(this).attr({
                    title: 'Some attr set text',
                    style: 'font-size:14pt;background-color:Yellow;color:Black'
                })
            });
        },
        
        // Append 
        appendFunc = function appendFunc(findElem){
            $(findElem).append('<span style="background-color:Green;color:white;font-size:14pt">Append a child 1</span>');
        },
        // Prepend
        prependFunc = function prependFunc(findElem){
            $(findElem).prepend('<span style="background-color:Green;color:white;font-size:14pt">Prepend a child 2</span>');
        }, 

        wrapFunc = function wrapFunc(findElem){
            $(findElem).wrap('<div class="RedDiv,ParentWrapper">You been wrapped</div>');
        },
        
        removeFunc = function removeFunc(findElem){
            $(findElem).remove();
        },

        elemHighlight = function elemHighlight(findElem){
            $(findElem).addClass('HighLight');
        },

        elemRemoveHighlight = function elemRemoveHighlight(findElem){
            $(findElem).removeClass('HighLight');
        },

        toggleHighlight = function toggleHighlight(that) {
            $(that).toggleClass('HighLight');
        };

        //Public members
        return {
            itterateNode: itterateNode,
            attrMapFunction: attrMapFunction,
            appendFunc: appendFunc,
            prependFunc: prependFunc,
            wrapFunc: wrapFunc,
            removeFunc: removeFunc,
            elemHighlight: elemHighlight,
            elemRemoveHighlight:elemRemoveHighlight,
            toggleHighlight:toggleHighlight
        };
    };

})(window.Gus = window.Gus || {}, window.Gus.ExJqDom = window.Gus.ExJqDom || {});