var locations = [
                ['Durgapur', 23.5204, 87.3119,0, 'http://127.0.0.1:5000/durgapur'],
                ['Fuljhore', 23.5361,  87.3395,0, 'http://127.0.0.1:5000/'],
                ['Asansol',  23.6739,  86.9524,0, 'http://127.0.0.1:5000/asansol']
            ];

            var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 9,
            center: new google.maps.LatLng(23.5204, 87.3119),
            mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            var infowindow = new google.maps.InfoWindow();

            var marker, i;

            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                url: locations[i][4]
            });

            google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
            })(marker, i));

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
                window.location.href = this.url;
            }
            })(marker, i));

                }