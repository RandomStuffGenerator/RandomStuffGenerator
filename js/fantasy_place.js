$(document).ready(function () {
  // Keep Columns 1 and 2 Same Height
  $('#columnTwo').height($('#columnOne').height())



// =========================================================================
// PREFIX
// =========================================================================
    var prefix = [
      // =======================================================================
      // COLOURS
      // =======================================================================
      {name: "White", meaning: "land of white", type: "color"},
      {name: "Black", meaning: "land of black", type: "color"},
      {name: "Red", meaning: "associated with the colour red", type: "color"},
      {name: "Blue", meaning: "associated with the colour blue", type: "color"},
      // =======================================================================
      // BRITISH
      // =======================================================================
      {name: "Aber", meaning: "mouth of a river", type: "anglo"},
      {name: "Ac", meaning: "acorn", type: "anglo"},
      {name: "Avon", meaning: "river", type: "anglo"},
      {name: "Ar", meaning: "high", type: "anglo"},
      {name: "Ard", meaning: "high", type: "anglo"},
      {name: "Ash", meaning: "ash tree", type: "anglo"},
      {name: "Ast", meaning: "east", type: "anglo"},
      {name: "Auch", meaning: "field", type: "anglo"},
      {name: "Axe", meaning: "river", type: "anglo"},
      {name: "Exe", meaning: "river", type: "anglo"},
      {name: "Bal", meaning: "farmstead", type: "anglo"},
      {name: "Beck", meaning: "stream", type: "anglo"},
      {name: "Ben", meaning: "mountain", type: "anglo"},
      {name: "Bannock", meaning: "mountain", type: "anglo"},
      {name: "Bannog", meaning: "mountain", type: "anglo"},
      {name: "Berg", meaning: "hill", type: "anglo"},
      {name: "Bex", meaning: "box tree", type: "anglo"},
      {name: "Blen", meaning: "upland", type: "anglo"},
      {name: "Bourne", meaning: "large brook", type: "anglo"},
      {name: "Brad", meaning: "broad", type: "anglo"},
      {name: "Bre", meaning: "hill", type: "anglo"},
      {name: "Carden", meaning: "thicket", type: "anglo"},
      {name: "Caer", meaning: "mountain", type: "anglo"},
      {name: "Cul", meaning: "narrow", type: "anglo"},
      {name: "Cufnfm", meaning: "valley", type: "anglo"},
      {name: "Dal", meaning: "meadow", type: "anglo"},
      {name: "Din", meaning: "fort", type: "anglo"},
      {name: "Dol", meaning: "meadow", type: "anglo"},
      {name: "Drum", meaning: "ridge", type: "anglo"},
      {name: "Dum", meaning: "fort", type: "anglo"},
      {name: "Dum", meaning: "fort", type: "anglo"},
      {name: "Fin", meaning: "holy white", type: "anglo"},
      {name: "Ford", meaning: "water crossing", type: "anglo"},
      {name: "Hope", meaning: "valley", type: "anglo"},
      {name: "Inver", meaning: "confluence", type: "anglo"},
      {name: "Kil", meaning: "old church or monastery", type: "anglo"},
      {name: "Cil", meaning: "old church or monastery", type: "anglo"},
      {name: "Kin", meaning: "head", type: "anglo"},
      {name: "Kyle", meaning: "narrows", type: "anglo"}, 
      {name: "Lan", meaning: "churchyard", type: "anglo"},
      {name: "Lang", meaning: "long", type: "anglo"},
      {name: "Law", meaning: "rounded hill", type: "anglo"},
      {name: "Low", meaning: "rounded hill", type: "anglo"},
      {name: "Lynn", meaning: "lake", type: "anglo"},
      {name: "Mynydd", meaning: "mountain", type: "anglo"},
      {name: "Nan", meaning: "valley", type: "anglo"},
      {name: "Nant", meaning: "ravine", type: "anglo"},
      {name: "Nor", meaning: "north", type: "anglo"},
      {name: "Pen", meaning: "head", type: "anglo"},
      {name: "Pit", meaning: "portion", type: "anglo"},
      {name: "Pol", meaning: "pool", type: "anglo"},
      {name: "Pont", meaning: "bridge", type: "anglo"},
      {name: "Porth", meaning: "harbour or port", type: "anglo"},
      {name: "Shaw", meaning: "a wood", type: "anglo"},
      {name: "Ship", meaning: "sheep", type: "anglo"},
      {name: "Stan", meaning: "stone", type: "anglo"},
      {name: "Strath", meaning: "wide", type: "anglo"},
      {name: "Sud", meaning: "south", type: "anglo"},
      {name: "Tre", meaning: "settlement", type: "anglo"},
      {name: "Tilly", meaning: "hillock", type: "anglo"},
      {name: "Wes", meaning: "west", type: "anglo"},
      {name: "Win", meaning: "white", type: "anglo"},
      // =======================================================================
      // PHYSICAL
      // =======================================================================
      {name: "Large", meaning: "settlement", type: "physical"},
      {name: "Small", meaning: "settlement", type: "physical"},
      {name: "Little", meaning: "settlement", type: "physical"},
      {name: "New", meaning: "settlement", type: "physical"},
      {name: "Old", meaning: "settlement", type: "physical"},
      {name: "High", meaning: "settlement", type: "physical"},
      {name: "Low", meaning: "settlement", type: "physical"},
      {name: "Leigh", meaning: "settlement", type: "physical"},
      // =======================================================================
      // FANTASY
      // =======================================================================
      {name: "Cal", meaning: "", type: "fantasy", inter: ["a"]},
      {name: "Car", meaning: "", type: "fantasy", inter: ["e"]},
      {name: "Card", meaning: "", type: "fantasy", inter: ["i"]},
      {name: "Chess", meaning: "", type: "fantasy", inter: ["o"]},
      {name: "Chon", meaning: "", type: "fantasy", inter: ["y"]},
      {name: "Cor", meaning: "", type: "fantasy", inter: ["be", "bi", "bo"]},
      {name: "Da", meaning: "", type: "fantasy", inter: ["ce", "ci", "co"]},
      {name: "Dam", meaning: "", type: "fantasy", inter: ["de", "di", "do"]},
      {name: "Dan", meaning: "", type: "fantasy", inter: ["ed", "id", "od"]},
      {name: "Dor", meaning: "", type: "fantasy", inter: ["he", "hi", "ho"]},
      {name: "Esta", meaning: "", type: "fantasy", inter: ["je", "ji", "jo"]},
      {name: "Gon", meaning: "", type: "fantasy", inter: ["le", "li", "lo"]},
      {name: "Hal", meaning: "", type: "fantasy", inter: ["me", "mi", "mo"]},
      {name: "Lan", meaning: "", type: "fantasy", inter: ["se", "si", "so"]},
      {name: "Lui", meaning: "", type: "fantasy", inter: ["te", "ti", "to"]},
      {name: "Mul", meaning: "", type: "fantasy", inter: ["i"]},
      {name: "Dam", meaning: "", type: "fantasy", inter: ["i"]},
      {name: "Ras", meaning: "", type: "fantasy", inter: ["i"]}
    ]

// =============================================================================
// SUIFFIX
// =============================================================================
    var suffix = [
      // =======================================================================
      // BRITISH
      // =======================================================================
      {name: "ay", meaning: "island", type: "anglo"},
      {name: "ey", meaning: "island", type: "anglo"},
      {name: "bost", meaning: "farm", type: "anglo"},
      {name: "bury", meaning: "fortified area", type: "anglo"},
      {name: "borough", meaning: "fortified area", type: "anglo"},
      {name: "brough", meaning: "fortified area", type: "anglo"},
      {name: "burgh", meaning: "fortified area", type: "anglo"},
      {name: "by", meaning: "village", type: "anglo"},
      {name: "carden", meaning: "thicket", type: "anglo"},
      {name: "caster", meaning: "Roman camp", type: "anglo"},
      {name: "chester", meaning: "Roman camp", type: "anglo"},
      {name: "cester", meaning: "Roman camp", type: "anglo"},
      {name: "cester", meaning: "Roman camp", type: "anglo"},
      {name: "coombe", meaning: "valley", type: "anglo"},
      {name: "cot", meaning: "cottage", type: "anglo"},
      {name: "dale", meaning: "valley", type: "anglo"},
      {name: "don", meaning: "valley", type: "anglo"},
      {name: "ey", meaning: "island", type: "anglo"},
      {name: "field", meaning: "open land", type: "anglo"},  
      {name: "ford", meaning: "crossing", type: "anglo"},      
      {name: "gate", meaning: "road", type: "anglo"},
      {name: "garth", meaning: "small summit", type: "anglo"},
      {name: "glen", meaning: "narr", type: "anglo"},
      {name: "ham", meaning: "farmstead", type: "anglo"},
      {name: "hurst", meaning: "hill", type: "anglo"},
      {name: "ing", meaning: "people", type: "anglo"},
      {name: "keth", meaning: "wood", type: "anglo"},
      {name: "kirk", meaning: "church", type: "anglo"},
      {name: "leigh", meaning: "woodland clearing", type: "anglo"},
      {name: "mouth", meaning: "river mouth", type: "anglo"},
      {name: "ness", meaning: "headland", type: "anglo"},
      {name: "pool", meaning: "harbour", type: "anglo"},
      {name: "port", meaning: "port", type: "anglo"},
      {name: "shaw", meaning: "wood", type: "anglo"},
      {name: "stead", meaning: "enclosed pasture", type: "anglo"},
      {name: "ster", meaning: "farm", type: "anglo"},
      {name: "rigg", meaning: "ridge", type: "anglo"},
      {name: "tarn", meaning: "lake", type: "anglo"},
      {name: "thorpe", meaning: "secondary settlement", type: "anglo"},
      {name: "thwaite", meaning: "forest clearing", type: "anglo"},
      {name: "toft", meaning: "homestead", type: "anglo"},
      {name: "treath", meaning: "beach", type: "anglo"},
      {name: "ton", meaning: "estate", type: "anglo"},
      {name: "wyke", meaning: "settlement", type: "anglo"},
      {name: "wich", meaning: "settlement", type: "anglo"},
      {name: "wick", meaning: "bay", type: "anglo"},      
      {name: "worth", meaning: "enclosure", type: "anglo"},
      // =======================================================================
      // FANTASY
      // =======================================================================
      {name: "tia", meaning: "", type: "fantasy"},
      {name: "atia", meaning: "", type: "fantasy"},
      {name: "r", meaning: "", type: "fantasy"},
      {name: "ar", meaning: "", type: "fantasy"},      
      {name: "ara", meaning: "", type: "fantasy"},
      {name: "iara", meaning: "", type: "fantasy"},
      {name: "or", meaning: "", type: "fantasy"},
      {name: "iora", meaning: "", type: "fantasy"},
      {name: "ath", meaning: "", type: "fantasy"},      
      {name: "iath", meaning: "", type: "fantasy"},
      {name: "rath", meaning: "", type: "fantasy"},
      {name: "riath", meaning: "", type: "fantasy"},
      {name: "eth", meaning: "", type: "fantasy"},
      {name: "ieth", meaning: "", type: "fantasy"},      
      {name: "oth", meaning: "", type: "fantasy"},
      {name: "ioth", meaning: "", type: "fantasy"},
      {name: "n", meaning: "", type: "fantasy"},
      {name: "an", meaning: "", type: "fantasy"},
      {name: "in", meaning: "", type: "fantasy"},      
      {name: "ania", meaning: "", type: "fantasy"},
      {name: "inia", meaning: "", type: "fantasy"},
      {name: "onia", meaning: "", type: "fantasy"},      
      {name: "bia", meaning: "", type: "fantasy"},
      {name: "biara", meaning: "", type: "fantasy"},
      {name: "biaria", meaning: "", type: "fantasy"},
      {name: "biartia", meaning: "", type: "fantasy"},
      {name: "brath", meaning: "", type: "fantasy"},      
      {name: "briath", meaning: "", type: "fantasy"},
      {name: "briaria", meaning: "", type: "fantasy"},
      {name: "bratia", meaning: "", type: "fantasy"},
      {name: "briatia", meaning: "", type: "fantasy"},      
      {name: "bara", meaning: "", type: "fantasy"},
      {name: "baria", meaning: "", type: "fantasy"},
      {name: "baratia", meaning: "", type: "fantasy"},      
      {name: "cara", meaning: "", type: "fantasy"},
      {name: "caria", meaning: "", type: "fantasy"},
      {name: "caratia", meaning: "", type: "fantasy"},
      {name: "dara", meaning: "", type: "fantasy"},
      {name: "idara", meaning: "", type: "fantasy"},  
      {name: "daria", meaning: "", type: "fantasy"},
      {name: "idaria", meaning: "", type: "fantasy"},
      {name: "dim", meaning: "", type: "fantasy"},      
      {name: "idim", meaning: "", type: "fantasy"},
      {name: "idimia", meaning: "", type: "fantasy"},
      {name: "dolan", meaning: "", type: "fantasy"},      
      {name: "dolian", meaning: "", type: "fantasy"},
      {name: "idolian", meaning: "", type: "fantasy"},
      {name: "nta", meaning: "", type: "fantasy"},
      {name: "ntia", meaning: "", type: "fantasy"},
      {name: "enta", meaning: "", type: "fantasy"},
      {name: "entia", meaning: "", type: "fantasy"},      
      {name: "and", meaning: "", type: "fantasy"},
      {name: "iand", meaning: "", type: "fantasy"},
      {name: "andia", meaning: "", type: "fantasy"},      
      {name: "iandia", meaning: "", type: "fantasy"},
      {name: "nara", meaning: "", type: "fantasy"},
      {name: "inara", meaning: "", type: "fantasy"},
      {name: "naria", meaning: "", type: "fantasy"},
      {name: "inaria", meaning: "", type: "fantasy"},  
      {name: "nath", meaning: "", type: "fantasy"},      
      {name: "enath", meaning: "", type: "fantasy"},
      {name: "enatia", meaning: "", type: "fantasy"},
      {name: "inath", meaning: "", type: "fantasy"},      
      {name: "myr", meaning: "", type: "fantasy"},
      {name: "omyr", meaning: "", type: "fantasy"},
      {name: "myria", meaning: "", type: "fantasy"},
      {name: "imyria", meaning: "", type: "fantasy"},
      {name: "olan", meaning: "", type: "fantasy"},
      {name: "ilan", meaning: "", type: "fantasy"},
      {name: "elan", meaning: "", type: "fantasy"},
      {name: "ulan", meaning: "", type: "fantasy"},
      {name: "patia", meaning: "", type: "fantasy"},  
      {name: "phatia", meaning: "", type: "fantasy"},      
      {name: "iphatia", meaning: "", type: "fantasy"},
      {name: "phar", meaning: "", type: "fantasy"},
      {name: "ophar", meaning: "", type: "fantasy"},      
      {name: "ephar", meaning: "", type: "fantasy"},
      {name: "rand", meaning: "", type: "fantasy"},
      {name: "irand", meaning: "", type: "fantasy"},
      {name: "iren", meaning: "", type: "fantasy"},
      {name: "rath", meaning: "", type: "fantasy"},
      {name: "irath", meaning: "", type: "fantasy"},
      {name: "erath", meaning: "", type: "fantasy"},
      {name: "rua", meaning: "", type: "fantasy"},
      {name: "irua", meaning: "", type: "fantasy"},  
      {name: "erua", meaning: "", type: "fantasy"},      
      {name: "tar", meaning: "", type: "fantasy"},
      {name: "itar", meaning: "", type: "fantasy"},
      {name: "tan", meaning: "", type: "fantasy"},      
      {name: "itan", meaning: "", type: "fantasy"},
      {name: "tia", meaning: "", type: "fantasy"},
      {name: "itia", meaning: "", type: "fantasy"},
      {name: "tria", meaning: "", type: "fantasy"},
      {name: "itria", meaning: "", type: "fantasy"},
      {name: "rill", meaning: "", type: "fantasy"},
      {name: "irill", meaning: "", type: "fantasy"},
      {name: "erill", meaning: "", type: "fantasy"},
      {name: "arill", meaning: "", type: "fantasy"},  
      {name: "nolan", meaning: "", type: "fantasy"},      
      {name: "enolan", meaning: "", type: "fantasy"},
      {name: "lad", meaning: "", type: "fantasy"},
      {name: "elad", meaning: "", type: "fantasy"},      
      {name: "olad", meaning: "", type: "fantasy"},
      {name: "ilad", meaning: "", type: "fantasy"},
      {name: "had", meaning: "", type: "fantasy"},
      {name: "ihad", meaning: "", type: "fantasy"},
      {name: "ehad", meaning: "", type: "fantasy"},
      {name: "nen", meaning: "", type: "fantasy"},
      {name: "inen", meaning: "", type: "fantasy"},
      {name: "waith", meaning: "", type: "fantasy"},
      {name: "waithe", meaning: "", type: "fantasy"},  
      {name: "gar", meaning: "", type: "fantasy"},      
      {name: "igar", meaning: "", type: "fantasy"},
      {name: "egar", meaning: "", type: "fantasy"},
      {name: "or", meaning: "", type: "fantasy"},      
      {name: "oria", meaning: "", type: "fantasy"},
      {name: "dor", meaning: "", type: "fantasy"},
      {name: "doria", meaning: "", type: "fantasy"},
      {name: "tirith", meaning: "", type: "fantasy"}
    ]








// =========================================================================
// BUILD A PLACE
// =========================================================================
    var getPlace = function () {
      var place = [];
      var meaning = [];

      var getRandom = function () {
        var num1 = Math.floor(Math.random() * 2 + 1);
        switch (num1) {
          case 1: return getTraditional();
          case 2: return getFantasy();
        }
      }
      var getFantasy = function () {
        var getFantasyPrefix = function () {
          var num1 = Math.floor(Math.random() * prefix.length);
          if (prefix[num1].type === "fantasy") {
            place.push(prefix[num1].name);
            if (Math.random() >= 0.5) {
              a = prefix[num1].inter.length;
              console.log("INTER LENGTH = " + a);
              x = Math.floor(Math.random() * a);
              place.push(prefix[num1].inter[x]);
            }
          }
          else {
            getFantasyPrefix();
          }
        }
        var getFantasySuffix = function () {
          var num2 = Math.floor(Math.random() * suffix.length);
          if (suffix[num2].type === "fantasy") {
            place.push(suffix[num2].name);
          }
          else {
            getFantasySuffix();
          }
        }
        getFantasyPrefix();
        getFantasySuffix()       
        return place.join("");
      }
      var getTraditional = function () {      
        var getTraditionalPrefix = function () {
          var num1 = Math.floor(Math.random() * prefix.length);         
          if (prefix[num1].type === "anglo") {
            place.push(prefix[num1].name);
            meaning.push(prefix[num1].meaning);            
          }
          else {
            getTraditionalPrefix();
          }

        }
        var getTraditionalSuffix = function () {
          var num2 = Math.floor(Math.random() * suffix.length);
          if (suffix[num2].type === "anglo") {
            place.push(suffix[num2].name);
            meaning.push(suffix[num2].meaning);
          }
          else {
            getTraditionalSuffix();
          }
        }
        getTraditionalPrefix();
        getTraditionalSuffix();
        var meaningString = meaning.join(" ");     
        return place.join("") + " (" + meaningString.charAt(0).toUpperCase() + meaningString.substr(1) + ")";
      }



      var getAlien = function () {
        var x = getFantasy();
        var explode = x.split("");
        console.log(explode);
        var y = [];
        for (var i = 0; i < explode.length; i++) {          
          if (explode[i] === "a") {
            //y.push("e");
          }
          else if (explode[i] === "e") {
            //y.push("i");
          }
          else if (explode[i] === "i") {
            //y.push("o");
          }
          else if (explode[i] === "o") {
            //y.push("u");
          }
          else if (explode[i] === "u") {
            //y.push("a");
          }
          else {
            var index = explode[i].charCodeAt(0);
            y.push(String.fromCharCode(index + 1));
          }
        }
        var sounds = ["igz", "iz", "akc", "alr", "a", "eck", "iz", "ifiss", "esp", "ast", "xas", "z", "ak"];
        var rn1 = Math.floor(Math.random() * y.join().length);
        var rn2 = Math.floor(Math.random() * sounds.length);
        y.splice(rn1, 0, sounds[rn2]);
        var str = y.join("").toLowerCase();
        return str.charAt(0).toUpperCase() + str.substr(1);
      }

      if (document.getElementById("random_radio").checked) {        
        return getRandom();
      }
      if (document.getElementById("fantasy_radio").checked) {        
        return getFantasy();
      }
      if (document.getElementById("traditional_radio").checked) {        
        return getTraditional();
      }
      if (document.getElementById("alien_radio").checked) {        
        return getAlien();
      }
        
    }




// =============================================================================
// MAKE UL FUNCTIONS
// =============================================================================
  var makeUL = function () {
    // Scroll Down A Little
    $('html, body').animate(
      {
        scrollTop: $('#generateButton').offset().top
      },
      800
    )
    // Clear Existing Results
    document.getElementById('results').innerHTML = ''
    // Create Array
    var set = []
    // Retrieve Amount of Results
    function quantity () {
      var amount = document.getElementById('quantityValue').value
      if (amount < 26) {
        return document.getElementById('quantityValue').value
      } else if (amount > 26) {
        return 25
      }
    }

    // Push Titles to Array
    for (var i = 0; i < quantity(); i++) {
      set.push(getPlace());
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
