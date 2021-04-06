mapboxgl.accessToken = 'pk.eyJ1Ijoiamh1bmtpbjIwMDAiLCJhIjoiY2tsaHc2NnR3MGhmbTJwcnJ2NzJmMTllYiJ9.cDhe2-o8YbirEdtqI1eyGg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-0.1434423, 51.5100944],
  zoom: 10
});

function tester() {

}

map.on('load', function () {
  map.addSource('lines', {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [{
        'type': 'Feature',
        'properties': {
          'id' : 'bakerloo',
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [-0.334443, 51.592058], //Harrow and Wealdstone
            [-0.316913, 51.58181], //Kenton
            [-0.308405, 51.570207], //South Kenton
            [-0.304179, 51.562858], //North Wembley
            [-0.296492, 51.552289], //Wembley Central
            [-0.276034, 51.5440095], //Stonebridge Park
            [-0.2573805, 51.5361868], //Harlesden
            [-0.244912, 51.532254], //Willesden Junction
            [-0.225241, 51.530527], //Kensal Green
            [-0.204623, 51.534139], //Queen's Park
            [-0.193863, 51.535062], //Kilburn Park
            [-0.185803, 51.529954], //Maida Vale
            [-0.183874, 51.523279], //Warwick Avenue
            [-0.176949, 51.516749], //Paddington
            [-0.1667749,51.5202601], //Edgware Road
            [-0.163711, 51.5224142], //Marylebone
            [-0.1572024, 51.5225096], //Baker Street
            [-0.146702, 51.523477], //Regent's Park
            [-0.1421346, 51.515286], //Oxford Circus
            [-0.1346593, 51.5098992], //Piccadilly Circus
            [-0.1262875, 51.5079824], //Charing Cross
            [-0.122171, 51.507302], //Embankment
            [-0.1143604, 51.50288], //Waterloo
            [-0.112093, 51.498936], //Lambeth North
            [-0.1006303, 51.4951991], //Elephant and Castle
          ]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'id' : 'central',
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [-0.437827, 51.569783], //West Ruislip
            [-0.411154, 51.560680], //Ruislip Gardens
            [-0.39854, 51.556508], //South Ruislip
            [-0.368314, 51.548079], //Northolt
            [-0.346371, 51.542326], //Greenford
            [-0.324008, 51.536668], //Perivale
            [-0.292913, 51.529956], //Hanger Lane
            [-0.2598128, 51.5234491], //North Acton
            [-0.2476346, 51.5168157], //East Acton
            [-0.224498, 51.512262], //White City
            [-0.218649, 51.504696], //Shepherd's Bush
            [-0.205576, 51.507395], //Holland Park
            [-0.196742, 51.509041], //Notting Hill Gate
            [-0.187123, 51.510506], //Queensway
            [-0.175447, 51.511846], //Lancaster Gate
            [-0.158336, 51.513427], //Marble Arch
            [-0.14916, 51.514265], //Bond Street
            [-0.1421346, 51.515286], //Oxford Circus
            [-0.13004, 51.516279], //Tottenham Court Road
            [-0.120104, 51.517549], //Holborn
            [-0.1115, 51.51821], //Chancery Lane
            [-0.0989687, 51.5154756], //St. Paul's
            [-0.0890211, 51.5133667], //Bank
            [-0.0818515, 51.5179503], //Liverpool Street
            [-0.0551604, 51.5272349], //Bethnal Green
            [-0.0336246, 51.5252965], //Mile End
            [-0.003335, 51.5412951], //Stratford
            [-0.0050763, 51.5567955], //Leyton
            [0.0083718, 51.5682344], //Leytonstone
            [0.0214327, 51.5809713], //Snaresbrook
            [0.027407, 51.5919609], //South Woodford
            [0.0340034, 51.6071489], //Woodford
            [0.0467913, 51.6262002], //Buckhurst Hill
            [0.05509, 51.6415127], //Loughton
            [0.0837381, 51.6453837], //Debden
            [0.1030902, 51.6717436], //Theydon Bois
            [0.1136871, 51.6936495] //Epping
          ]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'id' : 'centralD',
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [-0.302086, 51.514942], //Ealing Broadway
            [-0.280991, 51.517955], //West Acton
            [-0.2598128, 51.5234491], //North Acton
          ]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'id' : 'centralD2',
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [-0.0050763, 51.5567955], //Leytonstone
            [0.0285484, 51.5755911], //Wanstead
            [0.0453073, 51.5762764], //Redbridge
            [0.0656426, 51.5765433], //Gants Hill
            [0.090168, 51.5756395], //Newbury Park
            [0.088468, 51.5858477], //Barkingside
            [0.0909897, 51.5958979], //Fairlop
            [0.0934226, 51.6035596], //Hainault
          ]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'id' : 'centralD3',
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [0.027407, 51.5919609], //South Woodford
            [0.0437748, 51.6171388], //Roding Valley
            [0.075016, 51.6177546], //Chigwell
            [0.0921745, 51.6133087], //Grange Hill
            [0.0934226, 51.6035596] //Hainault
          ]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'id' : 'circle',
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [-0.2250647, 51.493527], //Hammersmith
            [-0.226661, 51.5017673], //Goldhawk Road
            [-0.2264074, 51.5056532], //Shepherd's Bush Market
            [-0.2241947, 51.5098112], //Wood Lane
            [-0.2178606, 51.5134304], //Latimer Road
            [-0.2109565, 51.5173871], //Ladbroke Grove
            [-0.2008355, 51.5209227], //Westbourne Park
            [-0.1883197, 51.5190858], //Royal Oak
            [-0.176949, 51.516749], //Paddington
            [-0.1667749,51.5202601], //Edgware Road
            [-0.1572024, 51.5225096], //Baker Street
            [-0.1440347, 51.523702], //Great Portland Street
            [-0.1351758, 51.5256238], //Euston Square
            [-0.1240381, 51.5303016], //King's Cross St Pancras
            [-0.1048428, 51.5202002], //Farringdon
            [-0.0984337, 51.520189], //Barbican
            [-0.0891615, 51.518396], //Liverpool Street
            [-0.0818515, 51.5179503], //Aldgate
            [-0.0756302, 51.5141661], //Tower Hill
            [-0.0767473, 51.5099446], //Monument
            [-0.086574, 51.5106358], //Cannon Street
            [-0.090449, 51.5113034], //Mansion House
            [-0.095328, 51.5118744], //Blackfriars
            [-0.1031797, 51.5114807], //Temple
            [-0.114191, 51.5110191], //Embankment
            [-0.122171, 51.507302], //Westminster
            [-0.1249484, 51.5012878], //St. James's Park
            [-0.134546, 51.499262], //Victoria
            [-0.1435901, 51.4963245], //Sloane Square
            [-0.1565762, 51.4923191], //South Kensington
            [-0.1740677, 51.494159], //Gloucester Road
            [-0.1837706, 51.4946023], //High Street Kensington
            [-0.1923245, 51.5005984], //Notting Hill Gate
            [-0.196742, 51.509041], //Bayswater
            [-0.1878876, 51.5122885], //Paddington
            [-0.1667749,51.5202601], //Edgware Road
          ]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'id' : 'district',
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [-0.302086, 51.514942], //Ealing Broadway
            [-0.2882582, 51.5102146], //Ealing Common
            [-0.2803381, 51.5029353], //Acton Town
            [-0.2678052, 51.494406], //Chiswick Park
            [-0.2548307, 51.4951757], //Turnham Green
            [-0.2457193, 51.4949675], //Stamford Brook
            [-0.2360679, 51.4941515], //Ravenscourt Park
            [-0.2250647, 51.493527], //Hammersmith
            [-0.2143562, 51.4903695], //Barons Court
            [-0.2060655, 51.4906876], //West Kensington
            [-0.1939996, 51.4915334], //Earl's Court
            [-0.2100886, 51.4977549], //Kensington Olympia
            [-0.1939996, 51.4915334], //Earl's Court (AGAIN)
            [-0.1740677, 51.494], //South Kensington
            [-0.1565762, 51.492], //Sloane Square
            [-0.1435901, 51.496], //Victoria
            [-0.134546, 51.499], //St. James's Park
            [-0.1249484, 51.501], //Westminster
            [-0.122171, 51.507], //Embankment
            [-0.114191, 51.511], //Temple
            [-0.1031797, 51.51115], //Blackfriars
            [-0.095328, 51.5117], //Mansion House
            [-0.090449, 51.5111], //Cannon Street
            [-0.086574, 51.5104], //Monument
            [-0.0767473, 51.5097], //Tower Hill
            [-0.0719853, 51.5152892], //Aldgate East
            [-0.0616835, 51.5193327], //Whitechapel
            [-0.046668, 51.5218868], //Stepney Green
            [-0.0336246, 51.5252965], //Mile End
            [-0.0249475, 51.5269058], //Bow Road
            [-0.0116753, 51.5247581], //Bromley-By-Bow
            [0.0050159, 51.528116], //West Ham
            [0.0177705, 51.5312949], //Plaistow
            [0.0352015, 51.5353591], //Upton Park
            [0.0513684, 51.5390056], //East Ham
            [0.0806849, 51.5395849], //Barking
            [0.1014786, 51.5383819], //Upney
            [0.1268695, 51.5403387], //Becontree
            [0.1475866, 51.5416641], //Dagenham Heathway
            [0.1657661, 51.5441436], //Dagenham East
            [0.198573, 51.5497636], //Elm Park
            [0.2187782, 51.5540251], //Hornchurch
            [0.2348741, 51.5583115], //Upminster Bridge
            [0.2508523, 51.5589113] //Upminster
          ]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'id' : 'districtD',
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [-0.3011332, 51.4632192], //Richmond
            [-0.2851021, 51.477111], //Kew Gardens
            [-0.275448, 51.4914581], //Gunnersbury
            [-0.2548307, 51.4951757] //Turnham Green
          ]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'id' : 'districtD2',
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [-0.2055978, 51.4216409], //Wimbledon
            [-0.1995027, 51.4344992], //Wimbledon Park
            [-0.2065854, 51.4453689], //Southfields
            [-0.2109582, 51.4590109], //East Putney
            [-0.2089652, 51.467951], //Putney Bridge
            [-0.2011795, 51.4752823], //Parsons Green
            [-0.1948952, 51.4805266], //Fulham Broadway
            [-0.1956153, 51.4872632], //West Brompton
            [-0.1939996, 51.4915334], //Earl's Court
            [-0.1837706, 51.4946023], //High Street Kensington
            [-0.1926, 51.5005984], //Notting Hill Gate
            [-0.196742, 51.509], //Bayswater
            [-0.1878876, 51.5124], //Paddington
            [-0.1667749,51.5202601], //Edgware Road
          ]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'id' : 'hammersmith',
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [-0.2250647, 51.493527], //Hammersmith
            [-0.2269, 51.5017673], //Goldhawk Road
            [-0.2266, 51.5056532], //Shepherd's Bush Market
            [-0.2243, 51.5099], //Wood Lane
            [-0.2179, 51.5135], //Latimer Road
            [-0.2112, 51.5175], //Ladbroke Grove
            [-0.2008355, 51.5211], //Westbourne Park
            [-0.1883197, 51.5192], //Royal Oak
            [-0.176949, 51.5169], //Paddington
            [-0.1667749,51.5204], //Edgware Road
            [-0.1572024, 51.5227], //Baker Street
            [-0.1440347, 51.5239], //Great Portland Street
            [-0.1351758, 51.5258], //Euston Square
            [-0.1240381, 51.5305],//King's Cross St. Pancras
            [-0.1048428, 51.5204], //Farringdon
            [-0.0984337, 51.5203], //Barbican
            [-0.0891615, 51.5185], //Moorgate
            [-0.0818515, 51.5181], //Liverpool Street
            [-0.0719853, 51.5154], //Aldgate East
            [-0.0616835, 51.5195], //Whitechapel
            [-0.046668, 51.5220], //Stepney Green
            [-0.0336246, 51.5254], //Mile End
            [-0.0249475, 51.5271], //Bow Road
            [-0.0116753, 51.5249], //Bromley-By-Bow
            [0.0050159, 51.5283], //West Ham
            [0.0177705, 51.5314], //Plaistow
            [0.0352015, 51.5355], //Upton Park
            [0.0513684, 51.5392], //East Ham
            [0.0806849, 51.5395849] //Barking
          ]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'id' : 'jubilee',
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [-0.3031446, 51.6195082], //Stanmore
            [-0.294754, 51.6075925], //Canons Park
            [-0.2863182, 51.5941718], //Queensbury
            [-0.2787298, 51.5848276], //Kingsbury
            [-0.279317, 51.563344], //Wembley Park
            [-0.24989, 51.5540146], //Neasden
            [-0.2389147, 51.551963], //Dollis Hill
            [-0.2214251, 51.5491599], //Willesden Green
            [-0.2043356, 51.5469128], //Kilburn
            [-0.1910422, 51.5466966], //West Hampstead
            [-0.1800178, 51.5468793], //Finchley Road
            [-0.1746973, 51.5430328], //Swiss Cottage
            [-0.1743318, 51.5346181], //St. John's Wood
            [-0.1572024, 51.5225096], //Baker Street
            [-0.14916, 51.514265], //Bond Street
            [-0.1430474, 51.5068696], //Green Park
            [-0.1249484, 51.5012878], //Westminster
            [-0.1143604, 51.50288], //Waterloo
            [-0.1050108, 51.5042139], //Southwark
            [-0.0852023, 51.5040441], //London Bridge
            [-0.0638603, 51.4978376], //Bermondsey
            [-0.0498108, 51.4979973], //Canada Water
            [-0.0178296, 51.5034508], //Canary Wharf
            [0.0034938, 51.5002258], //North Greenwich
            [0.0081124, 51.5139435], //Canning Town
            [0.0050159, 51.5283], //West Ham
            [-0.003335, 51.5412951] //Stratford
          ]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'id' : 'metropolitan',
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [-0.6075142, 51.6740954], //Amersham
            [-0.5607634, 51.6680243], //Chalfont and Latimer
            [-0.6111477, 51.7052026], //Chesham
            [-0.5607634, 51.6680243], //Chalfont and Latimer (Again)
            [-0.5184299, 51.6542139], //Chorleywood
            [-0.4736751, 51.6402591], //Rickmansworth
            [-0.4327417, 51.6297423], //Moor Park
            [-0.4418347, 51.6471075], //Croxley
            [-0.4174318, 51.6574563], //Watford
            [-0.4418347, 51.6471075], //Croxley (Again)
            [-0.4327417, 51.6297423], //Moor Park (Again)
            [-0.4237661, 51.6106759], //Northwood
            [-0.4094756, 51.6005234], //Northwood Hills
            [-0.3810562, 51.5927744], //Pinner
            [-0.3622797, 51.5847948], //North Harrow
            [-0.337119, 51.579398], //Harrow-on-the-Hill
            [-0.3179839, 51.5783992], //Northwick Park
            [-0.2950575, 51.5718751], //Preston Road
            [-0.279317, 51.563344], //Wembley Park
            [-0.1800178, 51.5468793], //Finchley Road
            [-0.1572024, 51.5225096], //Baker Street
            [-0.1440347, 51.5235], //Great Portland Street
            [-0.1352, 51.5254], //Euston Square
            [-0.1240381, 51.5301], //King's Cross St. Pancras
            [-0.1048428, 51.5198], //Farringdon
            [-0.0984337, 51.52], //Barbican
            [-0.0889, 51.5181], //Moorgate
            [-0.0819, 51.5177], //Liverpool Street
            [-0.0756302, 51.5141661] //Aldgate
          ]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'id' : 'metropolitanD',
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [-0.4776068, 51.5467391], //Uxbridge
            [-0.4500172, 51.5537639], //Hillingdon
            [-0.4420516, 51.5620142], //Ickenham
            [-0.4214565, 51.571454], //Ruislip
            [-0.4128013, 51.573161], //Ruislip
            [-0.3972883, 51.5765252], //Ruislip Manor
            [-0.3710299, 51.5750851], //Eastcote
            [-0.3530563, 51.579718], //West Harrow
            [-0.337119, 51.579398] //Harrow-on-the-Hill
          ]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'id' : 'northern',
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [-0.2750322, 51.6136577], //Edgware
            [-0.2642107, 51.6027331], //Burnt Oak
            [-0.2500758, 51.5954304], //Colindale
            [-0.2265363, 51.5833249], //Hendon Central
            [-0.2137601, 51.5766437], //Brent Cross
            [-0.1944744, 51.5723781], //Golders Green
            [-0.1783615, 51.5566808], //Hampstead
            [-0.1645116, 51.5502452], //Bellsize Park
            [-0.153824, 51.5440976], //Chalk Farm
            [-0.1427649, 51.5393757], //Camden Town
            [-0.138582, 51.5343135], //Mornington Crescent
            [-0.1338, 51.52817], //Euston
            [-0.1240381, 51.5303016], //King's Cross St. Pancras
            [-0.1060806, 51.5319364], //Angel
            [-0.0876635, 51.5256614], //Old Street
            [-0.0891615, 51.518396], //Moorgate
            [-0.0890211, 51.5133667], //Bank
            [-0.0852023, 51.5040441], //London Bridge
            [-0.093581, 51.5010201], //Borough
            [-0.1006303, 51.4951991], //Elephant and Castle
            [-0.106026, 51.4884111], //Kennington
            [-0.1124828, 51.4816205], // Oval
            [-0.122453, 51.4720772], //Stockwell
            [-0.1296636, 51.4650639], //Clapham North
            [-0.1381175, 51.4617812], //Clapham Common
            [-0.1476488, 51.4526616], //Clapham South
            [-0.1530342, 51.4433499], //Balham
            [-0.1596239, 51.4354945], //Tooting Bec
            [-0.1680541, 51.4275847], //Tooting Broadway
            [-0.1779992, 51.4181501], //Colliers Wood
            [-0.1923031, 51.4153094], //South Wimbledon
            [-0.1948554, 51.4023352] //Morden
          ]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'id' : 'northernD',
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [-0.1940015, 51.6503597], //High Barnet
            [-0.1793007, 51.6302627], //Totteridge and Whetstone
            [-0.1856446, 51.618042], //Woodside Park
            [-0.1884364, 51.6095235], //West Finchley
            [-0.1926442, 51.6009172], //Finchley Central
            [-0.2101117, 51.6082214], //Mill Hill East
            [-0.1926442, 51.6009172], //Finchley Central (Again)
            [-0.1648379, 51.587132], //East Finchley
            [-0.1458946, 51.5776272], //Highgate
            [-0.134993, 51.5653775], //Archway
            [-0.1385699, 51.5567892], //Tufnell Park
            [-0.1407831, 51.5506669], //Kentish Town
            [-0.1427649, 51.5393757], //Camden Town
            [-0.1342, 51.52817], //Euston
            [-0.1383215, 51.524562], //Warren Street
            [-0.134647, 51.5205446], //Goodge Street
            [-0.131, 51.516274], //Tottenham Court Road
            [-0.1282938, 51.5114948], //Leicester Square
            [-0.1262875, 51.5079824], //Charing Cross
            [-0.122171, 51.507302], //Embankment
            [-0.1143604, 51.50288], //Waterloo
            [-0.106026, 51.4884111], //Kennington
          ]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'id' : 'piccadilly',
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [-0.4776068, 51.5467391], //Uxbridge
            [-0.4500172, 51.5535], //Hillingdon
            [-0.4420516, 51.5618], //Ickenham
            [-0.4214565, 51.5712], //Ruislip
            [-0.4128013, 51.5729], //Ruislip Manor
            [-0.3972883, 51.5763], //Eastcote
            [-0.3710299, 51.5748], //Rayners Lane
            [-0.3524729, 51.5647312], //South Harrow
            [-0.3364014, 51.5569366], //Sudbury Hill
            [-0.3158077, 51.5507669], //Sudbury Town
            [-0.2996617, 51.5405909], //Alperton
            [-0.2844783, 51.5269774], //Park Royal
            [-0.2890028, 51.5174201], //North Ealing
            [-0.2882582, 51.5102146], //Ealing Common
            [-0.2803381, 51.5029353], //Acton Town
            [-0.2548307, 51.4951757], //Turnham Green
            [-0.2250647, 51.493527], //Hammersmith
            [-0.2143562, 51.4903695], //Barons Court
            [-0.1939996, 51.4915334], //Earl's Court
            [-0.1837706, 51.4944], //Gloucester Road
            [-0.1740677, 51.494159], //South Kensington
            [-0.1606755, 51.501596], //Knightsbridge
            [-0.154648, 51.5026379], //Hyde Park Corner
            [-0.1430474, 51.5068696], //Green Park
            [-0.1346593, 51.5098992], //Piccadilly Circus
            [-0.1282938, 51.5114948], //Leicester Square
            [-0.1243608, 51.5130791], //Covent Garden
            [-0.120104, 51.517549], //Holborn
            [-0.1243203, 51.5231115], //Russell Square
            [-0.1240381, 51.5303016], //King's Cross St. Pancras
            [-0.1184777, 51.5485676], //Caledonian Road
            [-0.1131438, 51.5530314], //Holloway Road
            [-0.1075189, 51.5586316], //Arsenal
            [-0.1060516, 51.5647152], //Finsbury Park
            [-0.0961689, 51.5706864], //Manor House
            [-0.1030407, 51.5904993], //Turnpike Lane
            [-0.1098777, 51.5974625], //Wood Green
            [-0.1244223, 51.6070936], //Bounds Green
            [-0.1333157, 51.616372], //Arnos Grove
            [-0.1278959, 51.6323045], //Southgate
            [-0.1319592, 51.6476054], //Oakwood
            [-0.1493776, 51.6516368], //Cockfosters
          ]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'id' : 'piccadillyD',
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [-0.4870848, 51.4715374], //Heathrow Terminal 5
            [-0.4529149, 51.4711647], //Heathrow Terminals 2 + 3
            [-0.4471666, 51.4591274], //Heathrow Terminal 4
            [-0.4233276, 51.4667315], //Hatton Cross
            [-0.4529149, 51.4711647], //Heathrow Terminal 2 + 3 (Again)
            [-0.4233276, 51.4667315], //Hatton Cross (Again)
            [-0.3858402, 51.4731204], //Hounslow West
            [-0.3666696, 51.4712883], //Hounslow Central
            [-0.356319, 51.4733376], //Hounslow East
            [-0.3522935, 51.4812464], //Osterley
            [-0.3249443, 51.4956594], //Boston Manor
            [-0.3140989, 51.4994233], //Northfields
            [-0.3069001, 51.5011629], //South Ealing
            [-0.2803381, 51.5029353], //Acton Town
          ]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'id' : 'victoria',
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [-0.0200029, 51.5829327], //Walthamstow Central
            [-0.041127, 51.5866181], //Blackhorse Road
            [-0.0691378, 51.5881802], //Tottenham Hale
            [-0.0749538, 51.5827784], //Seven Sisters
            [-0.1060516, 51.5647152], //Finsbury Park
            [-0.1047324, 51.5458943], //Highbury and Islington
            [-0.1240381, 51.5303016], //King's Cross St. Pancras
            [-0.1383215, 51.524562], //Warren Street
            [-0.1421346, 51.515286], //Oxford Circus
            [-0.1430474, 51.5068696], //Green Park
            [-0.1435901, 51.496], //Victoria
            [-0.1335613, 51.4891448], //Pimlico
            [-0.1249516, 51.485903], //Vauxhall
            [-0.122453, 51.4720772], //Stockwell
            [-0.1148907, 51.4625633], //Brixton
          ]
        }
      }
    ]
  }
});

  map.addLayer({
    'id': 'bakerloo',
    'type': 'line',
    'source': 'lines',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'rgb(159,102,74)',
      'line-width': 5
    },
    'filter': ['==', 'id', 'bakerloo']
  });

  map.addLayer({
    'id': 'central',
    'type': 'line',
    'source': 'lines',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round',
    },
    'paint': {
      'line-color': 'rgb(255,26,0)',
      'line-width': 5,
    },
    'filter': ['==', 'id', 'central']
  })

  map.addLayer({
    'id': 'centralD',
    'type': 'line',
    'source': 'lines',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'rgb(255,26,0)',
      'line-width': 5,

    },
    'filter': ['==', 'id', 'centralD']
  })

  map.addLayer({
    'id': 'centralD2',
    'type': 'line',
    'source': 'lines',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round',

    },
    'paint': {
      'line-color': 'rgb(255,26,0)',
      'line-width': 5,
    },
    'filter': ['==', 'id', 'centralD2']
  })

  map.addLayer({
    'id': 'centralD3',
    'type': 'line',
    'source': 'lines',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'rgb(255,26,0)',
      'line-width': 5,

    },
    'filter': ['==', 'id', 'centralD3']
  })

  map.addLayer({
    'id': 'circle',
    'type': 'line',
    'source': 'lines',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'rgb(255,230,0)',
      'line-width': 5,

    },
    'filter': ['==', 'id', 'circle']
  })

  map.addLayer({
    'id': 'district',
    'type': 'line',
    'source': 'lines',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'rgb(0,125,64)',
      'line-width': 5,

    },
    'filter': ['==', 'id', 'district']
  })

  map.addLayer({
    'id': 'districtD',
    'type': 'line',
    'source': 'lines',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'rgb(0,125,64)',
      'line-width': 5,

    },
    'filter': ['==', 'id', 'districtD']
  })

  map.addLayer({
    'id': 'districtD2',
    'type': 'line',
    'source': 'lines',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'rgb(0,125,64)',
      'line-width': 5,

    },
    'filter': ['==', 'id', 'districtD2']
  })

  map.addLayer({
    'id': 'hammersmith',
    'type': 'line',
    'source': 'lines',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'rgb(247,104,152)',
      'line-width': 5
    },
    'filter': ['==', 'id', 'hammersmith']
  })

  map.addLayer({
    'id': 'jubilee',
    'type': 'line',
    'source': 'lines',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'rgb(150,142,136)',
      'line-width': 5
    },
    'filter': ['==', 'id', 'jubilee']
  })

  map.addLayer({
    'id': 'metropolitan',
    'type': 'line',
    'source': 'lines',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'rgb(98,1,57)',
      'line-width': 5
    },
    'filter': ['==', 'id', 'metropolitan']
  })

  map.addLayer({
    'id': 'metropolitanD',
    'type': 'line',
    'source': 'lines',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'rgb(98,1,57)',
      'line-width': 5
    },
    'filter': ['==', 'id', 'metropolitanD']
  })

  map.addLayer({
    'id': 'northern',
    'type': 'line',
    'source': 'lines',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'rgb(0,0,0)',
      'line-width': 5
    },
    'filter': ['==', 'id', 'northern']
  })

  map.addLayer({
    'id': 'northernD',
    'type': 'line',
    'source': 'lines',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'rgb(0,0,0)',
      'line-width': 5
    },
    'filter': ['==', 'id', 'northernD']
  })

  map.addLayer({
    'id': 'piccadilly',
    'type': 'line',
    'source': 'lines',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'rgb(15,35,140)',
      'line-width': 5
    },
    'filter': ['==', 'id', 'piccadilly']
  })

  map.addLayer({
    'id': 'piccadillyD',
    'type': 'line',
    'source': 'lines',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'rgb(15,35,140)',
      'line-width': 5
    },
    'filter': ['==', 'id', 'piccadillyD']
  })

  map.addLayer({
    'id': 'victoria',
    'type': 'line',
    'source': 'lines',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': 'rgb(31,131,185)',
      'line-width': 5
    },
    'filter': ['==', 'id', 'victoria']
  })
});

