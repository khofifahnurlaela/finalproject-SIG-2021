mapboxgl.accessToken = 'pk.eyJ1Ijoia2hvZmlmYWhudXJsYWVsYSIsImEiOiJja3Z0MGw4bXkyM3JpMnBtbmI5Z2xlbnN4In0.pV-sLlOXp1loCE_bFdLeow';
const center = [109.65193668097744, -7.668770182665575];
const map = new mapboxgl.Map({
    container: 'map',
    zoom: 11,
    center: center,
    pitch: 60,
    style: 'mapbox://styles/mapbox/streets-v11'
});

var rs =
{
    "type": "FeatureCollection",
    "features": [
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [109.507557, -7.684375]
        },
        "properties": {
            "title": "RS Purwogondo",
            "telp": "(0287) 5500776 / 472588",
            "alamat" : "Jl. Puring Km. 8, Jl. Tambaksari Raya, Purwogondo, Kalipurwo, Kuwarasan, Kabupaten Kebumen, Jawa Tengah 54366",
            "buka" : "Buka 24 jam",
            "img": "url(https://cms.sehatq.com/cdn-cgi/image/f=auto/public/img/hospital_thumb/rsu-purwogondo-HCFH00000777.jpg)",
            "kategori" : "covid",
            "kapasitas": "29",
            "terpakai": "2",
            "tersedia": "27"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [109.486429, -7.609736]
        },
        "properties": {
            "title": "RS Purbowangi",
            "telp": "(0287) 471080",
            "alamat" : "Jl. Yos Sudarso No.1, Karang Malang, Purbowangi, Kec. Buayan, Kabupaten Kebumen, Jawa Tengah 54421",
            "buka" : "Buka 24 jam",
            "img": "url(https://cms.sehatq.com/cdn-cgi/image/f=auto/public/img/hospital_thumb/rsu-purbowangi-HCFH00001301.jpg)",
            "kategori" : "covid",
            "kapasitas": "21",
            "terpakai": "0",
            "tersedia": "21"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [109.50239, -7.608767]
        },
        "properties": {
            "title": "RS PKU Muhammadiyah Gombong",
            "telp": "(0287) 471780",
            "alamat" : "Jl. Yos Sudarso No.461, Sangkalputung, Semondo, Kec. Gombong, Kabupaten Kebumen, Jawa Tengah 54412",
            "buka" : "Buka 24 jam",
            "img": "url(https://1.bp.blogspot.com/-3LCoW_N_ht0/XiAtIweUvaI/AAAAAAAAAP4/e75Zz-3GnkUyrZducxb3gcoHRXGf_pZzQCLcBGAsYHQ/s640/pku-gombong.PNG)",
            "kategori" : "covid",
            "kapasitas": "42",
            "terpakai": "1",
            "tersedia": "41"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [109.532112, -7.609032]
        },
        "properties": {
            "title": "RS Palang Biru Gombong",
            "telp": "(0287) 471290 / 471762 / 472193 / 472196",
            "alamat" : "Jalan Yos Sudarso No.Timur, Pucang, Kedungpuji, Kec. Gombong, Kabupaten Kebumen, Jawa Tengah 54416",
            "buka" : "Buka 24 jam",
            "img": "url(https://serverinsip.net/wp-content/uploads/2020/09/download-6-768x492.png)",
            "kategori" : "covid",
            "kapasitas": "20",
            "terpakai": "0",
            "tersedia": "20"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [109.609296, -7.662691]
        },
        "properties": {
            "title": "RS PKU Muhammadiyah Sruweng",
            "telp": "(0287) 382597 / 5506677 / 3872001",
            "alamat" : "Jl. Raya Sruweng No.5, Sruweng, Kec. Sruweng, Kabupaten Kebumen, Jawa Tengah 54361",
            "buka" : "Buka 24 jam",
            "img": "url(https://cms.sehatq.com/cdn-cgi/image/f=auto/public/img/hospital_thumb/rs-pku-muhammadiyah-sruweng-HCFH00000776.jpg)",
            "kategori" : "covid",
            "kapasitas": "60",
            "terpakai": "29",
            "tersedia": "31"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [109.593066, -7.754813]
        },
        "properties": {
            "title": "RS PKU Muhammadiyah Petanahan",
            "telp": "(0287) 6655285",
            "alamat" : "Jl. Daendels, Yuda, Munggu, Kec. Petanahan, Kabupaten Kebumen, Jawa Tengah 54382",
            "buka" : "Buka 24 jam",
            "img": "url(https://goalkes-images.s3-ap-southeast-1.amazonaws.com/hospitals/U56snK4thjg49vC865BlU846AlYrDcelBhLM0JjV.jpg)",
            "kategori" : "covid",
            "kapasitas": "51",
            "terpakai": "15",
            "tersedia": "36"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [109.664738, -7.700685]
        },
        "properties": {
            "title": "RSUD Dr. Soedirman Kebumen",
            "telp": "(0287) 381101",
            "alamat" : "Jalan Lingkar Selatan, Kenteng, Muktisari, Kec. Kebumen, Kabupaten Kebumen, Jawa Tengah 54317",
            "buka" : "Buka 24 jam",
            "img": "url(https://rsuddrsoedirman.kebumenkab.go.id/assets/images/gallery/rsuddrsoedirman.kebumenkab.go.id.200717-10.jpg)",
            "kategori" : "covid",
            "kapasitas": "33",
            "terpakai": "0",
            "tersedia": "33"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [109.666572, -7.67946]
        },
        "properties": {
            "title": "RSK Anak Wijaya Kusuma",
            "telp": "(0287) 381954",
            "alamat" : "Gg. Glatik No.1-A, Panjer, Kec. Kebumen, Kabupaten Kebumen, Jawa Tengah 54311",
            "buka" : "Buka 24 jam",
            "img": "url(https://d1ojs48v3n42tp.cloudfront.net/provider_location_banner/38262_15-6-2021_19-5-45.png)",
            "kategori" : "covid",
            "kapasitas": "15",
            "terpakai": "0",
            "tersedia": "15"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [109.666495, -7.678995]
        },
        "properties": {
            "title": "Rumah Sakit Darurat",
            "telp": "0821-1081-8625",
            "alamat" : "Jl.Gelatik 2A, Panjer, Kec. Kebumen, Kabupaten Kebumen, Jawa Tengah 54312",
            "buka" : "07.30 - 11.00 ",
            "img": "url(https://cdn.krjogja.com/wp-content/uploads/2020/04/GEdung-hut.jpg)",
            "kategori" : "covid",
            "kapasitas": "58",
            "terpakai": "0",
            "tersedia": "58"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [109.667622, -7.675752]
        },
        "properties": {
            "title": "RS Permata Medika",
            "telp": "(0287) 3870779",
            "alamat" : "Jl. Indrakila No.17, Indrakila, Kebumen, Kec. Kebumen, Kabupaten Kebumen, Jawa Tengah 54311",
            "buka" : "Buka 24 jam",
            "img": "url(https://3.bp.blogspot.com/-UHllRHxZ1PY/XDWIOwTiL6I/AAAAAAAAD6U/y1P7x8R8f8ox1GiPAbKk1awxK2ly9E5SQCLcBGAs/s1600/1.jpg)",
            "kategori" : "covid",
            "kapasitas": "20",
            "terpakai": "0",
            "tersedia": "20"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [109.735827, -7.717616]
        },
        "properties": {
            "title": "RS PKU Muhammadiyah Kutowinangun",
            "telp": "(0287) 661137",
            "alamat" : "Jl. Pemuda No.12, Kutowinangun, Kec. Kutowinangun, Kabupaten Kebumen, Jawa Tengah 54393",
            "buka" : "Buka 24 jam",
            "img": "url(https://4.bp.blogspot.com/-lS3HPvkBLoM/WJKh-c97iHI/AAAAAAAAABk/YyqW8kMlSXowMYvUupsEei3R3ER3AB4zgCLcB/s1600/DSC01033.JPG)",
            "kategori" : "covid",
            "kapasitas": "22",
            "terpakai": "0",
            "tersedia": "22"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [109.794916, -7.72202]
        },
        "properties": {
            "title": "RSUD PREMBUN",
            "telp": "(0287) 6651146",
            "alamat" : "Jl. Slamet Riyadi No.53, Ngeposan, Prembun, Kec. Prembun, Kabupaten Kebumen, Jawa Tengah 54395",
            "buka" : "Buka 24 jam",
            "img": "url(https://rsudprembun.kebumenkab.go.id/assets/images/gallery/rsudprembun.kebumenkab.go.id.030517-2.JPG)",
            "kategori" : "covid",
            "kapasitas": "5",
            "terpakai": "0",
            "tersedia": "5"
        }
    }
]};

