$(document).ready(function () {
  // Keep Columns 1 and 2 Same Height
  $('#columnTwo').height($('#columnOne').height())

// =============================================================================
// FOCUS TWEAKS
// =============================================================================
    $('input[type=radio]').click(function () {
      if (this.id == 'formatted_radio') {
        document.getElementById('formatted_title').focus()
        document.getElementById('formatted_title').value = ''
      } else if (this.id == 'random_radio') {
        document.getElementById('formatted_title').value =
        'e.g. "and the night was cold..."'
      }
    })
    $('#formatted_title').click(function () {
      $('#formatted_radio').prop('checked', true)
    })
  
    // Word Tile Click Insert to Text Box
    $('.word_btn').click(function () {
      $('#formatted_radio').prop('checked', true)
      document.getElementById('formatted_title').focus()
      // Clear Text Box If Placeholder Text Present
      if (
        document.getElementById('formatted_title').value ==
        'e.g. "and the night was cold..."'
      ) {
        document.getElementById('formatted_title').value = ''
      }
      // Append Button Text To End of Input Field
      var textBox = document.getElementById('formatted_title')
      textBox.value = textBox.value + ' ' + this.innerHTML + ' '
    })














// ===========================================================================
// WORD AND PHRASE ARRAYS
// ===========================================================================

    var maleNames = ["Abdul", "Abel", "Abraham", "Adalberto", "Adan", "Adrian", "Agustin", "Ahmad", "Ahmed", "Al", "Albert", "Alberto", "Alden", "Aldo", "Alec", "Alejandro", "Alex", "Alexis", "Alfonso", "Alfred", "Alfredo", "Ali", "Alphonse", "Alton", "Alva", "Alvin", "Amado", "Ambrose", "Amos", "Anderson", "Andrea", "Andreas", "Andrew", "Andy", "Angel", "Angelo", "Anibal", "Antione", "Antone", "Antonia", "Antwan", "Archie", "Arden", "Arlen", "Armand", "Arnold", "Arnulfo", "Aron", "Art", "Arturo", "Aubrey", "August", "Augustus", "Austin", "Avery", "Barney", "Barrett", "Barry", "Bart", "Basil", "Beau", "Ben", "Benedict", "Bennett", "Bennie", "Benton", "Bernard", "Bernardo", "Bernie", "Berry", "Billie", "Billy", "Blake", "Bobbie", "Booker", "Boyd", "Bradley", "Bradly", "Branden", "Brant", "Brendon", "Brent", "Brenton", "Bret", "Brett", "Brian", "Britt", "Brock", "Bruce", "Bryce", "Bryon", "Bud", "Buddy", "Burl", "Calvin", "Carey", "Carlo", "Carlos", "Carmelo", "Carol", "Carrol", "Carroll", "Carson", "Carter", "Cary", "Cedric", "Chadwick", "Charles", "Charley", "Charlie", "Chase", "Chi", "Chong", "Christian", "Chung", "Claud", "Claudio", "Clemente", "Cleo", "Cletus", "Cleveland", "Cliff", "Clifford", "Clint", "Clinton", "Clyde", "Cody", "Coleman", "Collin", "Columbus", "Connie", "Conrad", "Cordell", "Corey", "Cornelius", "Cornell", "Cortez", "Courtney", "Coy", "Craig", "Cristobal", "Curt", "Damian", "Damien", "Damon", "Dan", "Dana", "Danial", "Daniel", "Danilo", "Dannie", "Danny", "Darell", "Dario", "Darnell", "Daron", "Darrell", "Darrick", "Darrin", "Darron", "Darryl", "Dave", "David", "Dean", "Deandre", "Deangelo", "Del", "Delmar", "Delmer", "Demarcus", "Denis", "Dennis", "Denver", "Derick", "Derrick", "Deshawn", "Desmond", "Dewey", "Dillon", "Dino", "Dirk", "Domenic", "Domingo", "Dominic", "Dominique", "Don", "Donald", "Dong", "Donn", "Donnell", "Donnie", "Donny", "Donovan", "Donte", "Dorian", "Doug", "Douglas", "Doyle", "Duane", "Dudley", "Dustin", "Dusty", "Dwain", "Earle", "Earnest", "Ed", "Eddie", "Edgardo", "Edison", "Edmond", "Edwin", "Efrain", "Efren", "Elbert", "Elden", "Eldridge", "Eli", "Elias", "Eliseo", "Ellis", "Elmo", "Elroy", "Elvin", "Elvis", "Elwood", "Emerson", "Emery", "Emil", "Emile", "Emmanuel", "Emmitt", "Emory", "Enoch", "Eric", "Erich", "Erick", "Erik", "Erin", "Ernest", "Ernesto", "Ernie", "Errol", "Ervin", "Erwin", "Esteban", "Ethan", "Eugenio", "Everett", "Everette", "Ezequiel", "Felix", "Ferdinand", "Fermin", "Fernando", "Fidel", "Filiberto", "Florencio", "Florentino", "Floyd", "Forrest", "Frances", "Francesco", "Francisco", "Frank", "Frankie", "Franklyn", "Fred", "Freddie", "Freddy", "Frederick", "Fredrick", "Freeman", "Fritz", "Gabriel", "Gail", "Galen", "Garfield", "Garland", "Garret", "Garrett", "Garry", "Garth", "Gaston", "Gayle", "Gaylord", "Genaro", "Gene", "George", "Gerald", "Gerardo", "Gerry", "Gil", "Gilberto", "Gino", "Glenn", "Gonzalo", "Gordon", "Grady", "Graham", "Greg", "Gregorio", "Grover", "Guillermo", "Guy", "Hai", "Hank", "Hans", "Harland", "Harley", "Harold", "Harvey", "Hassan", "Hector", "Henry", "Herbert", "Heriberto", "Herschel", "Hershel", "Hilario", "Hilton", "Hipolito", "Hobert", "Hollis", "Hong", "Horacio", "Hosea", "Howard", "Hoyt", "Huey", "Hugh", "Humberto", "Hunter", "Hyman", "Ian", "Ike", "Ira", "Irwin", "Isaac", "Isaiah", "Isaias", "Isiah", "Isidro", "Ismael", "Israel", "Isreal", "Issac", "Ivan", "Jacinto", "Jack", "Jackie", "Jackson", "Jae", "Jake", "Jamaal", "Jamel", "Jamison", "Jarod", "Jarred", "Jarrett", "Jarrod", "Jason", "Jayson", "Jean", "Jeff", "Jeffry", "Jeramy", "Jere", "Jeremiah", "Jeremy", "Jermaine", "Jerold", "Jerome", "Jeromy", "Jerry", "Jesse", "Jessie", "Jesus", "Jewell", "Jimmy", "Joaquin", "Jody", "Joe", "Joesph", "Joey", "Johnie", "Johnnie", "Johnny", "Johnson", "Jonah", "Jonathon", "Jorge", "Jose", "Joseph", "Josh", "Josiah", "Jospeh", "Judson", "Jules", "Julian", "Julio", "Julius", "Justin", "Kareem", "Karl", "Keith", "Kelley", "Kelly", "Kelvin", "Kendall", "Keneth", "Kenneth", "Kenny", "Kevin", "Kieth", "Kim", "King", "Kip", "Kirby", "Kory", "Kraig", "Kristofer", "Kristopher", "Lacy", "Lamar", "Lamont", "Lance", "Landon", "Lanny", "Larry", "Laurence", "Lavern", "Laverne", "Lawerence", "Lawrence", "Lawrence", "Lazaro", "Lee", "Leif", "Leigh", "Leland", "Lemuel", "Len", "Lenard", "Lenny", "Leo", "Leon", "Leonel", "Leopoldo", "Leroy", "Les", "Leslie", "Lester", "Levi", "Lewis", "Lindsay", "Lindsey", "Lloyd", "Logan", "Long", "Lonnie", "Lonny", "Loren", "Lorenzo", "Lou", "Louie", "Louis", "Lowell", "Loyd", "Lucien", "Lucius", "Luke", "Luther", "Lyle", "Lyman", "Lyndon", "Lynn", "Lynwood", "Malcom", "Man", "Marcel", "Marcellus", "Marco", "Mariano", "Mark", "Marlin", "Marlon", "Marquis", "Marshall", "Martin", "Marty", "Mary", "Mathew", "Matt", "Maurice", "Max", "Melvin", "Merle", "Merrill", "Mervin", "Michael", "Michale", "Michel", "Miguel", "Mike", "Mikel", "Milford", "Millard", "Milo", "Milton", "Minh", "Mitch", "Mitchel", "Mitchell", "Mohamed", "Mohammad", "Mohammed", "Moises", "Morgan", "Morris", "Mose", "Moses", "Murray", "Napoleon", "Nathanael", "Nathanial", "Neal", "Ned", "Neil", "Nestor", "Nicholas", "Nick", "Nickolas", "Nicky", "Nicolas", "Noah", "Noe", "Noel", "Nolan", "Norberto", "Norris", "Numbers", "Odell", "Odis", "Orlando", "Orval", "Orville", "Oscar", "Oswaldo", "Otis", "Owen", "Pablo", "Paris", "Parker", "Pat", "Patricia", "Paul", "Pedro", "Percy", "Perry", "Peter", "Philip", "Phillip", "Pierre", "Quentin", "Quinn", "Quinton", "Rafael", "Raleigh", "Ramon", "Randal", "Randall", "Randell", "Randy", "Rashad", "Raul", "Rayford", "Raymon", "Raymundo", "Reed", "Refugio", "Reinaldo", "Renato", "Rene", "Reuben", "Rex", "Richie", "Rick", "Rickey", "Ricky", "Rico", "Rob", "Robbie", "Robby", "Robin", "Rocco", "Rocky", "Rod", "Rodney", "Rogelio", "Roger", "Rolando", "Rolf", "Ron", "Ronnie", "Ronny", "Rory", "Rosario", "Roscoe", "Ross", "Roy", "Ruben", "Rubin", "Rudolf", "Rudolph", "Rudy", "Rueben", "Rufus", "Rupert", "Russ", "Russel", "Rusty", "Ryan", "Sal", "Sam", "Sammie", "Sammy", "Samual", "Sandy", "Sang", "Santiago", "Santo", "Scot", "Scottie", "Scotty", "Sean", "Sebastian", "Sergio", "Seymour", "Shannon", "Shaun", "Shelby", "Sheldon", "Sherwood", "Sid", "Silas", "Simon", "Solomon", "Son", "Spencer", "Stacey", "Stacy", "Stan", "Stanford", "Stanley", "Stefan", "Sterling", "Stevie", "Stuart", "Tad", "Tanner", "Taylor", "Teodoro", "Terrance", "Terrell", "Terrence", "Terry", "Thad", "Thanh", "Theodore", "Theron", "Thurman", "Timmy", "Timothy", "Tobias", "Toby", "Tod", "Todd", "Tomas", "Tommie", "Toney", "Tracy", "Travis", "Trent", "Trinidad", "Troy", "Truman", "Tuan", "Ty", "Tyree", "Tyrell", "Tyron", "Tyrone", "Ulysses", "Val", "Valentin", "Valentine", "Vaughn", "Vern", "Vernon", "Vincent", "Vito", "Von", "Waldo", "Walter", "Walton", "Ward", "Warren", "Wayne", "Weldon", "Werner", "Weston", "Wilber", "Wilbert", "Wilburn", "Wiley", "Wilfred", "Wilfredo", "Will", "Willard", "Willie", "Willis", "Wilmer", "Winford", "Winfred", "Woodrow", "Wyatt", "Xavier", "Yong", "Zachariah", "Zachery", "Zackary", "Zane", "Niko", "Jadiel", "Braden", "Julius", "Steve", "Rohan", "Ace", "Hezekiah", "Abram", "Raiden", "Noah", "Vincent", "Angel", "Donovan", "Nikolas", "Damon", "Luciano", "Deshawn", "Beckett", "Kadin", "Colt", "Tobias", "Ben", "Jeremy", "Urijah", "Ignacio", "Omar", "Hunter", "Randy", "Marcelo", "Kaden", "Dominic", "Marc", "Braeden", "Dereon", "Brendan", "Marquise", "Rogelio", "Rory", "Andy", "Isai", "Gerald", "Lukas", "Nasir", "Ralph", "Pierce", "Yandel", "Morgan", "Tanner", "Landon", "Aedan", "Gilberto", "Bruno", "Jase", "Isaac", "Valentino", "Barrett", "Zion", "Cortez", "Cole", "Taylor", "Wade", "Dayton", "Beau", "Clinton", "Dawson", "Yosef", "Christopher", "Cale", "Ian", "Alfred", "Ernest", "Rolando", "Maxim", "Nelson", "Caden", "Jaylon", "Waylon", "Reuben", "Kendall", "Mateo", "Payton", "Derrick", "Roland", "Joshua", "Dante", "Chris", "Prince", "Amari", "Jairo", "Madden", "Alexzander", "Beckham", "Rhett", "Kenny", "Gage", "Clay", "Draven", "Savion", "Jack", "Braxton", "Atticus", "Harry", "Eliezer", "Alfredo", "Jasper", "Randall", "Rudy", "Davion", "Anthony", "Conner", "Mitchell", "Ty", "Amare", "Walker", "Kaeden", "Eddie", "Roman", "Derek", "Kolton", "Davis", "Keaton", "Carl", "Erik", "Aidyn", "Jermaine", "Marlon", "Koen", "Neil", "Zackery", "Esteban", "Evan", "Reece", "Skyler", "Oliver", "Diego", "Makai", "Ezra", "Melvin", "Triston", "Carsen", "Declan", "Keagan", "Thaddeus", "Alessandro", "Wyatt", "Tripp", "Malaki", "Benjamin", "Jaiden", "George", "Alexander", "Leonard", "Royce", "Felix", "Ricardo", "Uriah", "Sage", "Jerome", "Kayden", "Alexis", "Tyshawn", "Mohammad", "Keith", "Bryant", "Nehemiah", "Bentley", "Nickolas", "Nikhil", "Terry", "Bruce", "Solomon", "Andreas", "Andre", "Hudson", "Cael", "Lawrence", "Zack", "Adonis", "Junior", "Milton", "Yadiel", "Jett", "Blaine", "Maxwell", "Travis", "Xavier", "Dorian", "Davon", "Austin", "Corbin", "Octavio", "Franco", "Noe", "Shamar", "Broderick", "Maddox", "Yair", "Kash", "Gaige", "Bryson", "Demarcus", "Jaime", "Rene", "Eugene", "Quinton", "Nicholas", "Willie", "Carter", "Leo", "Rayan", "Moses", "Devan", "Carson", "Cason", "Gunnar", "Abdiel", "Branson", "Aarav", "Sonny", "Holden", "Jaden", "Camden", "Darien", "Cordell", "Warren", "Grant", "Marcel", "Kenyon", "Matthew", "Tristin", "Preston", "Brian", "Ezekiel", "Tomas", "Jimmy", "Peter", "Aydin", "Ali", "Rocco", "Sterling", "Marco", "Max", "Ronnie", "Antoine", "Ryan", "Oswaldo", "Elias", "Chandler", "Jeramiah", "Nash", "Damarion", "Aidan", "Nico", "Jordan", "Jaydin", "Jaylan", "Sincere", "Alonso", "Phoenix", "Kyson", "Misael", "Timothy", "Corey", "Ross", "Bennett", "Jakob", "Bradley", "Kristopher", "Landin", "Jaquan", "Asher", "Maurice", "Seth", "Dane", "Jason", "Jovanni", "Odin", "Baron", "Miles", "Brodie", "Alonzo", "Mike", "Teagan", "Maximus", "Nick", "Jordyn", "Drew", "Braedon", "Lawson", "Remington", "Henry", "Nigel", "Konnor", "Liam", "Layton", "Dillan", "Ryder", "Bronson", "Trevin", "Justice", "Ismael", "Cassius", "Deon", "Justus", "Levi", "Saul", "London", "Damian", "Salvatore", "Cameron", "Giancarlo", "Mason", "Malcolm", "Glenn", "Kael", "Ibrahim", "Kasey", "Tyler", "Mauricio", "Yahir", "Talan", "Brett", "Simon", "Troy", "Arjun", "Cade", "Ayden", "Kamari", "Dax", "Mario", "Deven", "Slade", "Emanuel", "Enrique", "Rashad", "Ethen", "Osvaldo", "Paul", "Ramiro", "Edgar", "Agustin", "Sullivan", "Jean", "Kaleb", "Jamar", "Jared", "Tristan", "Drake", "Ethan", "Kai", "Finnegan", "Ivan", "Soren", "Yusuf", "Rodolfo", "Davian", "Armani", "Ronin", "Brennan", "Marcus", "Axel", "Griffin", "Dennis", "Jakobe", "River", "Desmond", "Cohen", "Michael", "Brody", "Tony", "Jessie", "Zachery", "Julian", "Damion", "Anton", "Harold", "Raphael", "Vaughn", "Camren", "Craig", "Ruben", "Houston", "Colin", "Lewis", "Moises", "Samson", "Noel", "Russell", "Aydan", "Hugh", "Zane", "Easton", "Karson", "Raymond", "Johnathon", "Owen", "Lorenzo", "Salvador", "Darius", "Anderson", "Kane", "Jeffrey", "Oscar", "Jaylin", "Ernesto", "Keenan", "Lucas", "Clark", "Reed", "Quincy", "Kelvin", "Brooks", "Terrence", "Sam", "Krish", "Andrew", "Jovany", "Rodrigo", "Dean", "Donte", "Graham", "Darian", "August", "Coby", "Darwin", "Tristian", "Kamren", "Albert", "Tristen", "Jayson", "Shawn", "Seamus", "Johnny", "Bernard", "Braylen", "Ryker", "Patrick", "Branden", "Jadyn", "Gaven", "Van", "Zayne", "Korbin", "Nathan", "Gunner", "Zaid", "Izaiah", "Ari", "Marquis", "Kolby", "Gregory", "Adolfo", "Alex", "Trent", "Stephen", "Gordon", "Izayah", "Kamron", "Jonas", "Lamar", "Landyn", "Aiden", "Ryland", "Johnathan", "Cristian", "Jeffery", "Howard", "Dustin", "Braydon", "Jaxson", "Chase", "Joseph", "Tate", "Milo", "Allen", "Conrad", "Deegan", "Jackson", "Leon", "Aldo", "Kristian", "Dakota", "Efrain", "Joe", "Antony", "Thomas", "Nolan", "Charles", "Rafael", "Adriel", "Reilly", "Camryn", "Gideon", "Layne", "Jose", "Malachi", "Chad", "Gavin", "Jayden", "Maximo", "Malakai", "Brenden", "Brady", "Mark", "Ricky", "Coleman", "Duncan", "Matias", "Lance", "Damien", "Rey", "Brenton", "Micah", "Zachariah", "Jovan", "Rylan", "Zaiden", "Fernando", "Arthur", "Jonah", "Orlando", "Greyson", "Tyrone", "Brogan", "Bryce", "Cullen", "Emiliano", "Gianni", "Haiden", "Vance", "Darryl", "Robert", "Jan", "Nathanael", "Romeo", "Jamarion", "Cyrus", "Semaj", "Louis", "Zaire", "Marshall", "German", "Dillon", "Leland", "Callum", "Emmett", "Donald", "Grady", "Shane", "Eden", "Xander", "Colten", "Sidney", "Kian", "Darnell", "Avery", "Clarence", "Talon", "Brycen", "Ariel", "Tyson", "Kylan", "Javier", "Abdullah", "Alvin", "Zavier", "Bo", "Uriel", "Tommy", "Scott", "Jon", "Leroy", "Santiago", "Pierre", "Mohamed", "Leonidas", "Aaron", "Kameron", "Jay", "Riley", "Quinn", "Jefferson", "Brennen", "Paxton", "Grayson", "Adam", "Alfonso", "Rowan", "Donavan", "Adan", "Reynaldo", "Mekhi", "Myles", "Luka", "Jake", "Kade", "Bradyn", "Titus", "Ezequiel", "Cooper", "Charlie", "Walter", "Sammy", "Wesley", "Roderick", "Quintin", "Jaeden", "Jaylen", "King", "Alijah", "Deacon", "Amir", "Judah", "Angelo", "Keegan", "Jamie", "Jaxon", "Byron", "Khalil", "Jamal", "Sawyer", "Ayaan", "Yurem", "Isaias", "Hamza", "Issac", "Conor", "Fletcher", "Clayton", "Jamari", "Lincoln", "Antwan", "Armando", "Trevon", "Ashton", "Jagger", "Francis", "Brock", "Jovanny", "Gerardo", "Connor", "Tucker", "Sergio", "James", "Boston", "Mathias", "Addison", "Braiden", "Trystan", "Colby", "Zain", "Vicente", "Tyree", "Case", "Alec", "Memphis", "Nathen", "Ronan", "Carlo", "Harley", "Jair", "Quentin", "Lane", "Richard", "Rhys", "Landen", "Dario", "Bailey", "Lee", "Maximillian", "Jayce", "Caleb", "Santos", "Deangelo", "Winston", "Matteo", "Xzavier", "Jesus", "Alden", "Keon", "Quinten", "Moshe", "Gabriel", "Killian", "Luca", "Gary", "Jamir", "Juan", "Calvin", "Jamarcus", "Jameson", "Ahmed", "Andres", "Caiden", "Danny", "Edward", "Zechariah", "Jace", "Billy", "Jalen", "Tyrese", "Kason", "Kevin", "Jax", "Giovanny", "Guillermo", "Joey", "Giovanni", "Ulises", "Gael", "Dexter", "Nathanial", "Bridger", "Nathaniel", "Dale", "Hector", "Trey", "Jorge", "Nikolai", "Ean", "Roberto", "Cristopher", "Zackary", "Eduardo", "Todd", "Matthias", "Maximilian", "Casey", "Makhi", "Santino", "Demetrius", "Eric", "Trevor", "Nicolas", "Aditya", "Isaiah", "Julien", "Julio", "Hassan", "Finn", "Josiah", "Ahmad", "Dominick", "Aryan", "Jonathon", "Reagan", "Jarrett", "Wilson", "Shaun", "Lyric", "Emmanuel", "Kolten", "Cody", "Blake", "Raul", "Rylee", "Peyton", "Markus", "Allan", "Jaydon", "Gilbert", "Bobby", "Deandre", "Sheldon", "Stanley", "Logan", "Elisha", "Bryan", "Muhammad", "Dalton", "Kyler", "Davin", "Pedro", "Eli", "Trenton", "Darrell", "Camron", "Jacob", "Rishi", "Alan", "Darion", "Cannon", "Hayden", "Alberto", "Franklin", "Augustus", "Demarion", "Reginald", "Larry", "Finley", "Keshawn", "Ronald", "Adrian", "Kenneth", "Brent", "Devyn", "Harper", "Frederick", "Lamont", "Joaquin", "Abraham", "Victor", "Kendrick", "Kasen", "Cruz", "Pablo", "Brice", "Francisco", "Devon", "Frankie", "Gustavo", "Toby", "Damari", "Ramon", "Chace", "Jaydan", "Israel", "Jamison", "Frank", "Adrien", "Everett", "Kaiden", "Philip", "Elian", "Orion", "Enzo", "Kobe", "Elliot", "Mathew", "Sebastian", "Rex", "Joel", "Jadon", "Johan", "Jorden", "Zayden", "Garrett", "Brandon", "Irvin", "Cash", "Parker", "Wayne", "Denzel", "Kole", "Jabari", "Javion", "Marques", "Marvin", "Omari", "Carlos", "Jensen", "Elijah", "Jeremiah", "Douglas", "Zander", "Edwin", "Giovani", "Valentin", "Jonathan", "Jovani", "Samir", "Yael", "Spencer", "Weston", "Alejandro", "Harrison", "Luke", "Arnav", "Samuel", "Jayvon", "Josh", "Blaze", "Leonardo", "Kieran", "Kale", "Isiah", "Roger", "Cory", "Aden", "Dominique", "Jasiah", "Luis", "Christian", "Fabian", "Kareem", "Abel", "Dwayne", "Theodore", "Javon", "Messiah", "Kyan", "Dallas", "Immanuel", "Martin", "Rigoberto", "Heath", "Kamden", "Brendon", "Konner", "Kadyn", "Chaz", "Maverick", "Jaidyn", "Freddy", "Porter", "Chance", "Silas", "Jerimiah", "Skylar", "Jude", "Jayvion", "Brayden", "Lucian", "Roy", "Derick", "Karter", "Leonel", "Emilio", "Cayden", "Jacoby", "John", "Keyon", "David", "Geovanni", "Will", "Josue", "Carmelo", "Emery", "Kellen", "Ishaan", "Humberto", "Fisher", "Reese", "Turner", "Colton", "Manuel", "Kymani", "Jesse", "Alvaro", "Terrell", "Jaron", "Gavyn", "Dashawn", "Braylon", "Cornelius", "Trace", "Dylan", "Curtis", "Cristofer", "Gauge", "Malik", "Ray", "Justin", "Jerry", "Erick", "Tyrell", "Asa", "Aaden", "Dominik", "Darren", "Terrance", "Kelton", "Steven", "Elvis", "Kody", "William", "Reid", "Micheal", "Marcos", "Sean", "Emerson", "Devin", "Hugo", "Kingston", "Lennon", "Mohammed", "Dangelo", "Rodney", "Zachary", "Felipe", "Kyle", "Simeon", "Daniel", "Pranav", "Miguel", "Cesar", "Cedric", "Jordon", "Leandro", "Elliott", "Antonio", "Marley", "Phillip", "Chaim", "Aron", "Arturo", "Ellis", "Brayan", "Collin",  "Noah", "Liam", "William", "Mason", "James", "Benjamin", "Jacob", "Michael", "Elijah", "Ethan", "Alexander", "Oliver", "Daniel", "Lucas", "Matthew", "Aiden", "Jackson", "Logan", "David", "Joseph", "Samuel", "Henry", "Owen", "Sebastian", "Gabriel", "Carter", "Jayden", "John", "Luke", "Anthony", "Isaac", "Dylan", "Wyatt", "Andrew", "Joshua", "Christopher", "Grayson", "Jack", "Julian", "Ryan", "Jaxon", "Levi", "Nathan", "Caleb", "Hunter", "Christian", "Isaiah", "Thomas", "Aaron", "Lincoln", "Charles", "Eli", "Landon", "Connor", "Josiah", "Jonathan", "Cameron", "Jeremiah", "Mateo", "Adrian", "Hudson", "Robert", "Nicholas", "Brayden", "Nolan", "Easton", "Jordan", "Colton", "Evan", "Angel", "Asher", "Dominic", "Austin", "Leo", "Adam", "Jace", "Jose", "Ian", "Cooper", "Gavin", "Carson", "Jaxson", "Theodore", "Jason", "Ezra", "Chase", "Parker", "Xavier", "Kevin", "Zachary", "Tyler", "Ayden", "Elias", "Bryson", "Leonardo", "Greyson", "Sawyer", "Roman", "Brandon", "Bentley", "Kayden", "Ryder", "Nathaniel", "Vincent", "Miles", "Santiago", "Harrison", "Tristan", "Declan", "Cole", "Maxwell", "Luis", "Justin", "Everett", "Micah", "Axel", "Wesley", "Max", "Silas", "Weston", "Ezekiel", "Juan", "Damian", "Camden", "George", "Braxton", "Blake", "Jameson", "Diego", "Carlos", "Ivan", "Kingston", "Ashton", "Jesus", "Brody", "Emmett", "Abel", "Jayce", "Maverick", "Bennett", "Giovanni", "Eric", "Maddox", "Kaiden", "Kai", "Bryce", "Alex", "Calvin", "Ryker", "Jonah", "Luca", "King", "Timothy", "Alan", "Brantley", "Malachi", "Emmanuel", "Abraham", "Antonio", "Richard", "Jude", "Miguel", "Edward", "Victor", "Amir", "Joel", "Steven", "Matteo", "Hayden", "Patrick", "Grant", "Preston", "Tucker", "Jesse", "Finn", "Oscar", "Kaleb", "Gael", "Graham", "Elliot", "Alejandro", "Rowan", "Marcus", "Jeremy", "Zayden", "Karter", "Beau", "Bryan", "Maximus", "Aidan", "Avery", "Elliott", "August", "Nicolas", "Mark", "Colin", "Waylon", "Bradley", "Kyle", "Kaden", "Xander", "Caden", "Paxton", "Brian", "Dean", "Paul", "Peter", "Kenneth", "Jasper", "Lorenzo", "Zane", "Zion", "Beckett", "River", "Jax", "Andres", "Dawson", "Messiah", "Jaden", "Rhett", "Brady", "Lukas", "Omar", "Jorge", "Riley", "Derek", "Charlie", "Emiliano", "Griffin", "Myles", "Brooks", "Israel", "Sean", "Judah", "Iker", "Javier", "Erick", "Tanner", "Corbin", "Adriel", "Jase", "Jake", "Simon", "Cayden", "Knox", "Tobias", "Felix", "Milo", "Jayceon", "Gunner", "Francisco", "Kameron", "Cash", "Remington", "Reid", "Cody", "Martin", "Andre", "Rylan", "Maximiliano", "Zander", "Archer", "Barrett", "Killian", "Stephen", "Clayton", "Thiago", "Spencer", "Amari", "Josue", "Holden", "Emilio", "Arthur", "Chance", "Eduardo", "Leon", "Travis", "Ricardo", "Damien", "Manuel", "Gage", "Keegan", "Titus", "Raymond", "Kyrie", "Nash", "Finley", "Fernando", "Louis", "Peyton", "Rafael", "Phoenix", "Jaiden", "Lane", "Dallas", "Emerson", "Cristian", "Collin", "Kyler", "Devin", "Jeffrey", "Walter", "Anderson", "Cesar", "Mario", "Donovan", "Seth", "Garrett", "Enzo", "Conner", "Legend", "Caiden", "Beckham", "Jett", "Ronan", "Troy", "Karson", "Edwin", "Hector", "Cohen", "Ali", "Trevor", "Conor", "Orion", "Shane", "Andy", "Marco", "Walker", "Angelo", "Quinn", "Dalton", "Sergio", "Ace", "Tyson", "Johnny", "Dominick", "Colt", "Johnathan", "Gideon", "Julius", "Cruz", "Edgar", "Prince", "Dante", "Marshall", "Ellis", "Joaquin", "Major", "Arlo", "Alexis", "Reed", "Muhammad", "Frank", "Theo", "Shawn", "Erik", "Grady", "Nehemiah", "Daxton", "Atticus", "Gregory", "Matias", "Bodhi", "Emanuel", "Jensen", "Kash", "Romeo", "Desmond", "Solomon", "Allen", "Jaylen", "Leonel", "Roberto", "Pedro", "Kason", "Fabian", "Clark", "Dakota", "Abram", "Noel", "Kayson", "Malik", "Odin", "Jared", "Warren", "Kendrick", "Rory", "Jonas", "Adan", "Ibrahim", "Trenton", "Finnegan", "Landen", "Adonis", "Jay", "Ruben", "Drew", "Gunnar", "Ismael", "Jaxton", "Kane", "Hendrix", "Atlas", "Pablo", "Zaiden", "Wade", "Russell", "Cade", "Sullivan", "Malcolm", "Kade", "Harvey", "Princeton", "Skyler", "Corey", "Esteban", "Leland", "Derrick", "Ari", "Kamden", "Zayn", "Porter", "Franklin", "Raiden", "Braylon", "Ronald", "Cyrus", "Benson", "Malakai", "Hugo", "Marcos", "Maximilian", "Hayes", "Philip", "Lawson", "Phillip", "Bruce", "Braylen", "Zachariah", "Damon", "Dexter", "Enrique", "Aden", "Lennox", "Drake", "Khalil", "Tate", "Zayne", "Milan", "Brock", "Brendan", "Armando", "Gerardo", "Jamison", "Rocco", "Nasir", "Augustus", "Sterling", "Dillon", "Royal", "Royce", "Moses", "Jaime", "Johan", "Scott", "Chandler", "Raul", "Remy", "Cason", "Luka", "Mohamed", "Deacon", "Winston", "Albert", "Pierce", "Taylor", "Nikolai", "Bowen", "Danny", "Francis", "Brycen", "Jayson", "Moises", "Keith", "Hank", "Quentin", "Kasen", "Donald", "Julio", "Davis", "Alec", "Kolton", "Lawrence", "Rhys", "Kian", "Nico", "Matthias", "Kellan", "Mathias", "Ariel", "Justice", "Braden", "Rodrigo", "Ryland", "Leonidas", "Jerry", "Ronin", "Alijah", "Kobe", "Lewis", "Dennis", "Luciano", "Ahmed", "Frederick", "Darius", "Arjun", "Dax", "Asa", "Nixon", "Ezequiel", "Eden", "Tony", "Landyn", "Emmitt", "Mathew", "Kyson", "Otto", "Saul", "Uriel", "Colby", "Dustin", "Omari", "Raphael", "Brennan", "Callen", "Keaton", "Arturo", "Isaias", "Roy", "Kieran", "Ty", "Dorian", "Cannon", "Marvin", "Cullen", "Sage", "Uriah", "Darren", "Cayson", "Aarav", "Case", "Izaiah", "Armani", "Gustavo", "Jimmy", "Alberto", "Duke", "Rayan", "Chris", "Casey", "Roland", "Moshe", "Curtis", "Mauricio", "Alonzo", "Yusuf", "Nikolas", "Soren", "Hamza", "Jasiah", "Alfredo", "Devon", "Jalen", "Raylan", "Edison", "Jamari", "Oakley", "Samson", "Lionel", "Reece", "Sam", "Quincy", "Jakob", "Apollo", "Kingsley", "Ahmad", "Bryant", "Alvin", "Trey", "Mohammed", "Conrad", "Mitchell", "Salvador", "Quinton", "Bo", "Mohammad", "Elian", "Gianni", "Lennon", "Leonard", "Douglas", "Cassius", "Ricky", "Carl", "Gary", "Larry", "Colten", "Ramon", "Kellen", "Korbin", "Wilson", "Kylan", "Santino", "Niko", "Issac", "Jagger", "Lance", "Joe", "Julien", "Orlando", "Jefferson", "Memphis", "Crosby", "Mekhi", "Nelson", "Lucian", "Ayaan", "Nathanael", "Neil", "Makai", "Finnley", "Rex", "Forrest", "Layton", "Randy", "Boston", "Tristen", "Tatum", "Brayan", "Sylas", "Thaddeus", "Trent", "Morgan", "Roger", "Abdullah", "Casen", "Maurice", "Sincere", "Titan", "Kyree", "Talon", "Fletcher", "Langston", "Eddie", "Briggs", "Noe", "Kamari", "Rowen", "Zeke", "Aldo", "Kaison", "Valentino", "Vihaan", "Alden", "Terry", "Bruno", "Canaan", "Lee", "Byron", "Kohen", "Reese", "Braydon", "Madden", "Deandre", "Flynn", "Harley", "Hezekiah", "Amos", "Harry", "Zain", "Alessandro", "Stanley", "Lucca", "Branson", "Ernesto", "Joziah", "Leandro", "Ares", "Marc", "Blaine", "Joey", "Jon", "Yosef", "Carmelo", "Franco", "Jamal", "Mack", "Kristian", "Dane", "Lachlan", "Callum", "Graysen", "Kye", "Ben", "Aryan", "Gannon", "London", "Kareem", "Stetson", "Kristopher", "Tomas", "Ford", "Bronson", "Enoch", "Baylor", "Kaysen", "Axton", "Jaxen", "Rodney", "Dominik", "Emery", "Layne", "Wilder", "Jamir", "Tripp", "Kelvin", "Vicente", "Augustine", "Brett", "Callan", "Clay", "Crew", "Brecken", "Jacoby", "Abdiel", "Allan", "Maxton", "Melvin", "Rayden", "Terrance", "Demetrius", "Rohan", "Wayne", "Yahir", "Arian", "Fox", "Brentley", "Ray", "Zechariah", "Cain", "Guillermo", "Otis", "Tommy", "Alonso", "Dariel", "Jedidiah", "Maximo", "Cory", "Grey", "Reyansh", "Skylar", "Marcelo", "Castiel", "Kase", "Toby", "Bobby", "Jadiel", "Marcel", "Lochlan", "Jeffery", "Zackary", "Fisher", "Yousef", "Aron", "Chaim", "Felipe", "Axl", "Anakin", "Brodie", "Dash", "Anson", "Maison", "Zaire", "Samir", "Damari", "Elisha", "Davion", "Eugene", "Hassan", "Kannon", "Azariah", "Clyde", "Harper", "Nickolas", "Boone", "Magnus", "Coen", "Kole", "Willie", "Chad", "Xzavier", "Duncan", "Harold", "Houston", "Landry", "Trace", "Alvaro", "Ameer", "Junior", "Kamdyn", "Vincenzo", "Gerald", "Marlon", "Payton", "Jamie", "Kamryn", "Camdyn", "Anders", "Aydin", "Bentlee", "Reginald", "Jaziel", "Benton", "Bodie", "Misael", "Westin", "Will", "Channing", "Harlan", "Kody", "Kolten", "Thatcher", "Valentin", "Henrik", "Keenan", "Terrence", "Denver", "Emory", "Jerome", "Jermaine", "Cairo", "Sonny", "Mayson", "Alfred", "Cristiano", "Darian", "Eliseo", "Maxim", "Stefan", "Hugh", "Santana", "Javion", "Leighton", "Miller", "Riaan", "Rogelio", "Rudy", "Blaze", "Bridger", "Darwin", "Markus", "Ronnie", "Shepherd", "Vaughn", "Billy", "Marley", "Huxley", "Rey", "Keagan", "Draven", "Shiloh", "Brysen", "Giovani", "Alistair", "Brixton", "Heath", "Kalel", "Reuben", "Ridge", "Adrien", "Rene", "Sutton", "Zyaire", "Ephraim", "Neymar", "Vance", "Zavier", "Jessie", "Dangelo", "Dayton", "Emmet", "Ishaan", "Zaid", "Camron", "Jordy", "Kenny", "Micheal", "Shaun", "Alexzander", "Howard", "Kylo", "Eason", "Blaise", "Craig", "Hakeem", "Karim", "Jabari", "Jairo", "Khalid", "Turner", "Van", "Westley", "Braiden", "Cedric", "Darrell", "Louie", "Mustafa", "Yehuda", "Justus", "Salvatore", "Alfonso", "Kendall", "Konnor", "Lamar", "Gibson", "Ignacio", "Koda", "Leroy", "Terrell", "Tristian", "Achilles", "Jericho", "Ramiro", "Yahya", "Rolando", "Vivaan", "Dario", "Jair", "Ulises", "Judson", "Kashton", "Tadeo", "Marquis", "Avi", "Dimitri", "Dwayne", "Musa", "Ahmir", "Gordon", "Ira", "Seamus", "Kolby", "Brantlee", "Javon", "Rocky", "Urijah", "Brayson", "Mikael", "Santos", "Gilbert", "Greysen", "Lyric", "Coleman", "Dominique", "Foster", "Gauge", "Harris", "Kymani", "Leif", "Agustin", "Keanu", "Konner", "Brent", "Immanuel", "Benicio", "Ernest", "Merrick", "Yisroel", "Amare", "Jad", "Lyle", "Creed", "Krish", "Maddux", "Camilo", "Giancarlo", "Jamarion", "Steve", "Anton", "Jamar", "Jeremias", "Ralph", "Wesson", "Bode", "Braeden", "Brenden", "Eliezer", "Davian", "Gus", "Jonathon"]

    var femaleNames = [ "Maleah", "Cristal", "Catalina", "Kirsten", "Sandra", "Hailee", "Phoebe", "Ashlynn", "Caitlin", "Jazlynn", "Brianna", "Wendy", "Lindsay", "Mariah", "Hillary", "Sonia", "Elianna", "Jadyn", "Leticia", "Jimena", "Skylar", "Ingrid", "Lorelai", "Lilly", "Itzel", "Carlie", "Hope", "Raelynn", "Nia", "Adelyn", "Abbey", "Rayna", "Gabriela", "Alicia", "Angelica", "Brenna", "Judith", "Eve", "Gracie", "Allison", "Cristina", "Yamilet", "Camryn", "Cherish", "Aracely", "Ariana", "Meadow", "Livia", "Maggie", "Laci", "Ariel", "Amelia", "Tiara", "Kaylen", "Karli", "Viviana", "Kayleigh", "Kara", "Anne", "Aliana", "Beatrice", "Mattie", "Caroline", "Yareli", "Delaney", "Genesis", "Cara", "Chaya", "Chelsea", "Annie", "Dania", "Shayna", "Juliet", "Mikayla", "Shelby", "Claudia", "Emmalee", "Julie", "Rihanna", "Alexia", "Aspen", "Jenna", "Aleah", "Paityn", "June", "Giana", "Mckayla", "Aniyah", "Lola", "Rory", "Kaitlyn", "Shea", "Danika", "Monserrat", "Luciana", "Giovanna", "Cassidy", "Jaylin", "Yazmin", "Mareli", "Lorelei", "Belen", "Gloria", "Paola", "April", "Keely", "Danielle", "Isabela", "Camille", "Karen", "Selina", "Amiya", "Aurora", "Nylah", "Laylah", "Ashleigh", "Quinn", "Alondra", "Lilianna", "Kaelyn", "Laila", "Haleigh", "Journey", "Maritza", "Destiny", "Karma", "Josie", "Clara", "Shiloh", "Crystal", "Izabella", "Mira", "Heidi", "Lila", "Maria", "Moriah", "Ashlyn", "Fernanda", "Kaiya", "Tatiana", "Virginia", "Macy", "Iliana", "Kaylee", "Laney", "Lydia", "Kendall", "Paula", "Morgan", "Katrina", "Kamora", "Aleena", "Alexandra", "Eleanor", "Amya", "Jocelynn", "Holly", "Susan", "Audrina", "Brooke", "Julissa", "Cali", "Addisyn", "Martha", "Alissa", "Alyson", "Shayla", "Joyce", "Melody", "Dayana", "Kate", "Iyana", "Regan", "Jolie", "Tabitha", "Kaila", "Cindy", "Maren", "Saige", "Yuliana", "Maribel", "Adeline", "Mylee", "Sasha", "Yasmine", "Alice", "London", "Adalyn", "Aliza", "Kendra", "Braelyn", "Cecilia", "Daniella", "Sarahi", "America", "Adelaide", "Savanna", "Christine", "Marely", "Jessica", "Reagan", "Annabella", "Mariam", "Denisse", "Estrella", "Yesenia", "Giselle", "Violet", "Tamara", "Lailah", "Ryann", "Kaliyah", "Amari", "Monica", "Rowan", "Danna", "Fatima", "Sidney", "Bethany", "Ciara", "Natalee", "Abbigail", "Gabrielle", "Bryanna", "Savanah", "Amiyah", "Leilani", "Cailyn", "Christina", "Luz", "Haven", "Lilliana", "Jayla", "Kathy", "Dana", "Kaia", "Lizeth", "Patricia", "Kennedy", "Hazel", "Jocelyn", "Adriana", "Juliana", "Evelyn", "Jade", "Alannah", "Lea", "Janelle", "Mackenzie", "Skyler", "Shania", "Piper", "Layla", "Selena", "Jazmin", "Sariah", "Mercedes", "Jasmin", "Carissa", "Alanna", "Samara", "Jacquelyn", "Aileen", "Helena", "Kristin", "Selah", "Elsa", "Kelsie", "Addison", "Patience", "Natalya", "Charlie", "Macie", "Kianna", "Jennifer", "Skye", "Kaylyn", "Linda", "Breanna", "Kristina", "Aubrey", "Briley", "Stephany", "Camila", "Isabel", "Kendal", "Ally", "Karley", "Jessie", "Francesca", "Salma", "Leyla", "Diamond", "Alisha", "Avery", "Ireland", "Lilia", "Genevieve", "Noemi", "Kaitlynn", "Anabella", "Tia", "Keyla", "Kyleigh", "Micaela", "Kennedi", "Elena", "Greta", "Lexie", "Marie", "Emery", "Brynlee", "Paisley", "Lucy", "Evie", "Anika", "Amara", "Annabelle", "Julianne", "Jacqueline", "Gemma", "Jaylynn", "Elaine", "Nina", "Kailey", "Yasmin", "Kristen", "Jaida", "Rachael", "Serena", "Abigayle", "Britney", "Xiomara", "Alia", "Emily", "Azaria", "Mckenna", "Zariah", "Monique", "Sierra", "Karissa", "Autumn", "Nathalie", "Iris", "Eliana", "Rebekah", "Donna", "Casey", "Mary", "Kenya", "Lauren", "Jayleen", "Kamila", "Marley", "Lara", "Makaila", "Lyric", "Angelina", "Jamiya", "Kenzie", "Lorena", "Maeve", "Maliyah", "Annika", "Mallory", "Veronica", "Addyson", "Ada", "Kaya", "Sabrina", "Jaylen", "Frida", "Charlize", "Carolyn", "Krystal", "Brynn", "Denise", "Jaylee", "Aryanna", "Madeleine", "Ashly", "Courtney", "Eden", "Mariela", "Milagros", "Myla", "Cynthia", "Alana", "Marina", "Deanna", "Jayda", "Kathleen", "Jaden", "Evangeline", "Kali", "Aria", "Sara", "Kathryn", "Sharon", "Saniya", "Valentina", "Reyna", "Cassie", "Kiana", "Campbell", "Yoselin", "Norah", "Juliette", "Jaslene", "Penelope", "Jaylyn", "Jaylene", "Miracle", "Hanna", "Amaya", "Kassidy", "Daniela", "Julia", "Callie", "Stella", "Paris", "Kimberly", "Jewel", "Danica", "Leia", "Rebecca", "Charity", "Asia", "Cecelia", "Amber", "Ella", "Madalynn", "Kierra", "Kamryn", "Rubi", "Celia", "Sanai", "Reese", "Anabelle", "Madyson", "Lilian", "Kira", "Evelin", "Abigail", "Elisa", "Lilyana", "Alyssa", "Talia", "Diya", "Ayana", "Tessa", "Esperanza", "Paloma", "Cloe", "Dayanara", "Sydnee", "Kiley", "Madeline", "Eva", "Ana", "Shyann", "Alexa", "Arabella", "Desiree", "Alani", "Maddison", "Mikaela", "Deborah", "Scarlet", "Finley", "Karlee", "Ali", "Eileen", "Stacy", "Thalia", "Leah", "Areli", "Kaylie", "Kyra", "Miranda", "Summer", "Karla", "Sanaa", "Nathaly", "Gillian", "Janiah", "Anastasia", "Lucia", "Taylor", "Harper", "Nora", "Reina", "Chanel", "Tianna", "Victoria", "Saniyah", "Aimee", "Kiera", "Taniya", "Joy", "Hayley", "Alisson", "Paige", "Ansley", "Yadira", "Leila", "Valeria", "Charlotte", "Isabelle", "Kayden", "Tatum", "Aisha", "Stephanie", "Katelyn", "Aliya", "Alina", "Krista", "Julianna", "Makayla", "Briana", "Elizabeth", "Larissa", "Hadley", "Shyla", "Miriam", "Dylan", "Katherine", "Emilie", "Amelie", "Sienna", "Willow", "Frances", "Taniyah", "Libby", "Amaris", "Cora", "Joselyn", "Faith", "Kaitlin", "Mariyah", "Teresa", "Kylee", "Perla", "Essence", "Akira", "Precious", "Erin", "Olive", "Lily", "Miley", "Laura", "Isis", "Zion", "Tess", "Brylee", "Margaret", "Anahi", "Cadence", "Vivian", "Ariella", "Jazmyn", "Gisselle", "Cassandra", "Aryana", "Makena", "Carlee", "Dakota", "Lauryn", "Janiyah", "Audrey", "Sarah", "Marissa", "Mollie", "Carmen", "Gianna", "Janet", "Arielle", "Ashanti", "Haylie", "Miya", "Neveah", "Ximena", "Jamie", "Katie", "Princess", "Caylee", "Mia", "Kelly", "Lexi", "Jaylah", "Erica", "Laurel", "Marlee", "Kaley", "Emilia", "Heidy", "Sadie", "Jada", "Hallie", "Carla", "Karly", "Savannah", "Mila", "Parker", "Priscilla", "Tania", "Matilda", "Lesly", "Joslyn", "Marin", "Ashtyn", "Celeste", "Kaylah", "Averi", "Dayami", "Serenity", "Tori", "Brooklynn", "Jaqueline", "Chana", "Amanda", "Kyla", "Mayra", "Giuliana", "Melina", "Jillian", "Adalynn", "Haley", "Nathalia", "Naomi", "Charlee", "Trinity", "Abril", "Sophia", "Dahlia", "Corinne", "Jaslyn", "Melany", "Bridget", "Kayla", "Roselyn", "Karsyn", "Heaven", "Shyanne", "Annalise", "Carley", "Lizbeth", "Kinley", "Miah", "Johanna", "Lacey", "Jacey", "Natasha", "Rose", "Kaylin", "Rylee", "Adyson", "Lina", "Elle", "Elisabeth", "Natalie", "Dominique", "Liliana", "Gina", "Natalia", "Cameron", "Destiney", "Avah", "Gwendolyn", "Mya", "Maci", "Renee", "Anna", "Hayden", "Marilyn", "Amirah", "Joanna", "Gracelyn", "Rosa", "Hailie", "Kayley", "Meghan", "Elsie", "Angelique", "Alexus", "Nevaeh", "Vanessa", "Madilynn", "Shannon", "Catherine", "Giada", "Bailee", "Jakayla", "Lisa", "Madison", "Brittany", "Marlene", "Lainey", "Melissa", "Ann", "Hailey", "Damaris", "Mireya", "Josephine", "Helen", "Madisyn", "Elliana", "Arianna", "Jordan", "Yaritza", "Michelle", "Makenzie", "Kaylynn", "Belinda", "Ellen", "Abby", "Brooklyn", "Barbara", "Tara", "Jordin", "Ayla", "Angie", "Samantha", "Brisa", "Baylee", "Madalyn", "Chloe", "Hadassah", "Carleigh", "Kinsley", "Gabriella", "Kylie", "Taryn", "Armani", "Raquel", "Halle", "Aliyah", "Justine", "Regina", "Anabel", "Deja", "Kasey", "Alyvia", "Khloe", "Kadence", "Amiah", "Annabel", "Raven", "Karlie", "Emerson", "Jaliyah", "Bella", "Carolina", "Amina", "Sydney", "Daphne", "Esther", "Dalia", "Makenna", "Fiona", "Micah", "Nataly", "Amira", "Delilah", "Kailee", "Izabelle", "Zaniyah", "Jazlyn", "Mina", "Alexis", "Marlie", "Rachel", "Elyse", "Cheyanne", "Alexandria", "Georgia", "Emmy", "Isabella", "Tiana", "Shirley", "Taliyah", "Grace", "Madilyn", "Cierra", "Ava", "Kaleigh", "Aubree", "Emelia", "Aiyana", "Raina", "Angeline", "Nyla", "Kimora", "Rhianna", "Desirae", "Felicity", "Adrianna", "Gretchen", "Marisol", "Alessandra", "Jenny", "Mckinley", "Sage", "Ellie", "Aubrie", "Averie", "Angel", "Zoey", "Azul", "Litzy", "Ainsley", "Magdalena", "Alisa", "Phoenix", "India", "Mylie", "Elise", "Keira", "Dulce", "Allyson", "Tamia", "Justice", "Lilah", "Kenna", "Janiya", "Brenda", "Noelle", "Hannah", "Jordyn", "Bria", "Irene", "Mckenzie", "Rosemary", "Luna", "Whitney", "Isabell", "Karina", "Kiersten", "Clare", "Megan", "Nayeli", "Diana", "Isla", "Lillie", "Raegan", "Ruth", "Nadia", "Londyn", "Esmeralda", "Elaina", "Kamari", "Pamela", "Mariana", "Jane", "Myah", "Guadalupe", "Caitlyn", "Liberty", "Meredith", "Alivia", "Kelsey", "Angela", "Ivy", "Leslie", "Lillianna", "Jazlene", "Athena", "Cheyenne", "Yaretzi", "Zaria", "Lena", "Riley", "Carly", "Shaylee", "Lyla", "Heather", "Janae", "Alaina", "Abbie", "Daisy", "Alena", "Kassandra", "Leanna", "Jazmine", "Marianna", "Adison", "Scarlett", "Maya", "Chasity", "Kailyn", "Claire", "Ashlee", "Sarai", "Dixie", "Anya", "Presley", "Madelynn", "Peyton", "Araceli", "Nicole", "Emely", "Malia", "Zara", "Edith", "Rayne", "Theresa", "Carina", "Amani", "Ruby", "Destinee", "Lucille", "Jamya", "Bailey", "Lillian", "Aaliyah", "Jaelynn", "Nancy", "Camilla", "Allisson", "Jaiden", "Gia", "Olivia", "Sherlyn", "Naima", "Payton", "Abagail", "Liana", "Andrea", "Melanie", "Maryjane", "Tanya", "Ryleigh", "Janessa", "Kaydence", "Jasmine", "Sylvia", "Haylee", "Alejandra", "Kallie", "Teagan", "Kiara", "Jaelyn", "Valerie", "Harmony", "Simone", "Valery", "Jayden", "Lana", "Siena", "Ayanna", "Adrienne", "Lindsey", "Imani", "Zoe", "Zoie", "Molly", "Lia", "Erika", "Anaya", "Sophie", "Amy", "Emilee", "Alison", "Sloane", "Ryan", "Rylie", "Hana", "Tiffany", "Katelynn", "Kenley", "Allie", "Nyasia", "Emma", "Marisa", "Michaela", "Ashley", "Payten", "Eliza", "Aniya", "Brielle", "Bianca", "Shaniya", "Harley", "Skyla", "Alayna", "Aylin", "Macey", "Madelyn", "Jaidyn", "Paulina", "Jaycee", "Nola", "Maia", "Mara", "Logan", "Clarissa", "Sofia", "Alma", "Riya", "Arely", "Emma", "Olivia", "Ava", "Sophia", "Isabella", "Mia", "Charlotte", "Abigail", "Emily", "Harper", "Amelia", "Evelyn", "Elizabeth", "Sofia", "Madison", "Avery", "Ella", "Scarlett", "Grace", "Chloe", "Victoria", "Riley", "Aria", "Lily", "Aubrey", "Zoey", "Penelope", "Lillian", "Addison", "Layla", "Natalie", "Camila", "Hannah", "Brooklyn", "Zoe", "Nora", "Leah", "Savannah", "Audrey", "Claire", "Eleanor", "Skylar", "Ellie", "Samantha", "Stella", "Paisley", "Violet", "Mila", "Allison", "Alexa", "Anna", "Hazel", "Aaliyah", "Ariana", "Lucy", "Caroline", "Sarah", "Genesis", "Kennedy", "Sadie", "Gabriella", "Madelyn", "Adeline", "Maya", "Autumn", "Aurora", "Piper", "Hailey", "Arianna", "Kaylee", "Ruby", "Serenity", "Eva", "Naomi", "Nevaeh", "Alice", "Luna", "Bella", "Quinn", "Lydia", "Peyton", "Melanie", "Kylie", "Aubree", "Mackenzie", "Kinsley", "Cora", "Julia", "Taylor", "Katherine", "Madeline", "Gianna", "Eliana", "Elena", "Vivian", "Willow", "Reagan", "Brianna", "Clara", "Faith", "Ashley", "Emilia", "Isabelle", "Annabelle", "Rylee", "Valentina", "Everly", "Hadley", "Sophie", "Alexandra", "Natalia", "Ivy", "Maria", "Josephine", "Delilah", "Bailey", "Jade", "Ximena", "Alexis", "Alyssa", "Brielle", "Jasmine", "Liliana", "Adalynn", "Khloe", "Isla", "Mary", "Andrea", "Kayla", "Emery", "London", "Kimberly", "Morgan", "Lauren", "Sydney", "Nova", "Trinity", "Lyla", "Margaret", "Ariel", "Adalyn", "Athena", "Lilly", "Melody", "Isabel", "Jordyn", "Jocelyn", "Eden", "Paige", "Teagan", "Valeria", "Sara", "Norah", "Rose", "Aliyah", "Mckenzie", "Molly", "Raelynn", "Leilani", "Valerie", "Emerson", "Juliana", "Nicole", "Laila", "Makayla", "Elise", "Mariah", "Mya", "Arya", "Ryleigh", "Adaline", "Brooke", "Rachel", "Eliza", "Angelina", "Amy", "Reese", "Alina", "Cecilia", "Londyn", "Gracie", "Payton", "Esther", "Alaina", "Charlie", "Iris", "Arabella", "Genevieve", "Finley", "Daisy", "Harmony", "Anastasia", "Kendall", "Daniela", "Catherine", "Adelyn", "Vanessa", "Brooklynn", "Juliette", "Julianna", "Presley", "Summer", "Destiny", "Amaya", "Hayden", "Alana", "Rebecca", "Michelle", "Eloise", "Lila", "Fiona", "Callie", "Lucia", "Angela", "Marley", "Adriana", "Parker", "Alexandria", "Giselle", "Alivia", "Alayna", "Brynlee", "Ana", "Harley", "Gabrielle", "Dakota", "Georgia", "Juliet", "Tessa", "Leila", "Kate", "Jayla", "Jessica", "Lola", "Stephanie", "Sienna", "Josie", "Daleyza", "Rowan", "Evangeline", "Hope", "Maggie", "Camille", "Makenzie", "Vivienne", "Sawyer", "Gemma", "Joanna", "Noelle", "Elliana", "Mckenna", "Gabriela", "Kinley", "Rosalie", "Brynn", "Amiyah", "Melissa", "Adelaide", "Malia", "Ayla", "Izabella", "Delaney", "Cali", "Journey", "Maci", "Elaina", "Sloane", "June", "Diana", "Blakely", "Aniyah", "Olive", "Jennifer", "Paris", "Miranda", "Lena", "Jacqueline", "Paislee", "Jane", "Raegan", "Lyric", "Lilliana", "Adelynn", "Lucille", "Selena", "River", "Annie", "Cassidy", "Jordan", "Thea", "Mariana", "Amina", "Miriam", "Haven", "Remi", "Charlee", "Blake", "Lilah", "Ruth", "Amara", "Kali", "Kylee", "Arielle", "Emersyn", "Alessandra", "Fatima", "Talia", "Vera", "Nina", "Ariah", "Allie", "Addilyn", "Keira", "Catalina", "Raelyn", "Phoebe", "Lexi", "Zara", "Makenna", "Ember", "Leia", "Rylie", "Angel", "Haley", "Madilyn", "Kaitlyn", "Heaven", "Nyla", "Amanda", "Freya", "Journee", "Daniella", "Danielle", "Kenzie", "Ariella", "Lia", "Brinley", "Maddison", "Shelby", "Elsie", "Kamila", "Camilla", "Alison", "Ainsley", "Ada", "Laura", "Kendra", "Kayleigh", "Adrianna", "Madeleine", "Joy", "Juniper", "Chelsea", "Sage", "Erin", "Felicity", "Gracelyn", "Nadia", "Skyler", "Briella", "Aspen", "Myla", "Heidi", "Katie", "Zuri", "Jenna", "Kyla", "Kaia", "Kira", "Sabrina", "Gracelynn", "Gia", "Amira", "Alexia", "Amber", "Cadence", "Esmeralda", "Katelyn", "Scarlet", "Kamryn", "Alicia", "Miracle", "Kelsey", "Logan", "Kiara", "Bianca", "Kaydence", "Alondra", "Evelynn", "Christina", "Lana", "Aviana", "Dahlia", "Dylan", "Anaya", "Ashlyn", "Jada", "Kathryn", "Jimena", "Elle", "Gwendolyn", "April", "Carmen", "Mikayla", "Annalise", "Maeve", "Camryn", "Helen", "Daphne", "Braelynn", "Carly", "Cheyenne", "Leslie", "Veronica", "Nylah", "Kennedi", "Skye", "Evie", "Averie", "Harlow", "Allyson", "Carolina", "Tatum", "Francesca", "Aylin", "Ashlynn", "Sierra", "Mckinley", "Leighton", "Maliyah", "Annabella", "Megan", "Margot", "Luciana", "Mallory", "Millie", "Regina", "Nia", "Rosemary", "Saylor", "Abby", "Briana", "Phoenix", "Viviana", "Alejandra", "Frances", "Jayleen", "Serena", "Lorelei", "Zariah", "Ariyah", "Jazmin", "Avianna", "Carter", "Marlee", "Eve", "Aleah", "Remington", "Amari", "Bethany", "Fernanda", "Malaysia", "Willa", "Liana", "Ryan", "Addyson", "Yaretzi", "Colette", "Macie", "Selah", "Nayeli", "Madelynn", "Michaela", "Priscilla", "Janelle", "Samara", "Justice", "Itzel", "Emely", "Lennon", "Aubrie", "Julie", "Kyleigh", "Sarai", "Braelyn", "Alani", "Lacey", "Edith", "Elisa", "Macy", "Marilyn", "Baylee", "Karina", "Raven", "Celeste", "Adelina", "Matilda", "Kara", "Jamie", "Charleigh", "Aisha", "Kassidy", "Hattie", "Karen", "Sylvia", "Winter", "Aleena", "Angelica", "Magnolia", "Cataleya", "Danna", "Henley", "Mabel", "Kelly", "Brylee", "Jazlyn", "Virginia", "Helena", "Jillian", "Madilynn", "Blair", "Galilea", "Kensley", "Wren", "Bristol", "Emmalyn", "Holly", "Lauryn", "Cameron", "Hanna", "Meredith", "Royalty", "Sasha", "Lilith", "Jazmine", "Alayah", "Madisyn", "Cecelia", "Renata", "Lainey", "Liberty", "Brittany", "Savanna", "Imani", "Kyra", "Mira", "Mariam", "Tenley", "Aitana", "Gloria", "Maryam", "Giuliana", "Skyla", "Anne", "Johanna", "Myra", "Charley", "Tiffany", "Beatrice", "Karla", "Cynthia", "Janiyah", "Melany", "Alanna", "Lilian", "Demi", "Pearl", "Jaylah", "Maia", "Cassandra", "Jolene", "Crystal", "Everleigh", "Maisie", "Anahi", "Elianna", "Hallie", "Ivanna", "Oakley", "Ophelia", "Emelia", "Mae", "Marie", "Rebekah", "Azalea", "Haylee", "Bailee", "Anika", "Monica", "Kimber", "Sloan", "Jayda", "Anya", "Bridget", "Kailey", "Julissa", "Marissa", "Leona", "Aileen", "Addisyn", "Kaliyah", "Coraline", "Dayana", "Kaylie", "Celine", "Jaliyah", "Elaine", "Lillie", "Melina", "Jaelyn", "Shiloh", "Jemma", "Madalyn", "Addilynn", "Alaia", "Mikaela", "Adley", "Saige", "Angie", "Dallas", "Braylee", "Elsa", "Emmy", "Hayley", "Siena", "Lorelai", "Miah", "Royal", "Tiana", "Elliot", "Kori", "Greta", "Charli", "Elliott", "Julieta", "Alena", "Rory", "Harlee", "Rosa", "Ivory", "Guadalupe", "Jessie", "Laurel", "Annika", "Clarissa", "Karsyn", "Collins", "Kenia", "Milani", "Alia", "Chanel", "Dorothy", "Armani", "Emory", "Ellen", "Irene", "Adele", "Jaelynn", "Myah", "Hadassah", "Jayde", "Lilyana", "Malaya", "Kenna", "Amelie", "Reyna", "Teresa", "Angelique", "Linda", "Nathalie", "Kora", "Zahra", "Aurelia", "Kalani", "Rayna", "Jolie", "Sutton", "Aniya", "Jessa", "Laylah", "Esme", "Keyla", "Ariya", "Elisabeth", "Marina", "Mara", "Meadow", "Aliza", "Zelda", "Lea", "Elyse", "Monroe", "Penny", "Lilianna", "Lylah", "Liv", "Scarlette", "Kadence", "Ansley", "Emilee", "Perla", "Annabel", "Alaya", "Milena", "Karter", "Avah", "Amirah", "Leyla", "Livia", "Chaya", "Wynter", "Jaycee", "Lailah", "Amani", "Milana", "Lennox", "Remy", "Zariyah", "Clare", "Hadlee", "Kiera", "Rosie", "Alma", "Kaelyn", "Eileen", "Jayden", "Martha", "Noa", "Christine", "Ariadne", "Natasha", "Emerie", "Tatiana", "Joselyn", "Joyce", "Salma", "Amiya", "Audrina", "Kinslee", "Jaylene", "Analia", "Erika", "Lexie", "Mina", "Patricia", "Dulce", "Poppy", "Aubrielle", "Clementine", "Lara", "Amaris", "Milan", "Aliana", "Kailani", "Kaylani", "Maleah", "Belen", "Simone", "Whitney", "Elora", "Claudia", "Gwen", "Rylan", "Antonella", "Khaleesi", "Arely", "Princess", "Kenley", "Itzayana", "Karlee", "Paulina", "Laney", "Bria", "Chana", "Kynlee", "Astrid", "Giovanna", "Lindsey", "Sky", "Aryanna", "Ayleen", "Azariah", "Joelle", "Nala", "Tori", "Noemi", "Breanna", "Emmeline", "Mavis", "Amalia", "Mercy", "Tinley", "Averi", "Aiyana", "Alyson", "Corinne", "Leanna", "Madalynn", "Briar", "Jaylee", "Kailyn", "Kassandra", "Kaylin", "Nataly", "Amia", "Yareli", "Cara", "Taliyah", "Thalia", "Carolyn", "Estrella", "Montserrat", "Zaylee", "Anabelle", "Deborah", "Frida", "Zaria", "Kairi", "Katalina", "Nola", "Erica", "Isabela", "Jazlynn", "Paula", "Faye", "Louisa", "Alessia", "Courtney", "Reign", "Ryann", "Stevie", "Heavenly", "Lisa", "Roselyn", "Raina", "Adrienne", "Celia", "Estelle", "Marianna", "Brenda", "Kathleen", "Paola", "Hunter", "Ellis", "Hana", "Lina", "Raquel", "Aliya", "Iliana", "Kallie", "Emmalynn", "Naya", "Reina", "Wendy", "Landry", "Barbara", "Casey", "Karlie", "Kiana", "Rivka", "Kenya", "Aya", "Carla", "Dalary", "Jaylynn", "Sariah", "Andi", "Romina", "Dana", "Danica", "Ingrid", "Kehlani", "Zaniyah", "Alannah", "Avalynn", "Evalyn", "Sandra", "Veda", "Hadleigh", "Paityn", "Abril", "Ciara", "Holland", "Lillianna", "Kai", "Bryleigh", "Emilie", "Carlee", "Judith", "Kristina", "Janessa", "Annalee", "Zoie", "Maliah", "Bonnie", "Emmaline", "Louise", "Kaylynn", "Monserrat", "Nancy", "Noor", "Vada", "Aubriella", "Maxine", "Nathalia", "Tegan", "Aranza", "Emmie", "Brenna", "Estella", "Ellianna", "Kailee", "Ailani", "Caylee", "Zainab", "Zendaya", "Jana", "Julianne", "Ellison", "Sariyah", "Lizbeth", "Susan", "Alyvia", "Jewel", "Marjorie", "Marleigh", "Nathaly", "Sharon", "Yamileth", "Zion", "Mariyah", "Lyra", "Belle", "Yasmin", "Kaiya", "Maren", "Marisol", "Vienna", "Calliope", "Hailee", "Rayne", "Tabitha", "Anabella", "Blaire", "Giana", "Milania", "Paloma", "Amya", "Novalee", "Harleigh", "Ramona", "Rhea", "Aadhya", "Miya", "Desiree", "Frankie", "Sylvie", "Jasmin", "Moriah", "Rosalyn", "Kaya", "Joslyn", "Tinsley", "Farrah", "Aislinn", "Halle", "Madyson", "Micah", "Arden", "Bexley", "Ari", "Aubri", "Ayana", "Cherish", "Davina", "Anniston", "Riya", "Adilynn", "Ally", "Amayah", "Harmoni", "Heather", "Saoirse", "Azaria", "Alisha", "Nalani", "Maylee", "Shayla", "Briley", "Elin", "Lilia", "Ann", "Antonia", "Aryana", "Chandler", "Esperanza", "Lilyanna", "Alianna", "Luz", "Meilani"]

    var pastVerb = ["smiled", "laughed", "grinned", "cried", "broke down", "walked by", "danced", "fell", "looked away", "fell apart", "ignored me", "grabbed me", "talked", "whispered something to me", "changed everything", "ruined my life", "started it all", "sang", "was high", "was drunk", "was lying", "had nothing to lose", "tempted me away", "did me wrong"]
    
    var adVerb = ["abnormally", "absentmindedly", "accidentally", "actually", "adventurously", "afterwards", "almost", "always", "annually", "anxiously", "arrogantly", "awkwardly", "bashfully", "beautifully", "bitterly", "bleakly", "blindly", "blissfully", "boastfully", "boldly", "bravely", "briefly", "brightly", "briskly", "broadly", "busily", "calmly", "carefully", "carelessly", "cautiously", "certainly", "cheerfully", "clearly", "cleverly", "closely", "coaxingly", "colorfully", "commonly", "continually", "coolly", "courageously", "crossly", "cruelly", "curiously", "daily", "daintily", "dearly", "deceivingly", "deeply", "defiantly", "deliberately", "delightfully", "diligently", "dimly", "doubtfully", "dreamily", "easily", "elegantly", "energetically", "enormously", "enthusiastically", "equally", "especially", "even", "evenly", "eventually", "exactly", "excitedly", "extremely", "fairly", "faithfully", "famously", "far", "fast", "fatally", "ferociously", "fervently", "fiercely", "fondly", "foolishly", "fortunately", "frankly", "frantically", "freely", "frenetically", "frightfully", "fully", "furiously", "generally", "generously", "gently", "gladly", "gleefully", "gracefully", "gratefully", "greatly", "greedily", "happily", "hastily", "healthily", "heavily", "helpfully", "helplessly", "highly", "honestly", "hopelessly", "hourly", "hungrily", "immediately", "innocently", "inquisitively", "instantly", "intensely", "intently", "interestingly", "inwardly", "irritably", "jaggedly", "jealously", "jovially", "joyfully", "joyously", "jubilantly", "judgmentally", "justly", "keenly", "kiddingly", "kindheartedly", "kindly", "knavishly", "knowingly", "knowledgeably", "kookily", "lazily", "les", "lightly", "likely", "limply", "lively", "loftily", "longingly", "loosely", "loudly", "lovingly", "loyally", "madly", "majestically", "meaningfully", "mechanically", "merrily", "miserably", "mockingly", "monthly", "more", "mortally", "mostly", "mysteriously", "naturally", "describe", "or", "indicate", "the", "degree", "of", "action", "other", "hopelessly", "hourly", "hungrily", "immediately", "innocently", "inquisitively", "instantly", "intensely", "intently", "interestingly", "inwardly", "irritably", "jaggedly", "jealously", "jovially", "joyfully", "joyously", "jubilantly", "judgmentally", "justly", "keenly", "kiddingly", "kindheartedly", "kindly", "knavishly", "knowingly", "knowledgeably", "kookily", "lazily", "less", "lightly", "likely", "limply", "lively", "loftily", "longingly", "loosely", "loudly", "lovingly", "loyally", "madly", "majestically", "meaningfully", "mechanically", "merrily", "miserably", "mockingly", "monthly", "mortally", "mostly", "mysteriously", "naturally", "nearly", "neatly", "nervously", "nicely", "noisily", "obediently", "obnoxiously", "oddly", "offensively", "often", "openly", "optimistically", "overconfidently", "painfully", "partially", "patiently", "perfectly", "physically", "playfully", "politely", "poorly", "positively", "potentially", "powerfully", "promptly", "properly", "punctually", "quaintly", "queasily", "queerly", "questionably", "quicker", "quickly", "quietly", "quirkily", "quizzically", "randomly", "rapidly", "rarely", "readily", "really", "reassuringly", "recklessly", "regularly", "reluctantly", "repeatedly", "reproachfully", "restfully", "righteously", "rightfully", "rigidly", "roughly", "rudely", "safely", "scarcely", "scarily", "searchingly", "sedately", "seemingly", "seldom", "selfishly", "separately", "seriously", "shakily", "sharply", "sheepishly", "shrilly", "shyly", "silently", "sleepily", "slowly", "smoothly", "softly", "solemnly", "solidly", "sometimes", "soon", "speedily", "stealthily", "sternly", "strictly", "successfully", "suddenly", "supposedly", "surprisingly", "suspiciously", "sweetly", "swiftly", "sympathetically", "tenderly", "tensely", "terribly", "thankfully", "thoroughly", "thoughtfully", "tightly", "tomorrow", "too", "tremendously", "triumphantly", "truly", "truthfully", "List", "of", "Adverbs", "adverbs", "describe", "or", "indicate", "the", "degree", "of", "action", "verbs",, "adjectives",, "or", "other", "adverbs","rightfully", "scarcely", "searchingly", "sedately", "seemingly", "selfishly", "separately", "seriously", "sheepishly", "smoothly", "solemnly", "sometimes", "speedily", "stealthily", "successfully", "suddenly", "supposedly", "surprisingly", "suspiciously", "sympathetically", "tenderly", "thankfully", "thoroughly", "thoughtfully", "tomorrow", "tremendously", "triumphantly", "truthfully", "ultimately", "unabashedly", "unaccountably", "unbearably", "unethically", "unexpectedly", "unfortunately", "unimpressively", "unnaturally", "unnecessarily", "upbeat", "upright", "upside", "down", "upward", "urgently", "usefully", "uselessly", "usually", "utterly", "vacantly", "vaguely", "vainly", "valiantly", "vastly", "verbally", "very", "viciously", "victoriously", "violently", "vivaciously", "voluntarily", "warmly", "weakly", "wearily", "well", "wetly", "wholly", "wildly", "willfully", "wisely", "woefully", "wonderfully", "worriedly", "wrongly", "yawningly", "yearly", "yearningly", "yesterday", "yieldingly", "youthfully", "zealously", "zestfully", "zestil"]

    var city = ["Tokyo", "Jakarta", "Delhi", "Seoul", "Manila", "Mumbai", "Shanghai", "New York", "Sao Paolo", "Beijing", "Mexico", "Osaka", "Kyoto", "Moscow", "Cairo", "Bangkok", "Los Angeles", "Buenos Aires", "Tehran", "Istanbul", "Lagos", "Rio Janeiro", "Kinshasa", "Tianjin", "Lima", "Paris", "London", "Bangalore", "Chicago", "Johannesburg", "Kuala Lumpur", "Alaska", "Texas", "California", "Montana", "New Mexico", "Arizona", "Nevada", "Colorado", "Oregon", "Istanbul", "Barcelona", "Saint Petersburg", "Rome", "Berlin", "Athens", "Birmingham", "York", "New Orleans", "The South"]

    var abstract = ["beauty", "bravery", "brilliance", "brutality", "calmness", "charity", "coldness", "compassion", "confidence", "contentment", "courage", "curiosity", "dedication", "determination", "ego", "elegance", "enthusiasm", "envy", "evil", "fear", "generosity", "goodness", "graciousness", "hatred", "honesty", "honor", "hope", "humility", "humor", "insanity", "integrity", "intelligence", "jealousy", "kindness", "loyalty", "maturity", "patience", "perseverance", "sanity", "self","control", "sensitivity", "sophistication", "stupidity", "sympathy", "talent", "tolerance", "trust", "warmth", "weakness", "wisdom", "wit", "a secret", "some baggage", "a lot to say", "effervescence", "obedience", "adoration", "disbelief", "grief", "self-control", "tolerance", "sanity", "disappointment", "loneliness", "sorrow", "irritation", "rhythm", "calm", "clarity", "awareness"]

    var adj = ["aggressive",  "alert",  "alive",  "ancient",  "anxious",  "arrow",  "attractive",  "average",  "bad",  "beautiful",  "beige",  "better",  "big",  "bitter",  "black",  "blue",  "brown",  "bumpy",  "busy",  "careful",  "cheap",  "chestnut",  "clear",  "cold",  "combative",  "cool",  "cotton",  "crazy",  "crooked",  "crystal",  "dangerous",  "dead",  "delicious",  "dim",  "drab",  "dry",  "dull",  "dusty",  "elderly",  "excited",  "expensive",  "fancy",  "fat",  "few",  "filthy",  "fresh",  "fuzzy",  "giant",  "good",  "graceful",  "granite",  "green",  "handsome",  "happy",  "hard",  "harsh",  "hollow",  "hot",  "huge",  "hungry",  "large",  "lazy",  "light",  "long",  "low",  "massive",  "mellow",  "melodic",  "miniscule",  "modern",  "new",  "noisy",  "old",  "orange",  "oval",  "petite",  "pink",  "plain",  "plastic",  "poor",  "puny",  "purple",  "quiet",  "rainy",  "red",  "rich",  "right",  "round",  "sad",  "safe",  "salty",  "sane",  "scared",  "shallow",  "sharp",  "shiny",  "short",  "shrill",  "shy",  "small",  "soft",  "solid",  "sore",  "sour",  "square",  "steep",  "sticky",  "strong",  "superior",  "sweet",  "tan",  "tart",  "teak",  "teeny",  "terrible",  "tiny",  "tired",  "tremendous",  "triangular",  "ugly",  "unusual",  "weak",  "weary",  "wet",  "whispering",  "white",  "wild",  "wooden",  "woolen",  "wrong",  "yellow",  "young", /*EXTRAS AFTER THIS*/ "used", "important", "every", "large", "available", "popular", "able", "basic", "known", "various", "difficult", "several", "united", "historical", "hot", "useful", "mental", "scared", "additional", "emotional", "old", "political", "similar", "healthy", "financial", "medical", "traditional", "federal", "entire", "strong", "actual", "significant", "successful", "electrical", "expensive", "pregnant", "intelligent", "interesting", "poor", "happy", "responsible", "cute", "helpful", "recent", "willing", "nice", "wonderful", "impossible", "serious", "huge", "rare", "technical", "typical", "competitive", "critical", "electronic", "immediate", "aware", "educational", "environmental", "global", "legal", "relevant", "accurate", "capable", "dangerous", "dramatic", "efficient", "powerful", "foreign", "hungry", "practical", "psychological", "severe", "suitable", "numerous", "sufficient", "unusual", "consistent", "cultural", "existing", "famous", "pure", "afraid", "obvious", "careful", "latter", "unhappy", "acceptable", "aggressive", "boring", "distinct", "eastern", "logical", "reasonable", "strict", "administrative", "automatic", "civil", "former", "massive", "southern", "unfair", "visible", "alive", "angry", "desperate", "exciting", "friendly", "lucky", "realistic", "sorry", "ugly", "unlikely", "anxious", "comprehensive", "curious", "impressive", "informal", "inner", "pleasant", "sexual", "sudden", "terrible", "unable", "weak", "wooden", "asleep", "confident", "conscious", "decent", "embarrassed", "guilty", "lonely", "mad", "nervous", "odd", "remarkable", "substantial", "suspicious", "tall", "tiny", "more", "some", "one", "all", "many", "most", "other", "such", "even", "new", "just", "good", "any", "each", "much", "own", "great", "another", "same", "few", "free", "right", "still", "best", "public", "human", "both", "local", "sure", "better", "general", "specific", "enough", "long", "small", "less", "high", "certain", "little", "common", "next", "simple", "hard", "past", "big", "possible", "particular", "real", "major", "personal", "current", "left", "national", "least", "natural", "physical", "short", "last", "single", "individual", "main", "potential", "professional", "international", "lower", "open", "according", "alternative", "special", "working", "true", "whole", "clear", "dry", "easy", "cold", "commercial", "full", "low", "primary", "worth", "necessary", "positive", "present", "close", "creative", "green", "late", "fit", "glad", "proper", "complex", "content", "due", "effective", "middle", "regular", "fast", "independent", "original", "wide", "beautiful", "complete", "active", "negative", "safe", "visual", "wrong", "ago", "quick", "ready", "straight", "white", "direct", "excellent", "extra", "junior", "pretty", "unique", "classic", "final", "overall", "private", "separate", "western", "alone", "familiar", "official", "perfect", "bright", "broad", "comfortable", "flat", "rich", "warm", "young", "heavy", "valuable", "correct", "leading", "slow", "clean", "fresh", "normal", "secret", "tough", "brown", "cheap", "deep", "objective", "secure", "thin", "chemical", "cool", "extreme", "exact", "fair", "fine", "formal", "opposite", "remote", "total", "vast", "lost", "smooth", "dark", "double", "equal", "firm", "frequent", "internal", "sensitive", "constant", "minor", "previous", "raw", "soft", "solid", "weird", "amazing", "annual", "busy", "dead", "FALSE", "round", "sharp", "thick", "wise", "equivalent", "initial", "narrow", "nearby", "proud", "spiritual", "wild", "adult", "apart", "brief", "crazy", "prior", "rough", "sad", "sick", "strange", "external", "illegal", "loud", "mobile", "nasty", "ordinary", "royal", "senior", "super", "tight", "upper", "yellow", "dependent", "funny", "gross", "ill", "spare", "sweet", "upstairs", "usual", "brave", "calm", "dirty", "downtown", "grand", "honest", "loose", "male", "quiet", "brilliant", "dear", "drunk", "empty", "female", "inevitable", "neat", "ok", "representative", "silly", "slight", "smart", "stupid", "temporary", "weekly", "that", "this", "what", "which", "time", "these", "work", "no", "only", "then", "first", "money", "over", "business", "his", "game", "think", "after", "life", "day", "home", "economy", "away", "either", "fat", "key", "training", "top", "level", "far", "fun", "house", "kind", "future", "action", "live", "period", "subject", "mean", "stock", "chance", "beginning", "upset", "chicken", "head", "material", "salt", "car", "appropriate", "inside", "outside", "standard", "medium", "choice", "north", "square", "born", "capital", "shot", "front", "living", "plastic", "express", "feeling", "otherwise", "plus", "savings", "animal", "budget", "minute", "character", "maximum", "novel", "plenty", "select", "background", "forward", "glass", "joint", "master", "red", "vegetable", "ideal", "kitchen", "mother", "party", "relative", "signal", "street", "connect", "minimum", "sea", "south", "status", "daughter", "hour", "trick", "afternoon", "gold", "mission", "agent", "corner", "east", "neither", "parking", "routine", "swimming", "winter", "airline", "designer", "dress", "emergency", "evening", "extension", "holiday", "horror", "mountain", "patient", "proof", "west", "wine", "expert", "native", "opening", "silver", "waste", "plane", "leather", "purple", "specialist", "bitter", "incident", "motor", "pretend", "prize"]

    var resolutions = ["@ took me away", "@ stole my heart", "that day @ taught me how to live", "@ fucked up my life", "@ changed", "the world ended", "my world ended", "that night", "the night it all went down", "that day", "that sunny afternoon", "that wet Monday", "that summer", "that winter", "our first date", "we fell in love", "they died", "we were naked", "the sun went down", "we got arrested", "we moved in together", "I became ill", "@ became ill", "the monsters came", "the end was in sight", "the visitors landed", "we were invaded", "the time ran out", "they made me laugh"]

    var state = ["it fell apart", "it tore us apart", "it brought us together", "everybody died", "the sun went down", "the rain started","we disappeared", "the guns started firing", "the storm arrived", "the season ended", "everything changed", "nothing was the same again", "the world was different somehow", "things were different somehow", "things not the same", "I couldn't hold on anymore", "the money ran out", "we had to do something drastic", "the woman arrived", "the man arrived", "the sun was never warm again", "I was warm in the middle of winter"]
    
 
    var cityActivity = ["first met", "fell in love", "saw the end", "created chaos", "wished to die", "stood watching it all end", "saw the beginning of it all", "witnessed the event", "created something wonderful", "fell out of love", "never saw a soul", "met so many people", "decided something important", "saw through it all", "had an epiphany", "had to delete the evidence", "had to kill anyone who knew", "decided to end it all", "decided to rob a bank", "saw some terrible things", "couldn't understand why everyone was running", "didn't know how to speak the language"]

    var localPlace = ["the living room", "the bedroom", "the kitchen", "the hall", "the office", "the factory", "the abbatoir", "the craft", "the lair", "the cave", "the strange landscape", "the landscape", "the alien landscape", "the shop", "the bookshop", "aimlessly", "the butchery", "the den", "the street", "the empty street", "at all the blank faces", "the boutique", "the showroom", "the secret room", "the ship's hull", "the deck", "the vessel", "the floor", "the ceiling", "the sky", "the trees", "the forest", "the dead forest", "the woods", "the foggy wood", "the open area"]

    var motive = ["looking for something he knew would change everything", "with hope in their heart", "looking for her desperately", "looking for her", "looking for the child", "looking for him", "looking for something that would reveal what was going on", "looking for a clue, a hint, anything", "looking for the final piece", "trying to imagine where they'd hide it", "trying to imagine where they'd be hiding", "sure there was something there", "unsure what to look for", "keeping their guard up"]

    var threat = ["aliens", "monster", "alien", "vampire", "hound", "end-time", "demi-god", "demon", "ghost", "wolf", "creature", "thing", "strange being", "darkness", "banshee", "tidal wave", "hurricane", "storm", "revenant", "headless horseman", "zombie", "zombies", "yeti", "mummy", "corpse", "killer", "man dressed in black", "woman in grey", "terrorists", "police", "guards", "town-folk"]

    var goal = ["find the treasure", "find @ son", "find @ daughter", "find a way out", "get released", "find the killer", "discover @ real identity", "save @ son", "save @ daughter", "stop the bomb", "locate the source", "find who was responsible", "find who killed her father", "find who killed her mother", "find who killed her son", "find who killed her daughter", "find out who killed @", "see what the fuss is all about", "see the island for herself", "see the demon", "see the star", "discover who was coordinating everything"]















// =============================================================================
// WORD FUNCTIONS
// =============================================================================
  var getRandomName = function () {
    var flip = (Math.random());
    if (flip >= 0.5) {
      var randomNumber = Math.floor(Math.random() * femaleNames.length);
      var randomName = [];
      randomName.push("female");
      randomName.push(femaleNames[randomNumber]);
      return randomName;
    }
    else {
      var randomNumber = Math.floor(Math.random() * maleNames.length);
      var randomName = [];
      randomName.push("male");
      randomName.push(maleNames[randomNumber]);
      return randomName;
    }
}

  var getPastVerb = function () {
    var randomNumber = Math.floor(Math.random() * pastVerb.length)
    var randomVerb = pastVerb[randomNumber]
    return randomVerb;
  }

  var getAdVerb = function () {
    var randomNumber = Math.floor(Math.random() * adVerb.length)
    var randomVerb = adVerb[randomNumber]
    return randomVerb;
  }

  var getAdj = function () {
    var randomNumber = Math.floor(Math.random() * adj.length)
    var randomAdj = adj[randomNumber]
    if (typeof randomAdj === undefined) {
      return getAdj()
    } else {
      return randomAdj;
    }
  }

  var getCity = function () {
    var randomNumber = Math.floor(Math.random() * city.length)
    var randomCity = city[randomNumber]
      return randomCity;
  }

  var getAbstract = function () {
    var randomNumber = Math.floor(Math.random() * abstract.length)
    var randomAbstract = abstract[randomNumber]
      return randomAbstract;
  }

  var getRandomNumber = function () {
    var randomNumber = "" + Math.floor(Math.random() * 83)
    if (randomNumber < 12) {
      return getRandomNumber();
    }
    else {
      return randomNumber;
    }    
  }

  function getResolution () {     
    var randomNumber = Math.floor(Math.random() * resolutions.length)
    var randomPhrase = resolutions[randomNumber]
    return randomPhrase;
  }

  function getState () {     
    var randomNumber = Math.floor(Math.random() * state.length)
    var randomState = state[randomNumber]
    return randomState;
  }

  function getCityActivity () {
    var randomNumber = Math.floor(Math.random() * cityActivity.length)
    var randomCityActivity = cityActivity[randomNumber]
    return randomCityActivity;
  }

  function getDay () {
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    var times = ["morning", "afternoon", "evening"]
    var randomNumber = Math.floor(Math.random() * days.length)
    var randomDay = days[randomNumber]
    if (Math.random() >= 0.5) {
      function getTime () {
        return times[Math.floor(Math.random() * times.length)]
      }
      return randomDay + " " + getTime();
    }
    else {
      return randomDay;
    }
  }

  function getLocalPlace () {
    var randomNumber = Math.floor(Math.random() * localPlace.length)
    var randomLocalPlace = localPlace[randomNumber]
    return randomLocalPlace;
  }

  function getMotive () {
    var randomNumber = Math.floor(Math.random() * motive.length)
    var randomMotive = motive[randomNumber]
    return randomMotive;
  }

  function getThreat () {
    var randomNumber = Math.floor(Math.random() * motive.length)
    var randomThreat = threat[randomNumber]
    return randomThreat;
  }

  function getGoal () {
    var randomNumber = Math.floor(Math.random() * goal.length)
    var randomGoal = goal[randomNumber]
    return randomGoal;
  }
















// =============================================================================
// SENTENCE STRUCTURE FUNCTIONS
// =============================================================================
  function lineFormat1 () {
    var nameReturn = getRandomName();
    var line =  "The first time I met " + nameReturn[1] + " @ " + getPastVerb() + " and " + getPastVerb() + "..." + " (1)";
    if (nameReturn[0] == "female") {
      return line.replace("@", "she");
    }
    else {
      return line.replace("@", "he");
    }
  }

  function lineFormat2 () {
    var line = "Everyone has a kind of " +getAbstract() + " in " + getCity() + "..." + " (2)";
    return line;
  }

  function lineFormat3 () {
    var nameReturn = getRandomName();
    var line = "Me and " + nameReturn[1] + " " + getCityActivity() + " while we were in " + getCity() + "..." + " (3)";
    if (nameReturn[0] == "female") {
      return line.replace("@", "she");
    }
    else {
      return line.replace("@", "he");
    }
  }

  function lineFormat4 () {
    var nameReturn = getRandomName();    
    var line = nameReturn[1] + " was always a mystery to me until " + getResolution() + " and " + getState() + "..." + " (4)";
    if (nameReturn[0] == "female") {
      return line.replace("@", "she");
    }
    else {
      return line.replace("@", "he");
    }
  }

  function lineFormat5 () {
    var nameReturn = getRandomName();
    var line = "My name is " + nameReturn[1] + ", I live in " + getCity() + " and I am " + getRandomNumber() + "..." + " (5)";
    if (nameReturn[0] == "female") {
      return line.replace("@", "she");
    }
    else {
      return line.replace("@", "he");
    }
  }

  function lineFormat6 () {
    var line = "My first thoughts on " + getCity() + " were that it was a " + getAdj() + " and " + getAdj() + " place" + "..." + " (6)";
    return line;
  }

  function lineFormat7 () {
    var line = "It was a  " + getDay() + " when " + getState() +  "..." + " (7)";
    return line;
  }

  function lineFormat8 () {
    var nameReturn = getRandomName();
    var line = nameReturn[1] + " gazed around " + getLocalPlace() + " " + getMotive() + "..." + " (8)";
    if (nameReturn[0] == "female") {
      return line.replace("@", "she");
    }
    else {
      return line.replace("@", "he");
    }
  }

  function lineFormat9 () {
    var nameReturn = getRandomName();
    var nameReturn2 = getRandomName();
    var line = "If there was one thing that " + nameReturn[1] + " knew about " + nameReturn2[1] + "it's that @ was a " + getAdj() + " person " + "..." + " (9)";
    if (nameReturn2[0] == "female") {
      return line.replace("@", "she");
    }
    else {
      return line.replace("@", "he");
    }
  }

  function lineFormat10 () {
    var nameReturn = getRandomName();
    var line = nameReturn[1] + " decided it was about time @ started "  + getMotive() + "..." + " (10)";
    if (nameReturn[0] == "female") {
      return line.replace("@", "she");
    }
    else {
      return line.replace("@", "he");
    }
  }

  function lineFormat11 () {
    var line = "The people of " +getCity() + " struck me as having a quality of " + getAbstract() + "  to them" + "..." + " (11)";
    return line;
  }

  function lineFormat12 () {
    var nameReturn = getRandomName();
    var line = nameReturn[1] + " had had enough.  @ whole life # been considered a " + getAdj() + " person" + "..." + " (12)";
    if (nameReturn[0] == "female") {
      return line.replace("@", "Her").replace("#", "she'd");
    }
    else {
      return line.replace("@", "His").replace("#", "he'd");
    }
  }

  function lineFormat13 () {
    var nameReturn = getRandomName();
    var line = "The " + getThreat() + " was after " + nameReturn[1] + " and @ knew # had to start " + getMotive() + "..." + " (13)";
    if (nameReturn[0] == "female") {
      return line.replace("@", "she").replace("#", "she");
    }
    else {
      return line.replace("@", "he").replace("#", "he");
    }
  }

  
  function lineFormat14 () {
    var nameReturn = getRandomName();
    var nameReturn2 = getRandomName();
    var line = nameReturn[1] + " was lost, and with only " + nameReturn2[1] + " for help, # did not expect to " + getGoal() + "..." + " (14)";
    if (nameReturn[0] == "female") {
      return line.replace("@", "her").replace("#", "she");
    }
    else {
      return line.replace("@", "his").replace("#", "he");
    }
  }

  function lineFormat15 () {
    var nameReturn = getRandomName();
    var nameReturn2 = getRandomName();
    function word1 () {
      var words = ["goal", "mission", "design", "intention", "intent", "objective", "destiny"]
      var randomNumber = Math.floor(Math.random() * words.length)
      var randomWord = words[randomNumber]
      return randomWord;
    }
    function word2 () {
      var words = ["kill", "save", "destroy", "bring to justice", "bury", "release", "secure"]
      var randomNumber = Math.floor(Math.random() * words.length)
      var randomWord = words[randomNumber]
      return randomWord;
    }        
    var line = nameReturn[1] + "'s " + word1() + " was clear: " + getGoal() +  " and " + word2() + " " + nameReturn2[1] + "..." + " (15)";
    if (nameReturn[0] == "female") {
      return line.replace("@", "her").replace("#", "she");
    }
    else {
      return line.replace("@", "his").replace("#", "he");
    }
  }









// =============================================================================
// GET RANDOM SENTENCE STRUCTURE
// =============================================================================
  getRandomLineFormat = function () {
    var randomNumber = Math.floor(Math.random() * 15) + 1
    var buildLine = 'lineFormat' + randomNumber + '()'
    // WORKS BUT IS DANGEROUS CODE APPARENTLY
    return eval(buildLine)
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
      // If Random Story Title Radio Is Checked
      if (document.getElementById('random_radio').checked) {
        set.push(getRandomLineFormat())
      } else if (document.getElementById('formatted_radio').checked) {
        set.push(getFormattedTitleFormat())
      }
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
