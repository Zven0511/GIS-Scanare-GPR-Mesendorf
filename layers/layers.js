ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3844").setExtent([499128.537406, 509631.689354, 499230.047100, 509702.602154]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_R_Solid_PosibilZiduriVechiGeneric_3 = new ol.format.GeoJSON();
var features_R_Solid_PosibilZiduriVechiGeneric_3 = format_R_Solid_PosibilZiduriVechiGeneric_3.readFeatures(json_R_Solid_PosibilZiduriVechiGeneric_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_R_Solid_PosibilZiduriVechiGeneric_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R_Solid_PosibilZiduriVechiGeneric_3.addFeatures(features_R_Solid_PosibilZiduriVechiGeneric_3);
var lyr_R_Solid_PosibilZiduriVechiGeneric_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R_Solid_PosibilZiduriVechiGeneric_3, 
                style: style_R_Solid_PosibilZiduriVechiGeneric_3,
                popuplayertitle: 'R_Solid_Posibil Ziduri Vechi Generic',
                interactive: true,
                title: '<img src="styles/legend/R_Solid_PosibilZiduriVechiGeneric_3.png" /> R_Solid_Posibil Ziduri Vechi Generic'
            });
var format_Adancime_PosibilZiduriVechiGeneric_4 = new ol.format.GeoJSON();
var features_Adancime_PosibilZiduriVechiGeneric_4 = format_Adancime_PosibilZiduriVechiGeneric_4.readFeatures(json_Adancime_PosibilZiduriVechiGeneric_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Adancime_PosibilZiduriVechiGeneric_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adancime_PosibilZiduriVechiGeneric_4.addFeatures(features_Adancime_PosibilZiduriVechiGeneric_4);
var lyr_Adancime_PosibilZiduriVechiGeneric_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Adancime_PosibilZiduriVechiGeneric_4, 
                style: style_Adancime_PosibilZiduriVechiGeneric_4,
                popuplayertitle: 'Adancime_Posibil Ziduri Vechi Generic',
                interactive: true,
                title: '<img src="styles/legend/Adancime_PosibilZiduriVechiGeneric_4.png" /> Adancime_Posibil Ziduri Vechi Generic'
            });
var format_R_Pipe_ObiectMetalicGeneric_5 = new ol.format.GeoJSON();
var features_R_Pipe_ObiectMetalicGeneric_5 = format_R_Pipe_ObiectMetalicGeneric_5.readFeatures(json_R_Pipe_ObiectMetalicGeneric_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_R_Pipe_ObiectMetalicGeneric_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R_Pipe_ObiectMetalicGeneric_5.addFeatures(features_R_Pipe_ObiectMetalicGeneric_5);
var lyr_R_Pipe_ObiectMetalicGeneric_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R_Pipe_ObiectMetalicGeneric_5, 
                style: style_R_Pipe_ObiectMetalicGeneric_5,
                popuplayertitle: 'R_Pipe_Obiect Metalic Generic',
                interactive: true,
                title: '<img src="styles/legend/R_Pipe_ObiectMetalicGeneric_5.png" /> R_Pipe_Obiect Metalic Generic'
            });
var format_AdancimeObiectMetalicGeneric_6 = new ol.format.GeoJSON();
var features_AdancimeObiectMetalicGeneric_6 = format_AdancimeObiectMetalicGeneric_6.readFeatures(json_AdancimeObiectMetalicGeneric_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_AdancimeObiectMetalicGeneric_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdancimeObiectMetalicGeneric_6.addFeatures(features_AdancimeObiectMetalicGeneric_6);
var lyr_AdancimeObiectMetalicGeneric_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdancimeObiectMetalicGeneric_6, 
                style: style_AdancimeObiectMetalicGeneric_6,
                popuplayertitle: 'Adancime Obiect Metalic Generic',
                interactive: true,
                title: '<img src="styles/legend/AdancimeObiectMetalicGeneric_6.png" /> Adancime Obiect Metalic Generic'
            });