map.on('idle', function () {
  // If these two layers have been added to the style,
  // add the toggle buttons.
  if (map.getLayer('bakerloo') && map.getLayer('central')) {
    // Enumerate ids of the layers.
    var toggleableLayerIds = ['bakerloo', 'central','circle','district','hammersmith','jubilee','metropolitan','northern','piccadilly','victoria'];
    // Set up the corresponding toggle button for each layer.
    for (var i = 0; i < toggleableLayerIds.length; i++) {
      var id = toggleableLayerIds[i];
      if (!document.getElementById(id)) {
        // Create a link.
        var link = document.createElement('button');
        link.id = id;
        link.href = '#';
        link.textContent = id;
        link.className = 'active';
        // Show or hide layer when the toggle is clicked.
        link.onclick = function (e) {
          var clickedLayer = this.textContent;
          e.preventDefault();
          e.stopPropagation();

          var visibility = map.getLayoutProperty(
          clickedLayer,
          'visibility'
        );

        // Toggle layer visibility by changing the layout object's visibility property.
        if (visibility === 'visible') {
          map.setLayoutProperty(
            clickedLayer,
            'visibility',
            'none'
          );
          this.className = '';
        } else {
          this.className = 'active';
          map.setLayoutProperty(
            clickedLayer,
            'visibility',
            'visible'
          );
        }

        if(this.textContent == 'central'){
          sample = ['centralD', 'centralD2','centralD3'];
          for(i = 0; i<sample.length; i++){
            var clickedLayer = sample[i];
            e.preventDefault();
            e.stopPropagation();

            var visibility = map.getLayoutProperty(
            clickedLayer,
            'visibility'
          );

          // Toggle layer visibility by changing the layout object's visibility property.
          if (visibility === 'visible') {
            map.setLayoutProperty(
              clickedLayer,
              'visibility',
              'none'
            );
            this.className = '';
          } else {
            this.className = 'active';
            map.setLayoutProperty(
              clickedLayer,
              'visibility',
              'visible'
            );
          }
        }
      }

      if(this.textContent == 'district'){
        sample = ['districtD', 'districtD2'];
        for(i = 0; i<sample.length; i++){
          var clickedLayer = sample[i];
          e.preventDefault();
          e.stopPropagation();

          var visibility = map.getLayoutProperty(
          clickedLayer,
          'visibility'
        );

        // Toggle layer visibility by changing the layout object's visibility property.
        if (visibility === 'visible') {
          map.setLayoutProperty(
            clickedLayer,
            'visibility',
            'none'
          );
          this.className = '';
        } else {
          this.className = 'active';
          map.setLayoutProperty(
            clickedLayer,
            'visibility',
            'visible'
          );
        }
      }
    }
    if(this.textContent == 'metropolitan'){
      sample = ['metropolitanD'];
      for(i = 0; i<sample.length; i++){
        var clickedLayer = sample[i];
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(
        clickedLayer,
        'visibility'
      );

      // Toggle layer visibility by changing the layout object's visibility property.
      if (visibility === 'visible') {
        map.setLayoutProperty(
          clickedLayer,
          'visibility',
          'none'
        );
        this.className = '';
      } else {
        this.className = 'active';
        map.setLayoutProperty(
          clickedLayer,
          'visibility',
          'visible'
        );
      }
    }
  }
  if(this.textContent == 'northern'){
    sample = ['northernD'];
    for(i = 0; i<sample.length; i++){
      var clickedLayer = sample[i];
      e.preventDefault();
      e.stopPropagation();

      var visibility = map.getLayoutProperty(
      clickedLayer,
      'visibility'
    );

    // Toggle layer visibility by changing the layout object's visibility property.
    if (visibility === 'visible') {
      map.setLayoutProperty(
        clickedLayer,
        'visibility',
        'none'
      );
      this.className = '';
    } else {
      this.className = 'active';
      map.setLayoutProperty(
        clickedLayer,
        'visibility',
        'visible'
      );
    }
  }
}
if(this.textContent == 'piccadilly'){
  sample = ['piccadillyD'];
  for(i = 0; i<sample.length; i++){
    var clickedLayer = sample[i];
    e.preventDefault();
    e.stopPropagation();

    var visibility = map.getLayoutProperty(
    clickedLayer,
    'visibility'
  );

  // Toggle layer visibility by changing the layout object's visibility property.
  if (visibility === 'visible') {
    map.setLayoutProperty(
      clickedLayer,
      'visibility',
      'none'
    );
    this.className = '';
  } else {
    this.className = 'active';
    map.setLayoutProperty(
      clickedLayer,
      'visibility',
      'visible'
    );
  }
}
}
    };

      var layers = document.getElementById('lines');
      layers.appendChild(link);
      }
    }
  }
});