var klinik =
{
    "type": "FeatureCollection",
    "features": [
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [109.78482635188561, -7.719464663158885]
        },
        "properties": {
            "title": "Klinik Permata Ibu",
            "telp": "(0287) 3871296",
            "alamat" : "Jl. Raya Kebumen-Banyumas No.56, Tersobo Dua, Tersobo, Kec. Prembun, Kabupaten Kebumen, Jawa Tengah 54394",
            "buka" : "Buka 24 jam",
            "img": "url(https://1.bp.blogspot.com/-juc2gYCm1Fw/V9JNpye15KI/AAAAAAAAACo/nmnoNO8STd4FJ_ZdofAeP62i8P7b3k6zACEw/s1600/KLINIK%2BPI.jpg)",
            "kategori" : "non-covid"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [109.67104834906614, -7.683838412001469]
        },
        "properties": {
            "title": "RSIA Dewi Queen",
            "telp": "(0287) 381432",
            "alamat" : "Jl. Kutoarjo No.60, Kwarisan, Panjer, Kec. Kebumen, Kabupaten Kebumen, Jawa Tengah 54312",
            "buka" : "Buka 24 jam",
            "img": "url(https://www.populeria.com/wp-content/uploads/jadwal-dokter-rs-RSIA-Dewi-Queen-Kebumen.jpg)",
            "kategori" : "non-covid"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [109.66423765726914, -7.664132287873074]
        },
        "properties": {
            "title": "KLINIK PRATAMA RAWAT INAP SITI KHODIJAH",
            "telp": "(0287) 382102",
            "alamat" : "Jalan Sarbini No.175 Wonoyoso, Bumirejo, Kec. Kebumen, Kabupaten Kebumen, Jawa Tengah 54317",
            "buka" : "Buka 24 jam",
            "img": "url(https://1.bp.blogspot.com/-voaXisfE9tY/XiV8RwmkhTI/AAAAAAAAAQk/hCAtRdLSVQ8Kqfzyos-z8ZsvB-5C5FE1ACLcBGAsYHQ/s640/siti-khadijah.PNG)",
            "kategori" : "non-covid"
        }
    }
]};