var format_ConductaNeidentificataGeneric_7 = new ol.format.GeoJSON();
var features_ConductaNeidentificataGeneric_7 = format_ConductaNeidentificataGeneric_7.readFeatures(json_ConductaNeidentificataGeneric_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_ConductaNeidentificataGeneric_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConductaNeidentificataGeneric_7.addFeatures(features_ConductaNeidentificataGeneric_7);
var lyr_ConductaNeidentificataGeneric_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConductaNeidentificataGeneric_7, 
                style: style_ConductaNeidentificataGeneric_7,
                popuplayertitle: 'Conducta Neidentificata Generic',
                interactive: true,
                title: '<img src="styles/legend/ConductaNeidentificataGeneric_7.png" /> Conducta Neidentificata Generic'
            });
var format_R_Pipe_FeatureGeneric_8 = new ol.format.GeoJSON();
var features_R_Pipe_FeatureGeneric_8 = format_R_Pipe_FeatureGeneric_8.readFeatures(json_R_Pipe_FeatureGeneric_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_R_Pipe_FeatureGeneric_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R_Pipe_FeatureGeneric_8.addFeatures(features_R_Pipe_FeatureGeneric_8);
var lyr_R_Pipe_FeatureGeneric_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R_Pipe_FeatureGeneric_8, 
                style: style_R_Pipe_FeatureGeneric_8,
                popuplayertitle: 'R_Pipe_Feature Generic',
                interactive: true,
                title: '<img src="styles/legend/R_Pipe_FeatureGeneric_8.png" /> R_Pipe_Feature Generic'
            });
var format_AdancimeFeatureGeneric_9 = new ol.format.GeoJSON();
var features_AdancimeFeatureGeneric_9 = format_AdancimeFeatureGeneric_9.readFeatures(json_AdancimeFeatureGeneric_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_AdancimeFeatureGeneric_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdancimeFeatureGeneric_9.addFeatures(features_AdancimeFeatureGeneric_9);
var lyr_AdancimeFeatureGeneric_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdancimeFeatureGeneric_9, 
                style: style_AdancimeFeatureGeneric_9,
                popuplayertitle: 'Adancime Feature Generic',
                interactive: true,
                title: '<img src="styles/legend/AdancimeFeatureGeneric_9.png" /> Adancime Feature Generic'
            });
var format_Podet_10 = new ol.format.GeoJSON();
var features_Podet_10 = format_Podet_10.readFeatures(json_Podet_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Podet_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Podet_10.addFeatures(features_Podet_10);
var lyr_Podet_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Podet_10, 
                style: style_Podet_10,
                popuplayertitle: 'Podet',
                interactive: true,
                title: '<img src="styles/legend/Podet_10.png" /> Podet'
            });
var format_Fosa_11 = new ol.format.GeoJSON();
var features_Fosa_11 = format_Fosa_11.readFeatures(json_Fosa_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Fosa_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fosa_11.addFeatures(features_Fosa_11);
var lyr_Fosa_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fosa_11, 
                style: style_Fosa_11,
                popuplayertitle: 'Fosa',
                interactive: true,
                title: '<img src="styles/legend/Fosa_11.png" /> Fosa'
            });
var format_R_Pipe_ScurgerePodetSewer_12 = new ol.format.GeoJSON();
var features_R_Pipe_ScurgerePodetSewer_12 = format_R_Pipe_ScurgerePodetSewer_12.readFeatures(json_R_Pipe_ScurgerePodetSewer_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_R_Pipe_ScurgerePodetSewer_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R_Pipe_ScurgerePodetSewer_12.addFeatures(features_R_Pipe_ScurgerePodetSewer_12);
var lyr_R_Pipe_ScurgerePodetSewer_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R_Pipe_ScurgerePodetSewer_12, 
                style: style_R_Pipe_ScurgerePodetSewer_12,
                popuplayertitle: 'R_Pipe_Scurgere Podet Sewer',
                interactive: true,
                title: '<img src="styles/legend/R_Pipe_ScurgerePodetSewer_12.png" /> R_Pipe_Scurgere Podet Sewer'
            });
