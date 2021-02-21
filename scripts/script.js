// Declare Variables
var bakerlooLine = ["Harrow and Wealdstone", "Kenton", "South Kenton", "North Wembley", "Wembley Central", "Stonebridge Park", "Harlesden", "Willesden Junction", "Kensal Green", "Queen's Garden", "Kilburn Park", "Maida Vale", "Warwick Avenue", "Paddington", "Edgware Road", "Marylebone", "Baker Street", "Regent's Park", "Oxford Circus", "Piccadilly Circus", "Charing Cross", "Embankment", "Waterloo", "Lambeth North", "Elephant and Castle"];

var centralLine = [[["West Ruislip", "Ruislip Gardens", "South Ruislip", "Northolt", "Greenford", "Perivale", "Hanger Lane"],["Ealing Broadway", "West Acton"]], "North Acton", "East Acton", "White City", "Shepherd's Bush", "Holland Park", "Notting Hill Gate", "Queensway", "Lancaster Gate", "Marble Arch", "Bond Street", "Oxford Circus", "Tottenham Court Road", "Holborn", "Chancery Lane", "St. Paul's", "Bank", "Liverpool Street", "Bethnal Green", "Mile End", "Stratford", "Leyton", "Leytonstone", [["Wanstead", "Redbridge", "Gants Hill", "Newbury Park", "Barkingside", "Fairlop", "Hainault"],["Snaresbrook", "South Woodford", [["Woodford", "Buckhurst Hill", "Loughton", "Debden", "Theydon Bois", "Epping"],["Woodford", "Roding Valley", "Chigwell", "Grange Hill", "Hainault"]]]]];

var circleLine = ["Hammersmith", "Goldhawk Road" ,"Shepherd's Bush Market", "Wood Lane", "Latimer Road", "Ladbroke Grove", "Westbourne Park", "Royal Oak", "Paddington", "Edgware Road", "Baker Street", "Great Portland Street", "Euston Square", "King's Cross St. Pancras", "Farringdon", "Barbican", "Moorgate", "Liverpool Street", "Aldgate", "Tower Hill", "Monument", "Cannon Street", "Mansion House", "Blackfriars", "Temple", "Embankment", "Westminster", "St. James's Park", "Victoria", "Sloane Square", "South Kensington", "Gloucester Road", "High Street Kensington", "Notting Hill Gate", "Bayswater", "Paddington", "Edgware Road"];

var districtLine = [[["Ealing Broadway", "Ealing Common", "Acton Town", "Chiswick Park"],["Richmond", "Kew Gardens", "Gunnersbury"]],"Turnham Green", "Stamford Brook", "Ravenscourt Park", "Hammersmith", "Barons Court", "West Kensington", "Earl's Court", [["Kensington Olympia"],["West Brompton", "Fulham Broadway", "Parsons Green", "Putney Bridge", "East Putney", "Southfields", "Wimbledon Park", "Wimbledon"],["High Street Kensington", "Notting Hill Gate", "Bayswater", "Paddington", "Edgware Road"],["Gloucester Road", "South Kensington", "Sloane Square", "Victoria", "St. James's Park", "Westminster", "Embankment", "Temple", "Blackfriars", "Mansion House", "Cannon Street", "Monument", "Tower Hill", "Aldgate East", "Whitechapel", "Stepney Green", "Mile End", "Bow Road", "Bromley-by-Bow", "West Ham", "Plaistow", "Upton Park", "East Ham", "Barking", "Upney", "Becontree", "Dagenham Heathway", "Dagenham East", "Elm Park", "Hornchurch", "Upminster Bridge", "Upminster"]]];

var hammersmithLine = ["Hammersmith", "Goldhawk Road", "Shepherd's Bush Market", "Wood Lane", "Latimer Road", "Ladbroke Grove", "Westbourne Park", "Royal Oak", "Edgware Road", "Baker Street", "Great Portland Street", "Euston Square", "King's Cross St. Pancras", "Farringdon", "Barbican", "Moorgate", "Liverpool Street", "Aldgate East", "Whitechapel", "Stepney Green", "Mile End", "Bow Road", "Bromley-by-Bow", "West Ham", "Plaistow", "Upton Park", "East Ham", "Barking"];

var jubileeLine = ["Stanmore", "Canons Park", "Queensbury", "Kingsbury", "Wembley Park", "Neasden", "Dollis Hill", "Willesden Green", "Kilburn", "West Hampstead", "Finchley Road", "Swiss Cottage", "St. John's Wood", "Baker Street", "Bond Street", "Green Park", "Westminster", "Waterloo", "Southwark", "London Bridge", "Bermondsey", "Canada Water", "Canary Wharf", "North Greenwich", "Canning Town", "West Ham", "Stratford"];

var metropolitanLine = [[[[[[["Amersham"],["Chesham"]],"Chalfont and Latimer", "Chorleywood", "Rickmansworth"],["Watford", "Croxley"]], "Moor Park", "Northwood", "Northwood Hills", "Pinner", "North Harrow"],["Uxbridge", "Hillingdon", "Ickenham", "Ruislip", "Ruislip Manor", "Eastcote", "Rayners Lane", "West Harrow"]], "Harrow-on-the-Hill", "Northwick Park", "Preston Road", "Wembley Park", "Finchley Road", "Baker Street", "Great Portland Street", "Euston Square", "King's Cross St. Pancras", "Farringdon", "Barbican", "Moorgate", "Liverpool Street", "Aldgate"];

