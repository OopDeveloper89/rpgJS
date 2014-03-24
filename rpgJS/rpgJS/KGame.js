var KGame = function() {
	
	this.start = function(gameMapUrl) {

		KFileLoader
		.load(gameMapUrl)
		.then(function(mapXml) {
			var kMapBuilder = new KMapBuilder();
			var layerTileMap = kMapBuilder.build(mapXml);
			var kMap = new KMap();
			kMap.setMapLayers(layerTileMap);
			var gameloop = new KGameloop();
			gameloop.setKMap(kMap);
			gameloop.start();
		});
	};
	
};