var format_AdancimeScurgerePodetSewer_13 = new ol.format.GeoJSON();
var features_AdancimeScurgerePodetSewer_13 = format_AdancimeScurgerePodetSewer_13.readFeatures(json_AdancimeScurgerePodetSewer_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_AdancimeScurgerePodetSewer_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdancimeScurgerePodetSewer_13.addFeatures(features_AdancimeScurgerePodetSewer_13);
var lyr_AdancimeScurgerePodetSewer_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdancimeScurgerePodetSewer_13, 
                style: style_AdancimeScurgerePodetSewer_13,
                popuplayertitle: 'Adancime Scurgere Podet Sewer',
                interactive: true,
                title: '<img src="styles/legend/AdancimeScurgerePodetSewer_13.png" /> Adancime Scurgere Podet Sewer'
            });
var format_Cismea_14 = new ol.format.GeoJSON();
var features_Cismea_14 = format_Cismea_14.readFeatures(json_Cismea_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Cismea_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cismea_14.addFeatures(features_Cismea_14);
var lyr_Cismea_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cismea_14, 
                style: style_Cismea_14,
                popuplayertitle: 'Cismea',
                interactive: true,
                title: '<img src="styles/legend/Cismea_14.png" /> Cismea'
            });
var format_Camin_15 = new ol.format.GeoJSON();
var features_Camin_15 = format_Camin_15.readFeatures(json_Camin_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Camin_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camin_15.addFeatures(features_Camin_15);
var lyr_Camin_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Camin_15, 
                style: style_Camin_15,
                popuplayertitle: 'Camin',
                interactive: true,
                title: '<img src="styles/legend/Camin_15.png" /> Camin'
            });
var format_ConductaSubteranaApa_16 = new ol.format.GeoJSON();
var features_ConductaSubteranaApa_16 = format_ConductaSubteranaApa_16.readFeatures(json_ConductaSubteranaApa_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_ConductaSubteranaApa_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConductaSubteranaApa_16.addFeatures(features_ConductaSubteranaApa_16);
var lyr_ConductaSubteranaApa_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConductaSubteranaApa_16, 
                style: style_ConductaSubteranaApa_16,
                popuplayertitle: 'Conducta Subterana Apa',
                interactive: true,
                title: '<img src="styles/legend/ConductaSubteranaApa_16.png" /> Conducta Subterana Apa'
            });
var format_AdancimeConductaApa_17 = new ol.format.GeoJSON();
var features_AdancimeConductaApa_17 = format_AdancimeConductaApa_17.readFeatures(json_AdancimeConductaApa_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_AdancimeConductaApa_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdancimeConductaApa_17.addFeatures(features_AdancimeConductaApa_17);
var lyr_AdancimeConductaApa_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdancimeConductaApa_17, 
                style: style_AdancimeConductaApa_17,
                popuplayertitle: 'Adancime Conducta Apa',
                interactive: true,
                title: '<img src="styles/legend/AdancimeConductaApa_17.png" /> Adancime Conducta Apa'
            });
var format_Fantana_18 = new ol.format.GeoJSON();
var features_Fantana_18 = format_Fantana_18.readFeatures(json_Fantana_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Fantana_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fantana_18.addFeatures(features_Fantana_18);
var lyr_Fantana_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fantana_18, 
                style: style_Fantana_18,
                popuplayertitle: 'Fantana',
                interactive: true,
                title: '<img src="styles/legend/Fantana_18.png" /> Fantana'
            });
var format_Hidrant_19 = new ol.format.GeoJSON();
var features_Hidrant_19 = format_Hidrant_19.readFeatures(json_Hidrant_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Hidrant_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidrant_19.addFeatures(features_Hidrant_19);
var lyr_Hidrant_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hidrant_19, 
                style: style_Hidrant_19,
                popuplayertitle: 'Hidrant',
                interactive: true,
                title: '<img src="styles/legend/Hidrant_19.png" /> Hidrant'
            });
var format_CabluElectric_20 = new ol.format.GeoJSON();
var features_CabluElectric_20 = format_CabluElectric_20.readFeatures(json_CabluElectric_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_CabluElectric_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabluElectric_20.addFeatures(features_CabluElectric_20);
var lyr_CabluElectric_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CabluElectric_20, 
                style: style_CabluElectric_20,
                popuplayertitle: 'Cablu Electric',
                interactive: true,
                title: '<img src="styles/legend/CabluElectric_20.png" /> Cablu Electric'
            });
