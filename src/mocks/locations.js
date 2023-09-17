const locations = [
  {
    street: "123 Main St",
    city: "New York",
    state: "New York",
    zipCode: "10001",
    longitude: -74.006,
    latitude: 40.7128,
    geolocation: "POINT(-74.006 40.7128)",
  },
  {
    street: "456 Elm St",
    city: "Los Angeles",
    state: "California",
    zipCode: "90001",
    longitude: -118.2437,
    latitude: 34.0522,
    geolocation: "POINT(-118.2437 34.0522)",
  },
  {
    street: "789 Oak St",
    city: "Chicago",
    state: "Illinois",
    zipCode: "60601",
    longitude: -87.6233,
    latitude: 41.8819,
    geolocation: "POINT(-87.6233 41.8819)",
  },
  {
    street: "101 Pine St",
    city: "San Francisco",
    state: "California",
    zipCode: "94101",
    longitude: -122.4194,
    latitude: 37.7749,
    geolocation: "POINT(-122.4194 37.7749)",
  },
  {
    street: "202 Maple St",
    city: "Houston",
    state: "Texas",
    zipCode: "77001",
    longitude: -95.3698,
    latitude: 29.7604,
    geolocation: "POINT(-95.3698 29.7604)",
  },
  {
    street: "303 Cedar St",
    city: "Miami",
    state: "Florida",
    zipCode: "33101",
    longitude: -80.1918,
    latitude: 25.7617,
    geolocation: "POINT(-80.1918 25.7617)",
  },
  {
    street: "404 Birch St",
    city: "Phoenix",
    state: "Arizona",
    zipCode: "85001",
    longitude: -112.074,
    latitude: 33.4484,
    geolocation: "POINT(-112.0740 33.4484)",
  },
  {
    street: "505 Walnut St",
    city: "Philadelphia",
    state: "Pennsylvania",
    zipCode: "19101",
    longitude: -75.1652,
    latitude: 39.9526,
    geolocation: "POINT(-75.1652 39.9526)",
  },
  {
    street: "606 Cherry St",
    city: "San Antonio",
    state: "Texas",
    zipCode: "78201",
    longitude: -98.4936,
    latitude: 29.4241,
    geolocation: "POINT(-98.4936 29.4241)",
  },
  {
    street: "707 Pine St",
    city: "San Diego",
    state: "California",
    zipCode: "92101",
    longitude: -117.1611,
    latitude: 32.7157,
    geolocation: "POINT(-117.1611 32.7157)",
  },
  {
    street: "808 Oak St",
    city: "Dallas",
    state: "Texas",
    zipCode: "75201",
    longitude: -96.797,
    latitude: 32.7767,
    geolocation: "POINT(-96.7970 32.7767)",
  },
  {
    street: "909 Maple St",
    city: "San Jose",
    state: "California",
    zipCode: "95101",
    longitude: -121.8906,
    latitude: 37.3382,
    geolocation: "POINT(-121.8906 37.3382)",
  },
  {
    street: "1010 Elm St",
    city: "Austin",
    state: "Texas",
    zipCode: "73301",
    longitude: -97.7431,
    latitude: 30.2672,
    geolocation: "POINT(-97.7431 30.2672)",
  },
  {
    street: "1111 Cedar St",
    city: "Jacksonville",
    state: "Florida",
    zipCode: "32201",
    longitude: -81.6557,
    latitude: 30.3322,
    geolocation: "POINT(-81.6557 30.3322)",
  },
  {
    street: "1212 Pine St",
    city: "Fort Worth",
    state: "Texas",
    zipCode: "76101",
    longitude: -97.3301,
    latitude: 32.7555,
    geolocation: "POINT(-97.3301 32.7555)",
  },
  {
    street: "1313 Maple St",
    city: "Columbus",
    state: "Ohio",
    zipCode: "43201",
    longitude: -82.9988,
    latitude: 39.9612,
    geolocation: "POINT(-82.9988 39.9612)",
  },
  {
    street: "1414 Oak St",
    city: "Charlotte",
    state: "North Carolina",
    zipCode: "28201",
    longitude: -80.8431,
    latitude: 35.2271,
    geolocation: "POINT(-80.8431 35.2271)",
  },
  {
    street: "1515 Elm St",
    city: "San Francisco",
    state: "California",
    zipCode: "94101",
    longitude: -122.4194,
    latitude: 37.7749,
    geolocation: "POINT(-122.4194 37.7749)",
  },
  {
    street: "1616 Pine St",
    city: "Indianapolis",
    state: "Indiana",
    zipCode: "46201",
    longitude: -86.1581,
    latitude: 39.7684,
    geolocation: "POINT(-86.1581 39.7684)",
  },
  {
    street: "1717 Maple St",
    city: "Seattle",
    state: "Washington",
    zipCode: "98101",
    longitude: -122.3321,
    latitude: 47.6062,
    geolocation: "POINT(-122.3321 47.6062)",
  },
  {
    street: "1818 Oak St",
    city: "Denver",
    state: "Colorado",
    zipCode: "80201",
    longitude: -104.9847,
    latitude: 39.7392,
    geolocation: "POINT(-104.9847 39.7392)",
  },
  {
    street: "1919 Cedar St",
    city: "Boston",
    state: "Massachusetts",
    zipCode: "02101",
    longitude: -71.0589,
    latitude: 42.3601,
    geolocation: "POINT(-71.0589 42.3601)",
  },
  {
    street: "2020 Elm St",
    city: "Nashville",
    state: "Tennessee",
    zipCode: "37201",
    longitude: -86.7816,
    latitude: 36.1627,
    geolocation: "POINT(-86.7816 36.1627)",
  },
  {
    street: "2121 Pine St",
    city: "Portland",
    state: "Oregon",
    zipCode: "97201",
    longitude: -122.677,
    latitude: 45.5231,
    geolocation: "POINT(-122.6770 45.5231)",
  },
  {
    street: "2222 Maple St",
    city: "Oklahoma City",
    state: "Oklahoma",
    zipCode: "73101",
    longitude: -97.5164,
    latitude: 35.4634,
    geolocation: "POINT(-97.5164 35.4634)",
  },
  {
    street: "2323 Cedar St",
    city: "Las Vegas",
    state: "Nevada",
    zipCode: "89101",
    longitude: -115.1398,
    latitude: 36.1699,
    geolocation: "POINT(-115.1398 36.1699)",
  },
  {
    street: "2424 Oak St",
    city: "Milwaukee",
    state: "Wisconsin",
    zipCode: "53201",
    longitude: -87.9065,
    latitude: 43.0389,
    geolocation: "POINT(-87.9065 43.0389)",
  },
  {
    street: "2525 Elm St",
    city: "Albuquerque",
    state: "New Mexico",
    zipCode: "87101",
    longitude: -106.6504,
    latitude: 35.0844,
    geolocation: "POINT(-106.6504 35.0844)",
  },
  {
    street: "2626 Pine St",
    city: "Tucson",
    state: "Arizona",
    zipCode: "85701",
    longitude: -110.9747,
    latitude: 32.2226,
    geolocation: "POINT(-110.9747 32.2226)",
  },
  {
    street: "2727 Maple St",
    city: "Fresno",
    state: "California",
    zipCode: "93701",
    longitude: -119.7726,
    latitude: 36.7783,
    geolocation: "POINT(-119.7726 36.7783)",
  },
  {
    street: "2828 Cedar St",
    city: "Sacramento",
    state: "California",
    zipCode: "95801",
    longitude: -121.4944,
    latitude: 38.5816,
    geolocation: "POINT(-121.4944 38.5816)",
  },
  {
    street: "2929 Oak St",
    city: "Long Beach",
    state: "California",
    zipCode: "90801",
    longitude: -118.1937,
    latitude: 33.7701,
    geolocation: "POINT(-118.1937 33.7701)",
  },
  {
    street: "3030 Elm St",
    city: "Kansas City",
    state: "Missouri",
    zipCode: "64101",
    longitude: -94.5786,
    latitude: 39.0997,
    geolocation: "POINT(-94.5786 39.0997)",
  },
  {
    street: "3131 Pine St",
    city: "Mesa",
    state: "Arizona",
    zipCode: "85201",
    longitude: -111.8315,
    latitude: 33.4152,
    geolocation: "POINT(-111.8315 33.4152)",
  },
  {
    street: "3232 Maple St",
    city: "Virginia Beach",
    state: "Virginia",
    zipCode: "23450",
    longitude: -75.978,
    latitude: 36.8529,
    geolocation: "POINT(-75.9780 36.8529)",
  },
  {
    street: "3333 Cedar St",
    city: "Atlanta",
    state: "Georgia",
    zipCode: "30301",
    longitude: -84.3871,
    latitude: 33.7489,
    geolocation: "POINT(-84.3871 33.7489)",
  },
  {
    street: "3434 Oak St",
    city: "Colorado Springs",
    state: "Colorado",
    zipCode: "80901",
    longitude: -104.8214,
    latitude: 38.8339,
    geolocation: "POINT(-104.8214 38.8339)",
  },
  {
    street: "3535 Elm St",
    city: "Raleigh",
    state: "North Carolina",
    zipCode: "27601",
    longitude: -78.6382,
    latitude: 35.7796,
    geolocation: "POINT(-78.6382 35.7796)",
  },
  {
    street: "3636 Pine St",
    city: "Omaha",
    state: "Nebraska",
    zipCode: "68101",
    longitude: -95.9401,
    latitude: 41.2565,
    geolocation: "POINT(-95.9401 41.2565)",
  },
  {
    street: "3737 Maple St",
    city: "Miami",
    state: "Florida",
    zipCode: "33101",
    longitude: -80.1918,
    latitude: 25.7617,
    geolocation: "POINT(-80.1918 25.7617)",
  },
  {
    street: "3838 Cedar St",
    city: "Tulsa",
    state: "Oklahoma",
    zipCode: "74101",
    longitude: -95.9928,
    latitude: 36.154,
    geolocation: "POINT(-95.9928 36.1540)",
  },
  {
    street: "3939 Oak St",
    city: "Minneapolis",
    state: "Minnesota",
    zipCode: "55401",
    longitude: -93.2648,
    latitude: 44.9778,
    geolocation: "POINT(-93.2648 44.9778)",
  },
];

module.exports = locations;