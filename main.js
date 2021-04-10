window.onload = init;

function init() {
    const map= new ol.Map({
        view: new ol.View({
            center: ol.proj.fromLonLat([65.25, 34.25]),
            zoom:6
        }),
        layers:[
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'map' 
    }) 
    afg_bo = new ol.layer.Image({
        source: new ol.source.ImageWMS({
           url: 'https://geowebservices.stanford.edu/geoserver/ows?SERVICE=WMS&',
           params: {
               LAYERS: 'druid:yq852zn2316',
           }
           })
       
        });
    map.addLayer(afg_bo);   
     
}