/*global $*/
/*jslint browser: true*/
$('document').ready(function () {
  $('#result').hide(); //to do:  move this to css 
  $('#footer').hide(); //to do:  move this to css 
  $.shake({
    callback: function () {
      submit_action();
    }
  });
});

var styles = ["Up Swing", "Shuffle", "Ballad", "Bossa", "Samba", " Medium Swing", "Slow Swing", "Double Time Feel", "Funk", "Double Time", "Second Line Feel"];
var songs = ["Round Midnight", "S Wonderful", "Tis Autumn", "Our Love Is Here To Stay", "500 Miles High", "502 Blues", "A Child Is Born", "A Fine Romance", "A Man And A Woman", "A Night In Tunisia", "A String Of Pearls", "A Sunday Kind Of Love", "African Flower", "Afro Blue", "After You", "Afternoon In Paris", "Again", "Agua De Beber", "Aint No Sunshine", "Airegin", "Alice In Wonderland", "All Blues", "All By Myself", "All My Tomorrows", "All Of Me", "All Of You", "All The Things You Are", "Alone Together", "Alright, Okay, You Win", "Always", "Am I Blue?", "Ana Maria", "And The Angels Sing", "Angel Eyes", "Anthropology", "Anything Goes", "Apple Honey", "April In Paris", "At Last", "Au Privave", "Autumn In New York", "Autumn Leaves", "Autumn Nocturne", "Bags Groove", "Baltimore Oriole", "Beautiful Friendship", "Beautiful Love", "Beauty And The Beast", "Begin The Beguine", "Bess, You Is My Woman", "Bessies Blues", "Best Is Yet To Come, The ", "Bewitched", "Big Nick", "Black Coffee", "Black Diamond", "Black Narcissus", "Black Nile", "Black Orpheus", "Blue Bossa", "Blue Gardenia", "Blue In Green", "Blue Monk", "Blue Room", "Blue Train", "Blues For Alice", "Blues In The Night", "Bluesette", "Body And Soul", "Boplicity", "Bright Size Life", "Broad Way Blues", "Broadway", "But Beautiful", "But Not For Me", "Butterfly", "Byrd Like", "Cest Si Bon", "Call Me", "Cant Help Lovin Dat Man", "Captain Marvel", "Caught Up In The Rapture", "Central Park West", "Ceora", "Charade", "Chega De Saudade (No More Blues)", "Chelsea Bells", "Chelsea Bridge", "Cherokee (Indian Love Song)", "Cherry Pink And Apple Blossom White", "Chippie", "Chitlins Con Carne", "Christmas Waltz, The ", "Close Enough For Love", "Close To You", "Come Fly With Me", "Come Sunday", "Como En Vietnam", "Con Alma", "Conception", "Confirmation", "Contemplation", "Continental, The ", "Coral", "Cotton Tail", "Cottontail", "Could It Be You", "Countdown", "Crazy He Calls Me", "Crazy Rhythm", "Crescent", "Crystal Silence", "Cute", "D Natural Blues", "Daahoud", "Dancing In The Dark", "Dancing On The Ceiling", "Darn That Dream", "Day In, Day Out", "Day Waves", "Days And Nights Waiting", "Days Of Wine And Roses", "Dear Old Stockholm", "Dearly Beloved", "Dedicated To You", "Deep Purple", "Deluge", "Desafinado", "Desert Air", "Detour Ahead", "Dexterity", "Dizzy Atmosphere", "Django", "Dock Of The Bay, The", "Doin The Pig", "Dolores", "Dolphin Dance", "Domino Biscuit", "Dont Be Blue", "Dont Blame Me", "Dont Get Around Much Anymore", "Dont Worry Bout Me", "Donna Lee", "Doodlin", "Doxy", "Dream A Little Dream Of Me", "Dream Dancing", "Dreamsville", "E.S.P.", "Easter Parade", "Easy Living", "Easy To Love", "Ecclusiastics", "Eighty One", "El Gaucho", "Embraceable You", "Epistrophy", "Equinox", "Equipoise", "Everything Must Change", "Fall", "Falling Grace", "Falling In Love With Love", "Fascinating Rhythm", "Fee-Fi-Fo-Fum", "Felicidade, A", "Foggy Day, A ", "Follow Your Heart", "Footprints", "For All We Know", "For Heavens Sake", "Forest Flower", "Four", "Four On Six", "Freddie Freeloader", "Freedom Jazz Dance", "From This Moment On", "Full House", "Gee Baby, Aint I Good To You", "Gemini", "Get Here", "Get Out Of Town", "Giant Steps", "Girl From Ipanema, The", "Give Me The Simple Life", "Glorias Step", "God Bless The Child", "Golden Lady", "Good Bait", "Good Evening Mr. And Mrs. America", "Good Life, The ", "Grand Central", "Groovin High", "Grow Your Own", "Guilty", "Gypsy In My Soul", "Half Nelson", "Have You Met Miss Jones", "He Was Too Good To Me", "Heaven", "Heebie Jeebies", "Hello", "Hello, Young Lovers", "Heres That Rainy Day", "Hey There", "Hot House", "Hot Toddy", "House Is Not A Home, A ", "House Of Jade", "How Do You Keep The Music Playing?", "How High The Moon", "How Insensitive", "How Little We Know", "How Long Has This Been Going On?", "How My Heart Sings", "Hullo Bolinas", "I Cant Get Started", "I Cant Give You Anything But Love", "I Concentrate On You", "I Could Write A Book", "I Cover The Waterfront", "I Didnt Know About You", "I Didnt Know What Time It Was", "I Get A Kick Out Of You", "I Got It Bad And That Aint Good", "I Got Rhythm", "I Gotta Right To Sing The Blues", "I Guess Ill Have To Change My Plan", "I Had The Craziest Dream", "I Have The Feeling Ive Been Here Before", "I Let A Song Go Out Of My Heart", "I Love Paris", "I Love You", "I Loves You Porgy", "I May Be Wrong", "I Mean You", "I Only Have Eyes For You", "I Remember Clifford", "I Say A Little Prayer For You", "I Should Care", "I Want To Be Happy", "I Was Doing All Right", "I Will Be Here For You", "I Will Wait For You", "I Wish I Knew", "I Wish I Were In Love Again", "Ill Never Smile Again", "Ill Remember April", "Im A Fool To Want You", "Im All Smiles", "Im Beginning To See The Light", "Im Gonna Laugh You Right Out Of My Life", "Im Your Pal", "Ive Got A Crush On You", "Ive Got You Under My Skin", "Icarus", "If There Is Someone Lovelier Than You", "If You Never Come To Me (Inutil paisagem)", "Impressions", "In A Mellow Tone", "In A Sentimental Mood", "In The Days Of Our Love", "In The Midnight Hour", "In The Mood", "In The Wee Small Hours Of The Morning", "In Your Quiet Place", "Indian Lady", "Indian Summer", "Inner Urge", "Interplay", "Invitation", "Iris", "Is You Is, Or Is You Aint (Ma Baby)", "Isnt It A Pity", "Isnt It Romantic?", "Isotope", "Israel", "It Aint Necessarily So", "It Dont Mean A Thing (If It Aint Got That Swing)", "It Had To Be You", "It Never Entered My Mind", "It Was A Very Good Year", "Its All Right With Me", "Its De-Lovely", "Its Easy To Remember", "Its Magic", "Its You Or No One", "Jelly Roll", "Johnny One Note", "Jordu", "Journey To Recife", "Joy Spring", "Juju", "Jump Monk", "June In January", "Just One More Chance", "Just One Of Those Things", "Kelo", "Lady Bird", "Lady Is A Tramp, The ", "Lady Sings The Blues", "Lament", "Las Vegas Tango", "Lazy Bird", "Lazy River", "Lester Leaps In", "Lets Call The Whole Thing Off", "Lets Do It", "Lil Darlin", "Like Someone In Love", "Limehouse Blues", "Lines And Spaces", "Litha", "Little Boat", "Little Waltz", "Long Ago (And Far Away)", "Lonnies Lament", "Look To The Sky", "Lot Of Living To Do, A", "Love For Sale", "Love Is A Many Splendored Thing", "Love Is The Sweetest Thing", "Love Me Or Leave Me", "Love Speaks Louder Than Words", "Love Walked In", "Lover, Come Back To Me", "Lucky Southern", "Lucky To Be Me", "Lullaby Of Birdland", "Lullaby Of Broadway", "Lush Life", "Mahjong", "Maiden Voyage", "Man I Love, The", "Man In The Green Shirt", "Man That Got Away, The", "Meditation", "Memories Of Tomorrow", "Michelle", "Midnight Mood", "Midwestern Nights Dream", "Milano", "Minority", "Minute By Minute", "Miss Ann", "Miss Otis Regrets", "Missouri Uncompromised", "Misty", "Miyako", "Moments Notice", "Mood Indigo", "Moonchild", "Moondance", "More I See You, The ", "Mountain Greenery", "Mr. Lucky", "Mr. P.C.", "My Buddy", "My Favorite Things", "My Foolish Heart", "My Funny Valentine", "My Heart Stood Still", "My Mans Gone Now", "My One And Only Love", "My Romance", "My Shining Hour", "My Ship", "My Way", "Mysterious Traveller", "Naima (Niema)", "Nancy (With The Laughing Face)", "Nardis", "Nefertiti", "Never Will I Marry", "Nicas Dream", "Nice Work If You Can Get It", "Night And Day", "Night Dreamer", "Night Train", "Nobody Knows You When Youre Down And Out", "Nostalgia In Times Square", "Not Like This", "Nuages", "Of Thee I Sing", "Oh, Lady Be Good", "Old Country, The", "Old Folks", "Oleo", "Oliloqui Valley", "On A Clear Day", "On A Misty Night", "Once I Loved (Amor Em Paz) (Love In Peace)", "Once In Love With Amy", "One Finger Snap", "One Hundred Ways", "One Note Samba (Samba De Uma Nota So)", "Only Trust Your Heart", "Orbits", "Ornithology", "Our Delight", "Out Of Nowhere", "P.S. I Love You", "Paper Doll", "Passion Dance", "Passion Flower", "Peace", "Peggys Blue Skylight", "Pent Up House", "Penthouse Serenade", "People Make The World Go Round", "Peris Scope", "Pfrancing (No Blues)", "Piano In The Dark", "Pick Up The Pieces", "Pinocchio", "Pithecanthropus Erectus", "Please Dont Talk About Me When Im Gone", "Portsmouth Figurations", "Prelude To A Kiss", "Prince Of Darkness", "Pussy Cat Dues", "Put On A Happy Face", "Quiet Nights Of Quiet Stars (Corcovado)", "Quiet Now", "Real Love", "Recorda-Me", "Red Clay", "Reflections", "Reincarnation Of A Lovebird", "Ring Dem Bells", "Road Song", "Rockin In Rhythm", "Round Midnight", "Ruby, My Dear", "Sabia", "Satin Doll", "Saving All My Love For You", "Scotch And Soda", "Scrapple From The Apple", "Sea Journey", "Secret Love", "September In The Rain", "Serenade In Blue", "Seven Come Eleven", "Seven Steps To Heaven", "Shiny Stockings", "Sidewinder", "Silver Hollow", "Since I Fell For You", "Sirabhorn", "Skating In Central Park", "Slow Hot Wind", "So In Love", "So Nice (Summer Samba)", "So What", "Softly, As In A Morning Sunrise", "Solar", "Solitude", "Some Day My Prince Will Come", "Some Other Spring", "Some Other Time", "Some Skunk Funk", "Somebody Loves Me", "Someone To Watch Over Me", "Something To Talk About", "Sometime Ago", "Sometimes Im Happy", "Song For My Father", "Song For You, A", "Soon", "Sophisticated Lady", "Soul Man", "Speak No Evil", "Standing On The Corner", "Stella By Starlight", "Steps", "Stolen Moments", "Stompin At The Savoy", "Stormy Weather", "Straight No Chaser", "Strike Up The Band", "Stuck On You", "Stuff", "Sugar", "Suite Judy Blue Eyes", "Summer Knows, The ", "Summer Night", "Summertime", "Sunny ", "Sure Enough", "Swedish Pastry", "Sweet Georgia Bright", "Sweet Georgia Brown", "Sweet Henry", "Take Five", "Take The A Train", "Takin It To The Streets", "Tame Thy Pen", "Tea For Two", "Teach Me Tonight", "Tell Me A Bedtime Story", "Thanks For The Memory", "That Certain Feeling", "That Sunday (That Summer)", "Thats Amore (Thats Love)", "Thats What Friends Are For", "The Blue Room", "The Girl From Ipanema (Garota De Ipanema)", "The Green Mountains", "The Inch Worm", "The Intrepid Fox", "The Magician In You", "The Most Beautiful Girl In The World", "The Night Has A Thousand Eyes", "The Saga Of Harrison Crabfeathers", "The Song Is You", "The Sorcerer", "The Sphinx", "The Star-Crossed Lovers", "The Surrey With The Fringe On Top", "The World Is Waiting For The Sunrise", "Then Ill Be Tired Of You", "There Is No Greater Love", "There Will Never Be Another You", "Therell Be Some Changes Made", "Theres A Small Hotel", "Theres No You", "They All Laughed", "They Cant Take That Away From Me", "They Didnt Believe Me", "Think On Me", "This Heart Of Mine", "This Is Always", "Those Eyes", "Thou Swell", "Three Flowers", "Through The Fire", "Time After Time", "Time For Love, A", "Time On My Hands", "Time Remembered", "Tokyo Blues", "Tones For Joans Bones", "Too Marvelous For Words", "Too Much Sake", "Topsy", "Tour De Force", "Triste", "Trouble Is A Man", "Tune Up", "Turn Out The Stars", "Twilight World", "Twisted Blues", "Two For The Road", "Unchain My Heart", "Underdog, The ", "Uniquity Road", "Unity Village", "Until Its Time For You To Go", "Until The Real Thing Comes Along", "Up Jumped Spring", "Upper Manhattan Medical Group (UMMG)", "Valdez in the Country", "Valse Hot", "Very Early", "Virgo", "Wait Till You See Her", "Walk On By", "Walkin", "Waltz For Debby", "Wave", "Well Be Together Again", "Were in This Love Together", "Well You Neednt (Its Over Now)", "West Coast Blues", "What A Fool Believes", "What Am I Here For?", "What Is This Thing Called Love", "What The World Needs Now Is Love", "What Was", "Wheelers & Dealers", "When A Man Loves A Woman", "When I Fall In Love", "When Sunny Gets Blue", "When The World Was Young", "When You Wish Upon A Star", "When Your Lover Has Gone", "Where or When", "Whispering", "Who Cares?", "Why Try To Change Me Now?", "Wild Flower", "Windows", "Witch Hunt", "With A Song In My Heart", "Wives And Lovers (Hey, Little Girl)", "Woodchoppers Ball", "Woodyn You", "Yes And No", "Yesterday", "Yesterdays", "You And The Night And The Music", "You Are The Sunshine Of My Life", "You Are There", "You Are Too Beautiful", "You Brought A New Kind Of Love To Me", "You Do Something To Me", "You Dont Know What Love Is", "You Go To My Head", "You Make Me Feel Brand New", "You Make Me Feel So Young", "You Taught My Heart To Sing", "You Took Advantage Of Me", "Youd Be So Nice To Come Home To", "Youll Never Know", "Youre Nobody til Somebody Loves You", "You're The Top", "Young At Heart", "Yours Is My Heart Alone"];
var meters = ["3/4", "4/4", "5/4", "6/8", "7/4", "7/8"];
var styleSelect = new select("styleselect", styles);
var meterSelect = new select("meterselect", meters);
var songSelect = new select("songselect", songs);

