



export function ping() {
    return 'pong';
}

export let scriptId = getMyId();

// this could be a fuction to get some dynamic data
export function getData(id) {

var data = {
  "en": {
    "color": "#fa0715",
    "wether": "sunny",
    "name": "England"
  },
  "dk": {
    "color": "#fdc226",
    "wether": "rain",
    "name": "Danemark"
  },
  "se": {
    "color": "#84b9dd",
    "wether": "cloudy",
    "name": "Sweden"
  },
  "fi": {
    "color": "#82dcbb",
    "wether": "sunny",
    "name": "Finland"
  },
  "no": {
    "color": "#ff9fca",
    "wether": "rain",
    "name": "Norway"
  },
  "fr": {
    "color": "#00c3ff",
    "wether": "snow",
    "name": "France"
  }
};

return(data[id]);

};


function getMyId() {

    return document.currentScript.attributes.id.value;

}