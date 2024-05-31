var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Modedechauffage_1 = new ol.format.GeoJSON();
var features_Modedechauffage_1 = format_Modedechauffage_1.readFeatures(json_Modedechauffage_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Modedechauffage_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Modedechauffage_1.addFeatures(features_Modedechauffage_1);
var lyr_Modedechauffage_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Modedechauffage_1, 
                style: style_Modedechauffage_1,
                popuplayertitle: "Mode de chauffage",
                interactive: true,
    title: 'Mode de chauffage<br />\
    <img src="styles/legend/Modedechauffage_1_0.png" /> 0<br />\
    <img src="styles/legend/Modedechauffage_1_1.png" /> INDIVIDUEL<br />\
    <img src="styles/legend/Modedechauffage_1_2.png" /> COLLECTIF<br />'
        });

lyr_Positron_0.setVisible(true);lyr_Modedechauffage_1.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Modedechauffage_1];
lyr_Modedechauffage_1.set('fieldAliases', {'Matricule': 'Matricule', 'Energie': 'Energie', 'Rue': 'Rue', 'CodePostal': 'CodePostal', 'Commune': 'Commune', 'Adresse': 'Adresse', 'Nb_lgt': 'Nb_lgt', 'Mode_chauf': 'Mode_chauf', 'Ener_chauf': 'Ener_chauf', 'Conso_prim': 'Conso_prim', 'QBAN': 'QBAN', 'Logements': 'Logements', });
lyr_Modedechauffage_1.set('fieldImages', {'Matricule': 'TextEdit', 'Energie': 'TextEdit', 'Rue': 'TextEdit', 'CodePostal': 'TextEdit', 'Commune': 'TextEdit', 'Adresse': 'TextEdit', 'Nb_lgt': 'TextEdit', 'Mode_chauf': 'TextEdit', 'Ener_chauf': 'TextEdit', 'Conso_prim': 'TextEdit', 'QBAN': 'TextEdit', 'Logements': 'TextEdit', });
lyr_Modedechauffage_1.set('fieldLabels', {'Matricule': 'inline label - always visible', 'Energie': 'inline label - always visible', 'Rue': 'hidden field', 'CodePostal': 'hidden field', 'Commune': 'hidden field', 'Adresse': 'inline label - always visible', 'Nb_lgt': 'hidden field', 'Mode_chauf': 'inline label - always visible', 'Ener_chauf': 'inline label - always visible', 'Conso_prim': 'hidden field', 'QBAN': 'hidden field', 'Logements': 'inline label - always visible', });
lyr_Modedechauffage_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});