styleSelect.initialize();
meterSelect.initialize();
songSelect.initialize();

//select object constructor

function select(id, data) {
  this.id = id;
  this.data = data;
  this.element = $('#' + this.id)
  this.initialize = function () {
    var elem = this.element;
    $.each(this.data, function (i, val) {
      var option = "<option value='" + val + "'>" + val + "</option>";
      elem.append(option);
    });
  };
  this.selection = function () {
    var elem = this.element;
    if (elem.val() == "no-op") {
      return selectRandomElement(this.data);
    } else {
      return elem.val();
    }
  };
}

function selectRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function submit_action() {
  $('form').hide();
  $('#footer').hide();
  var element = $('#result');
  element.find('#song').html(songSelect.selection());
  element.find('#style').html(styleSelect.selection());
  element.find('#meter').html(meterSelect.selection());
  element.show();
}

function cancel_action() {
  $('form').show();
  $('#result').hide();
  $('#footer').hide();
  $('.meter').html('');
  $('.song').html('');
  $('.style').html('');
}

function confirm_action() {
  $('#result').hide();
  var element = $('#footer');
  var selections = $('#result');
  element.find('.song').html(selections.find('#song').html());
  element.find('.style').html(selections.find('#style').html());
  element.find('.meter').html(selections.find('#meter').html());
  $('select').val('no-op');
  $('form').show();
  element.show();
}