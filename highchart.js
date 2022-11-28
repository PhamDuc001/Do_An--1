// // Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
var firebaseConfig = {
  apiKey: "AIzaSyB0A_xZEG6bZIAMJYnsllxeP_Z8Aix-Pyc",
  authDomain: "esp-8266-2d864.firebaseapp.com",
  databaseURL: "https://esp-8266-2d864-default-rtdb.firebaseio.com",
  projectId: "esp-8266-2d864",
  storageBucket: "esp-8266-2d864.appspot.com",
  messagingSenderId: "1094755435358",
  appId: "1:1094755435358:web:fbd33d91956d7cd79ac5cf",
  measurementId: "G-C1CN2L7PK2"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var updateItem
var listTemp = []
var listHumid = []
var listTime = []
var arrTime = []
var listTempNum = []
var listHumidNum = []

var getUpdate = function (snapshot) {
  updateItem = snapshot.val();

  function unique(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
      }
    }
    return newArr
  }

  Object.keys(updateItem).forEach(key => {

    listHumidNum.push(Number(updateItem[key].Humid))
    while (listHumidNum.length > 10) {
      listHumidNum.shift()
    }
    listHumidNum = listHumidNum.filter(item => isNaN(item) == false)

    listTempNum.push(Number(updateItem[key].Temp))
    while (listTempNum.length > 10) {
      listTempNum.shift()
    }
    // listTempNum = unique(listTempNum)

    listTime.push(key)
    while (listTime.length > 10) {
      listTime.shift()
    }
    listTime = unique(listTime)
  })



  
  Highcharts.chart('container', {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Biểu đồ nhiệt độ'
    },
    subtitle: {
      text: 'Source: ' +
        'DHT22-Hà Nội'
    },
    xAxis: {
      categories: listTime.length > 2 ? listTime : ["16:34:22", "16:35:33", "16:36:23", "16:37:44", "16:38:55"],
      accessibility: {
        description: 'Months of the year'
      }
    },
    yAxis: {
      title: {
        text: 'Temperature'
      },
      labels: {
        formatter: function () {
          return this.value + '°';
        }
      }
    },
    tooltip: {
      crosshairs: true,
      shared: true
    },
    plotOptions: {
      spline: {
        marker: {
          radius: 4,
          lineColor: '#666666',
          lineWidth: 1
        }
      }
    },
    series: [{
      name: 'Temperature',
      marker: {
        symbol: 'square'
      },
      data: listTempNum.length > 2 ? listTempNum : [20, 21, 22, 24, 25]

    }, {
      name: 'Humidty',
      marker: {
        symbol: 'diamond'
      },
      data: listHumidNum.length > 2 ? listHumidNum : [60, 67, 65, 63, 58]
    }]
  });
}
//
database.ref("/Push").on("value", getUpdate)
var words = [1, 5, NaN, 10];

words = words.filter(word => isNaN(word) == false)