var northernLine = [[["Edgware", "Burnt Oak", "Colindale", "Hendon Central", "Brent Cross", "Golders Green", "Hampstead", "Bellsize park", "Chalk Farm"],[[["Mill Hill East"], ["High Barnet", "Totteridge and Whetstone", "Woodside Park", "West Finchley"]], "Finchley Central", "East Finchley", "Highgate", "Archway", "Tufnell Park", "Kentish Town"]],"Camden Town", [["Mornington Crescent", "Euston", "Warren Street", "Goodge Street", "Tottenham Court Road", "Leicester Square", "Charing Cross", "Embankment", "Waterloo", "Kennington"],["Euston Square", "King's Cross St. Pancras", "Angel", "Old Street", "Moorgate", "Bank", "London Bridge", "Borough", "Elephant and Castle", "Kennington"]], "Oval", "Stockwell", "Clapham North", "Clapham Common", "Clapham South", "Balham", "Tooting Bec", "Tooting Broadway", "Colliers Wood", "South Wimbledon", "Morden"];

var piccadillyLine = [[["Uxbridge", "Hillingdon", "Ickenham", "Ruislip", "Ruislip Manor", "Eastcote", "Rayners Lane", "South Harrow", "Sudbury Hill", "Sudbury Town", "Alperton", "Park Royal", "North Ealing", "Ealing Common", "Acton Town"],["Heathrow Terminal 5", "Heathrow Terminals 1,2,3", "Heathrow Terminal 4", "Hatton Cross", "Hounslow Cross", "Hounslow Central", "Hounslow East", "Osterley", "Boston Manor", "Northfields", "South Ealing", "Acton Town"]], "Turnham Green", "Hammersmith", "Barons Court", "Earl's Court", "Gloucester Road", "South Kensington", "Knightsbridge", "Hyde Park Corner", "Green Park", "Piccadilly Circus", "Leicester Square", "Covent Garden", "Holborn", "Russell Square", "King's Cross St. Pancras", "Caledonian Road", "Holloway Road", "Arsenal", "Finsbury Park", "Manor House", "Turnpike Lane", "Wood Green", "Bounds Green", "Arnos Grove", "Southgate", "Oakwood", "Cockfosters"];

var victoriaLine = ["Walthamstow Central", "Blackhorse Road", "Tottenham Hale", "Seven Sisters", "Finsbury Park", "Highbury and Islington", "King's Cross St. Pancras", "Euston", "Warren Street", "Oxford Circus", "Green Park", "Victoria", "Pimlico", "Vaxhall", "Stockwell", "Brixton"];

var waterlooCityLine = ["Waterloo", "Bank"];

var dlrLine = ["Lewisham","Elverson Road", "Deptford Bridge", "Greenwich", "Cutty Sark", "Island Gardens", "Mudchute", "Crossharbour", "Millenium Quarter", "Heron Quays", "Canary Wharf", "West India Quay", "Poplar", [["Westferry", "Limehouse", "Shadwell", [["Tower Gateway"],["Bank"]]],["All Saints", "Langdon Park", "Devons Road", "Bow Church", "Pudding Mill Lane", "Stratford", [["Stratford International"],["Stratford Market", "Abbey Road", "West Ham", "Star Lane", "Canning Town"]]],["Blackwall" , "East India", "Canning Town"]], [["Star Lane", "West Ham", "Abbey Road", "Stratford Market", "Stratford",[["Stratford International"],["Pudding Mill Lane", "Bow Church", "Devons Road", "Langdon Park", "All Saints", "Poplar"]]],["Royal Victoria", "Custom House", "Prince Regent", "Royal Albert", "Beckton Park", "Cyprus", "Gallions Reach", "Beckton"],["Thames Wharf", "West Silvertown", "Pontoon Dock", "London City Airport", "King George V", "Woolwich Arsenal"]]];



// Functionality
function clearText(elementID){
  document.getElementById(elementID).innerHTML = "";
}

function selectLine(line){
  clearText("stationSelector");
  for (var i = 0; i < line.length; i++) {
    var para = document.createElement("p");
    var node = document.createTextNode(line[i]);
    para.appendChild(node);
    var element = document.getElementById("stationSelector");
    element.appendChild(para);

    var startSel = document.createElement("button");
    var startNode = document.createTextNode("Start");
    startSel.appendChild(startNode);
    startSel.onclick = function() {startSelector()}
    element.appendChild(startSel);

    var endSel = document.createElement("button");
    var endNode = document.createTextNode("End");
    endSel.appendChild(endNode);
    element.appendChild(endSel);


    var stationID = "station" + i;
    para.setAttribute("id", stationID);
    startSel.setAttribute("id", stationID);
    endSel.setAttribute("id", stationID);
  }

  function startSelector(){
    clearText("routeFinder");
    document.getElementById("routeFinder").innerHTML = "<h2>Select a start station:</h2>"
    var startPara = document.createElement("p");
    var stationNode = document.createTextNode("HELLO THERE");
    startPara.appendChild(stationNode);
    var routeElement = document.getElementById("routeFinder");
    routeElement.appendChild(startPara);
  }

  function endSelector(stationName){


  }
}
