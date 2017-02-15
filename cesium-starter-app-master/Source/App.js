var viewer = new Cesium.Viewer('cesiumContainer');

//kml読み込み
viewer.dataSources.add(Cesium.KmlDataSource.load('https://oza-pong.github.io/ikoma4/cesium-starter-app-master/Source/Fukuchiyama_keikan.kmz'));


//視点の変更
viewer.camera.flyTo({   
     destination : Cesium.Cartesian3.fromDegrees(135.121684,35.299802,8000)});

