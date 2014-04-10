/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         /*yepnope({
         	nope:[	
         		'edge_includes/initStage.js',
         		'edge_includes/gameBridge.js',
         		'edge_includes/TweenMax.min.js',
         		'edge_includes/jquery-ui-1.10.3.custom.min.js'
         	], 
         	complete: loadTouchPunch
         })*/
         
         $.getJSON('sample_json.json', function(data) {
           console.log(data);
           sym.$("txt1")[0].innerHTML = data["Feedback0"];
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-6236406");