var KGameloop = function() {
	
	/**
	 * @var KMap
	 */
	var kMap = null;
	
	this.start = function() {
		var moo = kMap.getMapLayers();
		for (var key in moo) {
			
		}
	};
	
	this.setKMap = function(newKMap) {
		kMap = newKMap;
	};
	
};