var format_AdancimeCabluElectric_21 = new ol.format.GeoJSON();
var features_AdancimeCabluElectric_21 = format_AdancimeCabluElectric_21.readFeatures(json_AdancimeCabluElectric_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_AdancimeCabluElectric_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdancimeCabluElectric_21.addFeatures(features_AdancimeCabluElectric_21);
var lyr_AdancimeCabluElectric_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdancimeCabluElectric_21, 
                style: style_AdancimeCabluElectric_21,
                popuplayertitle: 'Adancime Cablu Electric',
                interactive: true,
                title: '<img src="styles/legend/AdancimeCabluElectric_21.png" /> Adancime Cablu Electric'
            });
var format_Stalpi_22 = new ol.format.GeoJSON();
var features_Stalpi_22 = format_Stalpi_22.readFeatures(json_Stalpi_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Stalpi_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stalpi_22.addFeatures(features_Stalpi_22);
var lyr_Stalpi_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stalpi_22, 
                style: style_Stalpi_22,
                popuplayertitle: 'Stalpi',
                interactive: true,
                title: '<img src="styles/legend/Stalpi_22.png" /> Stalpi'
            });
var group_Electric = new ol.layer.Group({
                                layers: [lyr_CabluElectric_20,lyr_AdancimeCabluElectric_21,lyr_Stalpi_22,],
                                fold: 'close',
                                title: 'Electric'});
var group_Apa = new ol.layer.Group({
                                layers: [lyr_ConductaSubteranaApa_16,lyr_AdancimeConductaApa_17,lyr_Fantana_18,lyr_Hidrant_19,],
                                fold: 'close',
                                title: 'Apa'});
var group_Canalizare = new ol.layer.Group({
                                layers: [lyr_Podet_10,lyr_Fosa_11,lyr_R_Pipe_ScurgerePodetSewer_12,lyr_AdancimeScurgerePodetSewer_13,lyr_Cismea_14,lyr_Camin_15,],
                                fold: 'close',
                                title: 'Canalizare'});
var group_Generic_PipeFeature = new ol.layer.Group({
                                layers: [lyr_ConductaNeidentificataGeneric_7,lyr_R_Pipe_FeatureGeneric_8,lyr_AdancimeFeatureGeneric_9,],
                                fold: 'close',
                                title: 'Generic_Pipe Feature'});
var group_Generic_ObiectMetalic = new ol.layer.Group({
                                layers: [lyr_R_Pipe_ObiectMetalicGeneric_5,lyr_AdancimeObiectMetalicGeneric_6,],
                                fold: 'close',
                                title: 'Generic_Obiect Metalic'});
var group_Generic_PosibilZiduriVechi = new ol.layer.Group({
                                layers: [lyr_R_Solid_PosibilZiduriVechiGeneric_3,lyr_Adancime_PosibilZiduriVechiGeneric_4,],
                                fold: 'close',
                                title: 'Generic_Posibil Ziduri Vechi'});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_R_Solid_PosibilZiduriVechiGeneric_3.setVisible(true);lyr_Adancime_PosibilZiduriVechiGeneric_4.setVisible(true);lyr_R_Pipe_ObiectMetalicGeneric_5.setVisible(true);lyr_AdancimeObiectMetalicGeneric_6.setVisible(true);lyr_ConductaNeidentificataGeneric_7.setVisible(true);lyr_R_Pipe_FeatureGeneric_8.setVisible(true);lyr_AdancimeFeatureGeneric_9.setVisible(true);lyr_Podet_10.setVisible(true);lyr_Fosa_11.setVisible(true);lyr_R_Pipe_ScurgerePodetSewer_12.setVisible(true);lyr_AdancimeScurgerePodetSewer_13.setVisible(true);lyr_Cismea_14.setVisible(true);lyr_Camin_15.setVisible(true);lyr_ConductaSubteranaApa_16.setVisible(true);lyr_AdancimeConductaApa_17.setVisible(true);lyr_Fantana_18.setVisible(true);lyr_Hidrant_19.setVisible(true);lyr_CabluElectric_20.setVisible(true);lyr_AdancimeCabluElectric_21.setVisible(true);lyr_Stalpi_22.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleMaps_1,lyr_GoogleSatelliteHybrid_2,group_Generic_PosibilZiduriVechi,group_Generic_ObiectMetalic,group_Generic_PipeFeature,group_Canalizare,group_Apa,group_Electric];
