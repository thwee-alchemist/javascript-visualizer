(function($){

	fourd = new FourD();
	fourd.init('#display', {width: window.innerWidth, height: window.innerHeight});
	var graph = fourd.graph;
	fourd.clear();
	
	var javascript = document.querySelector('#javascript');
	var visualize = document.querySelector('#visualize');
	
	visualize.onclick = function(){
		fourd.clear();
		
		var text = javascript.value;
		console.log(text);
		
		
		var ast = esprima.parseScript(text);
		var vertex;
		walk(ast, function(node){
			node.vertex = fourd.graph.add_vertex(
      { 
        cube: {
          size: 10,
          //texture: 'img/gear.png'
        }, 
        label: {
          text: node.type,
          size: 50
        }
      });
			
			if(node.parent){
				fourd.graph.add_edge(node.vertex, node.parent.vertex);
			}
		});
	}

})(jQuery);