// // Add the control to the map.
// map.addControl(
//     new MapboxGeocoder({
//         accessToken: mapboxgl.accessToken,
//         mapboxgl: mapboxgl
//     }),
//     'top-right'
// );

// Add geolocate control to the map.
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true,
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
        }),
        'bottom-right'
);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(),
    'bottom-right'
);

map.addControl(new mapboxgl.FullscreenControl(), 
    'bottom-right'
);

// add map directions
const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric',
    profile: 'mapbox/driving',
    alternatives: 'false',
    geometries: 'geojson'
    });
     
map.scrollZoom.enable();
map.addControl(directions, 'top-left');

directions.on('route', (event) => {
    const reports = document.getElementById('reports');
    reports.innerHTML = '';
    const report = reports.appendChild(document.createElement('div'));
    // Add IDs to the routes
    const routes = event.route.map((route, index) => ({
        ...route,
        id: index
    }));
     
    // Hide all routes by setting the opacity to zero.
    for (let i = 0; i < 3; i++) {
        map.setLayoutProperty(`route${i}`, 'visibility', 'none');
    }
     
    for (const route of routes) {
        // Make each route visible, by setting the opacity to 50%.
        map.setLayoutProperty(`route${route.id}`, 'visibility', 'visible');
     
        // Get GeoJSON LineString feature of route
        const routeLine = polyline.toGeoJSON(route.geometry);
     
        // Update the data for the route, updating the visual.
        map.getSource(`route${route.id}`).setData(routeLine);
     
        const isClear = turf.booleanDisjoint(obstacle, routeLine) === true;
        
        const collision = isClear ? 'is good!' : 'is bad.';
        const emoji = isClear ? '✔️' : '⚠️';
        const detail = isClear ? 'does not go' : 'goes';
        report.className = isClear ? 'item' : 'item warning';
     
        if (isClear) {
            map.setPaintProperty(`route${route.id}`, 'line-color', '#74c476');
        } else {
            map.setPaintProperty(`route${route.id}`, 'line-color', '#de2d26');
        }
     
        // Add a new report section to the sidebar.
        // Assign a unique `id` to the report.
        report.id = `report-${route.id}`;
     
        // Add the response to the individual report created above.
        const heading = report.appendChild(document.createElement('h3'));
     
        // Set the class type based on clear value.
        heading.className = isClear ? 'title' : 'warning';
        heading.innerHTML = `${emoji} Route ${route.id + 1} ${collision}`;
     
        // Add details to the individual report.
        const details = report.appendChild(document.createElement('div'));
        details.innerHTML = `This route ${detail} through an avoidance area.`;
        report.appendChild(document.createElement('hr'));
    }
});

