import React from 'react'
class Map extends React.Component{

    constructor(){
        var geocoder;
        var map;
    }

    initialize() {
    this.geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var mapOptions = {
        zoom: 8,
        center: latlng
    }
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    }

    codeAddress() {
    var address = (document.getElementById('address')).value;
    this.geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == 'OK') {
        this.map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: this.map,
            position: results[0].geometry.location
        });
        } else {
        alert('Geocode was not successful for the following reason: ' + status);
        }
    });
    }
    render(){
        this.initialize();
    }
}
export default Map;
