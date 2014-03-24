var KMapBuilder = function() {
	
	/**
	 * @author oopdeveloper89
	 * @param xml mapXml 
	 */
	this.build = function(mapXml) {
		// first get tile properties...
		var mapNode = mapXml.getElementsByTagName('map')[0];
		var mapWidth = mapNode.attributes['width'].value;
		var mapHeight = mapNode.attributes['height'].value;
		var mapTileWidth = mapNode.attributes['tilewidth'].value;
		var mapTileHeight = mapNode.attributes['tileheight'].value;
		
		// Get the layers as array to iterate later...
		var layers = mapXml.getElementsByTagName('layer');
		
		// Get tileset image informations...
		var tileSetImageNode = mapXml.getElementsByTagName('image')[0];
		var tileSetImageSource = tileSetImageNode.attributes['source'].value;
		var tileSetImageWidth = tileSetImageNode.attributes['width'].value;
		var tileSetImageHeight = tileSetImageNode.attributes['height'].value;
		var tileSetImageTransparentColor = tileSetImageNode.attributes['trans'].value;
		
		var tilesetImage = new Image(tileSetImageWidth, tileSetImageHeight);
		tilesetImage.src = tileSetImageSource;
		return tilesetImage.onload = function() {
			var tempCanvas = document.createElement('canvas');
			tempCanvas.setAttribute('width', mapWidth);
			tempCanvas.setAttribute('height', mapHeight);
			tempCanvas.setAttribute('id', 'temporaryCanvas');
			var ctx = tempCanvas.getContext('2d');
			ctx.drawImage(tilesetImage, 0, 0);
			
			var layerTileMap = {};
			var cachedSubimages = {};
			for (var layerIndex = 0; layerIndex < layers.length; layerIndex++) {
				var layer = layers[layerIndex];
				var layerData = layer.getElementsByTagName('data')[0];
				var layerTiles = layerData.getElementsByTagName('tile');
				
				for (var layerTilesIndex = 0; layerTilesIndex < layerTiles.length; layerTilesIndex++) {
					var tile = layerTiles[layerTilesIndex];
					var tileId = tile.attributes['gid'].value;
					
					if (tileId > 0) {
						var row = Math.ceil(tileId / mapWidth);
						var column = mapWidth - (row * mapWidth - tileId);
						var tileImg = cachedSubimages[tileId];
						if (tileImg == undefined) {
							var subimg = ctx.getImageData(
									column * mapTileWidth,
									row * mapTileHeight, 
									mapTileWidth, 
									mapTileHeight);
							cachedSubimages[tileId] = subimg;
							tileImg = subimg;
						}
						layerTileMap[layerIndex][column][row] = tileImg;
					}
				}
			}
			
			return layerTileMap;
		};
	};
	
};