// Wait until the map has finished loading.
map.on('load', () => {
    // Add a custom vector tileset source. This tileset contains
    // point features representing museums. Each feature contains
    // three properties. For example:
    // {
    //     alt_name: "Museo Arqueologico",
    //     name: "Museo Inka",
    //     tourism: "museum"
    // }
    map.addSource('covid', {
        'type': 'geojson',
        'data': rs
    });

    map.addLayer({
        'id': 'rs-covid',
        'type': 'circle',
        'source': 'covid',
        'layout': {
            // Make the layer visible by default.
            'visibility': 'visible'
        },
        'paint': {
            'circle-radius': 8,
            'circle-color': 'rgba(255, 67, 70, 1)'
        },
    });
     
    // Add the Mapbox Terrain v2 vector tileset. Read more about
    // the structure of data in this tileset in the documentation:
    // https://docs.mapbox.com/vector-tiles/reference/mapbox-terrain-v2/
    map.addSource('noncovid', {
        'type': 'geojson',
        'data': klinik
    });

    map.addLayer({
        'id': 'rs-noncovid',
        'type': 'circle',
        'source': 'noncovid',
        'layout': {
            // Make the layer visible by default.
            'visibility': 'visible'
        },
        'paint': {
            'circle-radius': 8,
            'circle-color': 'rgba(55,148,179,1)'
        },
    });
});
     
// After the last frame rendered before the map enters an "idle" state.
map.on('idle', () => {
// If these two layers were not added to the map, abort
if (!map.getLayer('rs-covid') || !map.getLayer('rs-noncovid')) {
return;
}
     
// Enumerate ids of the layers.
const toggleableLayerIds = ['rs-covid', 'rs-noncovid'];
    
// Set up the corresponding toggle button for each layer.
for (const id of toggleableLayerIds) {
    // Skip layers that already have a button set up.
    if (document.getElementById(id)) {
        continue;
    }
     
    // Create a link.
    const link = document.createElement('a');
    link.id = id;
    link.href = '#';
    link.textContent = id;
    link.className = 'active';
     
    // Show or hide layer when the toggle is clicked.
    link.onclick = function (e) {
    const clickedLayer = this.textContent;
    e.preventDefault();
    e.stopPropagation();
     
    const visibility = map.getLayoutProperty(
        clickedLayer,
        'visibility'
    );
     
    // Toggle layer visibility by changing the layout object's visibility property.
    if (visibility === 'visible') {
        map.setLayoutProperty(clickedLayer, 'visibility', 'none');
        this.className = '';
    } else {
        this.className = 'active';
        map.setLayoutProperty(
        clickedLayer,
        'visibility',
        'visible'
        );
    }
    };
     
    const layers = document.getElementById('menu');
        layers.appendChild(link);
    }
});

// Create a popup, but don't add it to the map yet.
const popupcovid = new mapboxgl.Popup({
    offset: 20,
    closeButton: false,
    closeOnClick: false
});

map.on('mousemove', function(e){
    var features = map.queryRenderedFeatures(e.point, {layers: ['rs-covid']});
    if(!features.length){
        popupcovid.remove();
        return;
    }
    var feature = features[0];
    popupcovid.setLngLat(feature.geometry.coordinates)
        .setHTML('<strong>' + feature.properties.title 
                    + '</strong><p>' + feature.properties.alamat + '</p>'
                    + '<p>' + feature.properties.telp + '</p>'
                    + '<strong><p>' + feature.properties.buka + '</strong></p>')
        .addTo(map);
    
    map.getCanvas().style.cursor = features.length ? 'pointer' : '';
});

const popupnoncovid = new mapboxgl.Popup({
    offset: 20,
    closeButton: false,
    closeOnClick: false
});

map.on('mousemove', function(e){
    var features = map.queryRenderedFeatures(e.point, {layers: ['rs-noncovid']});
    if(!features.length){
        popupnoncovid.remove();
        return;
    }
    var feature = features[0];
    popupnoncovid.setLngLat(feature.geometry.coordinates)
        .setHTML('<strong>' + feature.properties.title 
                    + '</strong><p>' + feature.properties.alamat + '</p>'
                    + '<p>' + feature.properties.telp + '</p>'
                    + '<strong><p>' + feature.properties.buka + '</strong></p>')
        .addTo(map);
    
    map.getCanvas().style.cursor = features.length ? 'pointer' : '';
});

// function toggleSidebar(id) {
//     const elem = document.getElementById(id);
//     // Add or remove the 'collapsed' CSS class from the sidebar element.
//     // Returns boolean "true" or "false" whether 'collapsed' is in the class list.
//     const collapsed = elem.classList.toggle('collapsed');
//     const padding = {};
//     // 'id' is 'right' or 'left'. When run at start, this object looks like: '{left: 300}';
//     padding[id] = collapsed ? 0 : 300; // 0 if collapsed, 300 px if not. This matches the width of the sidebars in the .sidebar CSS class.
//     // Use `map.easeTo()` with a padding option to adjust the map's center accounting for the position of sidebars.
//     map.easeTo({
//         padding: padding,
//         duration: 1000 // In ms. This matches the CSS transition duration property.
//     });


// }
     
// map.on('load', () => {
//     toggleSidebar('left');
// });