lyr_R_Solid_PosibilZiduriVechiGeneric_3.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Adancime_PosibilZiduriVechiGeneric_4.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Adancim[m]': 'Adancim[m]', });
lyr_R_Pipe_ObiectMetalicGeneric_5.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AdancimeObiectMetalicGeneric_6.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Adancim[m]': 'Adancim[m]', });
lyr_ConductaNeidentificataGeneric_7.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_R_Pipe_FeatureGeneric_8.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AdancimeFeatureGeneric_9.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Adancim[m]': 'Adancim[m]', });
lyr_Podet_10.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Fosa_11.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_R_Pipe_ScurgerePodetSewer_12.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AdancimeScurgerePodetSewer_13.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Adancim[m]': 'Adancim[m]', });
lyr_Cismea_14.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'name': 'name', });
lyr_Camin_15.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'name': 'name', });
lyr_ConductaSubteranaApa_16.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AdancimeConductaApa_17.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Adancim[m]': 'Adancim[m]', });
lyr_Fantana_18.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'name': 'name', });
lyr_Hidrant_19.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'name': 'name', });
lyr_CabluElectric_20.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AdancimeCabluElectric_21.set('fieldAliases', {'FID': 'FID', 'Adancime': 'Adancime', });
lyr_Stalpi_22.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_R_Solid_PosibilZiduriVechiGeneric_3.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_Adancime_PosibilZiduriVechiGeneric_4.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Adancim[m]': 'TextEdit', });
lyr_R_Pipe_ObiectMetalicGeneric_5.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_AdancimeObiectMetalicGeneric_6.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Adancim[m]': 'TextEdit', });
lyr_ConductaNeidentificataGeneric_7.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_R_Pipe_FeatureGeneric_8.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_AdancimeFeatureGeneric_9.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Adancim[m]': 'TextEdit', });
lyr_Podet_10.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_Fosa_11.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_R_Pipe_ScurgerePodetSewer_12.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_AdancimeScurgerePodetSewer_13.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Adancim[m]': 'TextEdit', });
lyr_Cismea_14.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'name': 'TextEdit', });
lyr_Camin_15.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'name': 'TextEdit', });
lyr_ConductaSubteranaApa_16.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_AdancimeConductaApa_17.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Adancim[m]': 'TextEdit', });
lyr_Fantana_18.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'name': 'TextEdit', });
lyr_Hidrant_19.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'name': 'TextEdit', });
lyr_CabluElectric_20.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_AdancimeCabluElectric_21.set('fieldImages', {'FID': 'TextEdit', 'Adancime': 'TextEdit', });
lyr_Stalpi_22.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_R_Solid_PosibilZiduriVechiGeneric_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_Adancime_PosibilZiduriVechiGeneric_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Adancim[m]': 'inline label - visible with data', });
lyr_R_Pipe_ObiectMetalicGeneric_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_AdancimeObiectMetalicGeneric_6.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Adancim[m]': 'inline label - visible with data', });
lyr_ConductaNeidentificataGeneric_7.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_R_Pipe_FeatureGeneric_8.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_AdancimeFeatureGeneric_9.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Adancim[m]': 'inline label - visible with data', });
lyr_Podet_10.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_Fosa_11.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_R_Pipe_ScurgerePodetSewer_12.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_AdancimeScurgerePodetSewer_13.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Adancim[m]': 'inline label - visible with data', });
lyr_Cismea_14.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'name': 'inline label - visible with data', });
lyr_Camin_15.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'name': 'inline label - visible with data', });
lyr_ConductaSubteranaApa_16.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_AdancimeConductaApa_17.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Adancim[m]': 'inline label - visible with data', });
lyr_Fantana_18.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'name': 'inline label - visible with data', });
lyr_Hidrant_19.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'name': 'inline label - visible with data', });
lyr_CabluElectric_20.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_AdancimeCabluElectric_21.set('fieldLabels', {'FID': 'inline label - visible with data', 'Adancime': 'inline label - visible with data', });
lyr_Stalpi_22.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_Stalpi_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});