/**
 * @author oopdeveloper89
 */
var KMap = function() {
	
	/**
	 * @var array<KEntity>
	 */
	var mapEntities = null;
	
	var mapLayers = null;

	this.setMapEntities = function(newMapEntities) {
		mapEntities = newMapEntities;
	};
	
	this.getMapEntities = function() {
		return mapEntities;
	};
	
	this.setMapLayers = function(newMapLayers) {
		mapLayers = newMapLayers;
	};
	
	this.getMapLayers = function() {
		return mapLayers;
	};
	
};