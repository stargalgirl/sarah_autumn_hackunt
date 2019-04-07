import React from 'react';

class GetLocation extends React.Component {
    geocoder
    city

    codeLatLng(lat, lng) {
  
      var latlng = new google.maps.LatLng(lat, lng);
      this.geocoder.geocode({'latLng': latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
        console.log(results)
          if (results[1]) {
           //formatted address
           alert(results[0].formatted_address)
          //find country name
               for (var i=0; i<results[0].address_components.length; i++) {
              for (var b=0;b<results[0].address_components[i].types.length;b++) {
  
              //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                  if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                      //this is the object you are looking for
                      this.city= results[0].address_components[i];
                      break;
                  }
              }
          }
          //city data
          alert(this.city.short_name + " " + this.city.long_name)
  
          } else {
            alert("No results found");
          }
        } else {
          alert("Geocoder failed due to: " + status);
        }
      });
    }

    
  //Get the latitude and the longitude;
  successFunction(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      this.codeLatLng(lat, lng)
  }
  
  errorFunction(){
      alert("Geocoder failed");
  }
  
  initialize() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.successFunction, this.errorFunction);
      }else{
        this.geocoder = new google.maps.Geocoder();
      }  
  }

  render(){
    this.initialize()
    return(
      <div></div>
    );
  }

}
export default GetLocation;