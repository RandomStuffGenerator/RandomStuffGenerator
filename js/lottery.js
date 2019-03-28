$(document).ready(function () {
  // Keep Columns 1 and 2 Same Height
  $('#columnTwo').height($('#columnOne').height())


  

// =============================================================================
// UK NATIONAL
// =============================================================================
  getUKNational = () => {
    let numbers = [];

    getNumber = () => {
      var x = Math.floor(Math.random() * 59) + 1;
      if (numbers.includes(x, 0)) {
        getNumber();
      } else {
        numbers.push(x);
      }
    }

    for (var i = 0; i < 6; i++) {
      getNumber();
    }
    return numbers;
  }


// =============================================================================
// EURO
// =============================================================================
  getEuro = () => {
    let numbers = [];
    let numbers2 = [" Lucky Stars: "];

    getNumber = () => {
      var x = Math.floor(Math.random() * 50) + 1;
      if (numbers.includes(x, 0)) {
        getNumber();
      } else {
        numbers.push(x);
      }
    }

    for (var i = 0; i < 5; i++) {
      getNumber();
    }

    getNumber2 = () => {
      var x = Math.floor(Math.random() * 12) + 1;
      if (numbers2.includes(x, 0)) {
        getNumber();
      } else {
        numbers2.push(x);
      }
    }

    for (var i = 0; i < 2; i++) {
      getNumber2();
    }
    return numbers.concat(numbers2);
  }


// =============================================================================
// US POWERBALL
// =============================================================================
  getPowerball = () => {
    let numbers = [];
    let numbers2 = [" Red Ball: "];

    getNumber = () => {
      var x = Math.floor(Math.random() * 69) + 1;
      if (numbers.includes(x, 0)) {
        getNumber();
      } else {
        numbers.push(x);
      }
    }

    for (var i = 0; i < 5; i++) {
      getNumber();
    }

    getNumber2 = () => {
      var x = Math.floor(Math.random() * 26) + 1;
      if (numbers2.includes(x, 0)) {
        getNumber();
      } else {
        numbers2.push(x);
      }
    }

    for (var i = 0; i < 1; i++) {
      getNumber2();
    }
    return numbers.concat(numbers2);
  }


// =============================================================================
// MEGA MILLIONS
// =============================================================================
getMega = () => {
  let numbers = [];
  let numbers2 = [" MegaBall: "];

  getNumber = () => {
    var x = Math.floor(Math.random() * 70) + 1;
    if (numbers.includes(x, 0)) {
      getNumber();
    } else {
      numbers.push(x);
    }
  }

  for (var i = 0; i < 5; i++) {
    getNumber();
  }

  getNumber2 = () => {
    var x = Math.floor(Math.random() * 25) + 1;
    if (numbers2.includes(x, 0)) {
      getNumber();
    } else {
      numbers2.push(x);
    }
  }

  for (var i = 0; i < 1; i++) {
    getNumber2();
  }
  return numbers.concat(numbers2);
}


// =============================================================================
// SUPERENALOTTO
// =============================================================================
getSuper = () => {
  let numbers = [];
  let numbers2 = [" Star No.: "];

  getNumber = () => {
    var x = Math.floor(Math.random() * 90) + 1;
    if (numbers.includes(x, 0)) {
      getNumber();
    } else {
      numbers.push(x);
    }
  }

  for (var i = 0; i < 6; i++) {
    getNumber();
  }

  getNumber2 = () => {
    var x = Math.floor(Math.random() * 90) + 1;
    if (numbers2.includes(x, 0)) {
      getNumber();
    } else {
      numbers2.push(x);
    }
  }

  for (var i = 0; i < 1; i++) {
    getNumber2();
  }
  return numbers.concat(numbers2);
}

// =============================================================================
// EUROJACKPOT
// =============================================================================
getEuro = () => {
  let numbers = [];
  let numbers2 = [" Euro No's: "];

  getNumber = () => {
    var x = Math.floor(Math.random() * 50) + 1;
    if (numbers.includes(x, 0)) {
      getNumber();
    } else {
      numbers.push(x);
    }
  }

  for (var i = 0; i < 5; i++) {
    getNumber();
  }

  getNumber2 = () => {
    var x = Math.floor(Math.random() * 10) + 1;
    if (numbers2.includes(x, 0)) {
      getNumber();
    } else {
      numbers2.push(x);
    }
  }

  for (var i = 0; i < 2; i++) {
    getNumber2();
  }
  return numbers.concat(numbers2);
}


// =============================================================================
// IRISH 49's
// =============================================================================
getIrish = () => {
  let numbers = [];

  getNumber = () => {
    var x = Math.floor(Math.random() * 49) + 1;
    if (numbers.includes(x, 0)) {
      getNumber();
    } else {
      numbers.push(x);
    }
  }

  for (var i = 0; i < 3; i++) {
    getNumber();
  }
  return numbers;
}





// =============================================================================
// GET PICK
// =============================================================================
  getNumbers = () => {
    const lotteryType = document.querySelector('input[name="lotteries"]:checked').value;
    switch (lotteryType) {
      case "uk": return getUKNational();
      case "euro": return getEuro();
      case "powerball": return getPowerball();
      case "mega": return getMega();
      case "superena": return getSuper();
      case "eurojackpot": return getEuro();
      case "irish": return getIrish();
    }
  }





  // =============================================================================
  // MAKE UL FUNCTIONS
  // =============================================================================
  var makeUL = function () {
    // Scroll Down A Little
    $('html, body').animate({
        scrollTop: $('#generateButton').offset().top
      },
      800
    )
    // Clear Existing Results
    document.getElementById('results').innerHTML = ''
    // Create Array
    var set = []
    // Retrieve Amount of Results
    function quantity() {
      var amount = document.getElementById('quantityValue').value
      if (amount < 26) {
        return document.getElementById('quantityValue').value
      } else if (amount > 26) {
        return 25
      }
    }

    // Push Titles to Array
    for (var i = 0; i < quantity(); i++) {
      set.push(getNumbers());
    }

    // Create List
    var list = document.createElement('ol')
    for (var i = 0; i < set.length; i++) {
      var item = document.createElement('li')
      item.appendChild(document.createTextNode(set[i]))
      list.appendChild(item)
    }
    document.getElementById('results').appendChild(list)
  }

  // Button Push Event Listener
  var genBtn = document.getElementById('generateButton')
  genBtn.addEventListener('click', makeUL)
})