var viewer = new Cesium.Viewer('cesiumContainer');

//ポイントを追加
var point = viewer.entities;

point.add({
        position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
        point : {
            pixelSize : 10,
            color : Cesium.Color.YELLOW
    }
});


//ポイントを追加
var point = viewer.entities;

point.add({
        position : Cesium.Cartesian3.fromDegrees(140.240479,38.186387),
        point : {
            pixelSize : 10,
            color : Cesium.Color.BLUE
    }
});



//ラインを追加
var line1 = viewer.entities;

line1.add({
    name : 'Red line on the surface',
    polyline : {
        positions : Cesium.Cartesian3.fromDegreesArray([140.240479,38.186387,
                                                        -125, 35]),
        width : 20,
		material : new Cesium.PolylineArrowMaterialProperty(Cesium.Color.PURPLE)

    }
});

//ポリゴンを追加
var Polygon = viewer.entities;

Polygon.add({
    name : 'Polygon',
    polygon : {
        hierarchy : Cesium.Cartesian3.fromDegreesArray([-108.0, 42.0,
                                                        -100.0, 42.0,
                                                        -104.0, 40.0]),
        extrudedHeight: 500000.0,
	material : Cesium.Color.GREEN
    }
});





//kml読み込み
viewer.dataSources.add(Cesium.KmlDataSource.load('https://nbayashi.github.io/ikoma3/cesium-starter-app-master/Source/ikoma4.kml'));


//視点の変更
viewer.zoomTo(viewer.entities);
