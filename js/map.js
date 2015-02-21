function initialize(){
  var mapOptions = {
    zoom: 13,
    center: {lat: 40.736410, lng: -73.993803}
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var locations = [
    {name: 'Soho', address: '154 GRAND STREET, NEW YORK, NY 10013', lat: 40.720251, lng: -73.998676},
    {name: 'Nomad', address: '79 MADISON AVE, NEW YORK, NY 10016', lat: 40.744220, lng: -73.985369},
    {name: 'Bryant Park', address: '54 W. 40TH STREET, NEW YORK, NY 10018', lat: 40.752966, lng: -73.984234},
    {name: 'Charging Bull', address: '25 BROADWAY, NEW YORK, NY 10004', lat: 40.705571, lng: -74.013854},
    {name: 'Empire State', address: '349 5TH AVENUE, NEW YORK, NY 10016', lat: 40.748118, lng: -73.984329},
    {name: 'Fulton Center', address: '222 BROADWAY, 19TH FLOOR, NEW YORK, NY 10038', lat: 40.710960, lng: -74.008450},
    {name: 'Grammercy', address: '120 E. 23RD ST, NEW YORK, NY 10010', lat: 40.739488, lng: -73.985699},
    {name: 'Madison', address: '261 MADISON AVENUE, NEW YORK, NY 10016', lat: 40.750501, lng: -73.980608},
    {name: 'Meatpacking', address: '1 LITTLE WEST 12TH STREET, NEW YORK, NY 10014', lat: 40.739706, lng: -74.005959},
    {name: 'Park South', address: '401 PARK AVENUE SOUTH, NEW YORK, NY 10016', lat: 40.742936, lng: -73.984006},
    {name: 'Soho West', address: '175 VARICK STREET, NEW YORK, NY 10014', lat: 40.727451, lng: -74.005938},
    {name: 'West Broadway', address: '379 WEST BROADWAY, NEW YORK, NY 10012', lat: 40.723540, lng: -74.002187},
    {name: '42nd Street', address: '79 MADISON AVE, NEW YORK, NY 10016', lat: 40.750792, lng: -73.973699},
    {name: 'Dumbo', address: '81 PROSPECT STREET, BROOKLYN, NY 07307', lat: 40.700886, lng: -73.987461}
  ];

  locations.forEach(function(element, index, array){
    var marker, content;

    marker = createMarker(element);
    content = createInfoWindow(element, marker);
  });

  function createMarker(element){
    var coordinates = new google.maps.LatLng(element.lat, element.lng); 

    var marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      title: element.name
    });

    return marker;
  }

  function createInfoWindow(element, marker){
    var contentString;

    contentString = "<div><span>" + element.name + "</span></div><div>" + element.address + "</div>";

    var infoWindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 150
    });

    google.maps.event.addListener(marker, 'click', function(){
      infoWindow.open(map, marker);
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);


