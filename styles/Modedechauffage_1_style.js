var size = 0;
var placement = 'point';
function categories_Modedechauffage_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '0':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 3.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.608}), fill: new ol.style.Fill({color: 'rgba(221,225,229,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'INDIVIDUEL':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 3.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.608}), fill: new ol.style.Fill({color: 'rgba(203,67,86,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'COLLECTIF':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 3.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.608}), fill: new ol.style.Fill({color: 'rgba(112,161,163,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Modedechauffage_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Mode_chauf");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Modedechauffage_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
