$(document).ready(function () {
  // Keep Columns 1 and 2 Same Height
  $('#columnTwo').height($('#columnOne').height())
  



  const getUnique = (num) => {
    if (document.getElementById("unique").checked == true) {
      return true;
    }
    else {
      return false;
    }
  }
  const getPrime = (num) => {
    if (document.getElementById("prime").checked == true) {
      return true;
    }
    else {
      return false;
    }
  }
  const getOddEven = (num) => {
    if (document.getElementById("even").checked == true) {
      return "even";
    }
    else if (document.getElementById("odd").checked == true) {
      return "odd";
    }
    else {
      return "both";
    }  
  }

  const primeCheck = (num) => {
    for(var i = 2; i < num; i++) {
      if(num % i === 0) {
          return "false";
      }
    }
    return true;
  }
  

  const getNumbers = () => { 
    let amnt = document.getElementById("amnt").value;    
    let min = document.getElementById("rangeLower").value;
    let max = document.getElementById("rangeUpper").value;
    let arr = [];
    for (var i = 0; i < amnt; i++) {
      const runNumber = (num) => {        
        const y = 1 + Math.floor(Math.random() * max + min);        
        console.log(y);


// =============================================================================
// BOTH
// =============================================================================
        if (getOddEven() == "both") {
          if (getPrime(y) == true && primeCheck(y) == true) {
            /*BOTH PRIME UNIQUE*/
            if (getUnique() == true) {
              if (arr.includes(y) == true) {
                runNumber();
              }
              else if (arr.includes(y) == false) {
                arr.push(y);
              }
            }
            /*BOTH PRIME NOT-UNIQUE*/
            else {
              arr.push(y);
            }
          }
          /*IF NUMBER FAILS PRIME CHECK NEW NUMBER*/
          else if (getPrime(y) == true && primeCheck(y) == false) {
            runNumber();
          }
          /*NOT-PRIME*/
          else if (getPrime(y) == false) {
            if (getUnique() == true) {
              if (arr.includes(y)) {
                runNumber();
              }
            }
            /*BOTH PRIME NOT-UNIQUE*/
            else {
              arr.push(y);
            }
          }
        }
// =============================================================================
// ODD
// =============================================================================
        if (getOddEven() == "odd") {
          if (y % 2 !== 0) {
            if (getPrime(y) == true && primeCheck(y) == true) {
              /*BOTH PRIME UNIQUE*/
              if (getUnique() == true) {
                if (arr.includes(y) == true) {
                  runNumber();
                }
                else if (arr.includes(y) == false) {
                  arr.push(y);
                }
              }
              /*BOTH PRIME NOT-UNIQUE*/
              else {
                arr.push(y);
              }
            }
            /*IF NUMBER FAILS PRIME CHECK NEW NUMBER*/
            else if (getPrime(y) == true && primeCheck(y) == false) {
              runNumber();
            }
            /*NOT-PRIME*/
            else if (getPrime(y) == false) {
              if (getUnique() == true) {
                if (arr.includes(y)) {
                  runNumber();
                }
              }
              /*BOTH PRIME NOT-UNIQUE*/
              else {
                arr.push(y);
              }
            }
          }
          else {
            runNumber();
          }
        }
// =============================================================================
// EVEN
// =============================================================================
        if (getOddEven() == "even") {
          if (y % 2 == 0) {
            if (getPrime(y) == true && primeCheck(y) == true) {
              /*BOTH PRIME UNIQUE*/
              if (getUnique() == true) {
                if (arr.includes(y) == true) {
                  runNumber();
                }
                else if (arr.includes(y) == false) {
                  arr.push(y);
                }
              }
              /*BOTH PRIME NOT-UNIQUE*/
              else {
                arr.push(y);
              }
            }
            /*IF NUMBER FAILS PRIME CHECK NEW NUMBER*/
            else if (getPrime(y) == true && primeCheck(y) == false) {
              runNumber();
            }
            /*NOT-PRIME*/
            else if (getPrime(y) == false) {
              if (getUnique() == true) {
                if (arr.includes(y)) {
                  runNumber();
                }
              }
              /*BOTH PRIME NOT-UNIQUE*/
              else {
                arr.push(y);
              }
            }
          }
          else {
            runNumber();
          }
        }
      }
      runNumber();
    }
    console.log(arr);      
    return arr;
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