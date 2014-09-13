var data={};
data.rims = {
      "Reynolds" : {
        "Reynolds Attack Clincher" : {
           "holeCount" : 24,
           "maxRiderWeight" : 275
        },
        "Chris Attack Clincher" : {
           "holeCount" : 20,
           "maxRiderWeight" : 350
        }

      }
};

data.hubs = {
  "American Classic" : {
     "model": "American Classic Disc 130 Front Hub",
     "spokeHoleDrillings" : 24,
     "Front" : "T"
  },
  "Mexican Classic" : {
     "model": "Mexican Classic Disc 100 Rear Hub",
     "spokeHoleDrillings" : 20,
     "Front" : "R"
  },

};


console.log(data.rims["Reynolds"]["Reynolds Attack Clincher"].holeCount);
