"use strict";

const STORE = {
       currentQuestionIndex: 0,
       answeredCorrectly: 0,
       currentQuestion : 1,
       answersObject:[
                                   {
                                   page: 1,  
                                   question: 'Question 1: Which of the following franchises has won the most games all-time?',
                                   picKey1:  `<li class="option js-option">The New York Yankees
                                                  <input type= "image" class="wrong teamLogo js-wrong" id ="yanks" alt="NY Yankees" src ="http://www.stickpng.com/assets/images/584d4b740a44bd1070d5d494.png"/></li>`,
                                   picKey2:     `<li class="option js-option">The Chicago Cubs
                                                  <input type='image'class="wrong teamLogo js-wrong" id ="chc" alt="Cubbies" src ="http://www.stickpng.com/assets/images/584d41b10a44bd1070d5d411.png"/></li>`,
                                   picKey3:     `<li class="option js-option">The Dallas Cowboys
                                                  <input type='image' class="wrong teamLogo js-wrong" id ="dal" alt="Dallas Cowboys" src="https://i.pinimg.com/originals/6e/01/97/6e0197b33d0ba5f2ef3d1503e9bc5b45.png"/></li>`,
                                   picKey4:      `<li class="option js-option">The San Francisco Giants
                                                  <input type='image' class="right teamLogo js-right" id ="sfg" alt="SF Giants" src="http://i.imgur.com/Jve0IoB.png"/></li>`,
                                   picKey5:      `<li class="option js-option">The Boston Celtics
                                                  <input type='image' class="wrong teamLogo js-wrong" id ="celts" alt="Boston Celtics" src ="http://www.stickpng.com/assets/images/58419c6aa6515b1e0ad75a61.png"/></li>`,
                                   picKey6:      `<li class="option js-option">The Los Angeles Dodgers
                                                  <input type='image' class="wrong teamLogo js-wrong" id ="dodgers" alt="LA Dodgers" src ="http://clipart-library.com/image_gallery/12597.png"/></li>`,
                                   picKey7:      `<li class="option js-option">The New England Patriots
                                                 <input type='image' class="wrong teamLogo js-wrong" id ="pats" alt="New England Patroits" src ="http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2b3b.png"/></li>  `
                                    },
                                        
                           
                                   {
                                   page: 2,
                                   question: 'Question 2: Which of the following is the oldest team in Pro Football History?',
                                   picKey1: ` <li class="option js-option">The Green Bay Packers
                                         <input type='image' class="wrong js-wrong teamLogo" id ="Pack" alt="Packers" src ="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Bay_Packers_logo.svg/800px-Green_Bay_Packers_logo.svg.png"/></li>`,
                                   picKey2:    ` <li class="option js-option">The New York Giants
                                         <input type='image'class="wrong js-wrong teamLogo" id ="NYG" alt="NY Giants" src ="http://www.stickpng.com/assets/thumbs/580b585b2edbce24c47b2b42.png"/></li>`,
                                   picKey3:    ` <li class="option js-option">The Arizona Cardinals
                                         <input type='image' class="right js-right teamLogo" id ="cards" alt="Az Cardinals" src="http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2aff.png"/></li>`,
                                   picKey4:    ` <li class="option js-option">The Pittsburgh Steelers
                                         <input type='image' class="wrong js-wrong teamLogo" id ="steel" alt="Steelers" src="http://www.stickpng.com/assets/images/580b585b2edbce24c47b2b4e.png"/></li>`,
                                   picKey5:    ` <li class="option js-option">The Cleveland Browns
                                         <input type='image' class="wrong js-wrong teamLogo" id ="cle" alt="Browns" src ="http://www.pngall.com/wp-content/uploads/2017/05/Cleveland-Browns-Free-Download-PNG.png"/></li>`,
                                   picKey6:    ` <li class="option js-option">The Denver Broncos
                                         <input type='image'class="wrong js-wrong teamLogo" id ="den" alt="Broncos" src ="http://www.stickpng.com/assets/images/580b585b2edbce24c47b2b21.png"/></li>`,
                                   picKey7:   ` <li class="option js-option">The Detroit Lions
                                                <input type='image' class="wrong js-wrong teamLogo" id ="det" alt="Detroit Lions" src ="http://www.stickpng.com/assets/images/580b585b2edbce24c47b2b20.png"/></li>  `

                                          },
                              {
                                     page: 3,
                                   question:   'Question 3: Which of the following was the first NBA team to break the color barrier?',
                                   picKey1:   `<li class="option js-option">The New York Knicks
                                         <input type="image" class="right js-right teamLogo" id ="nyk" alt="Knicks" src ="https://upload.wikimedia.org/wikipedia/de/thumb/e/e9/New-York-Knicks-Logo_%281995%29.svg/1024px-New-York-Knicks-Logo_%281995%29.svg.png"/></li>`,
                                   picKey2:         `<li class="option js-option">The Golden State Warriors
                                         <input type="image" class="wrong js-wrong teamLogo" id ="gsw" alt="Warriors" src ="http://www.officialpsds.com/images/thumbs/Golden-State-Warriors-2013-14-Logo-psd95373.png"/></li>`,
                                   picKey3:        `<li class="option js-option">The Minnesota Timberwolves
                                         <input type= "image" class="wrong js-wrong teamLogo" id ="min" alt="Twolves" src="http://logos-download.com/wp-content/uploads/2016/04/Minnesota_Timberwolves_logo_emblem_alternate_3.png"/> </li>`,
                                   picKey4:      `<li class="option js-option">The Chicago Bulls
                                         <input type="image" class="wrong js-wrong teamLogo" id ="chi" alt="Bulls" src="https://www.pngonly.com/wp-content/uploads/2017/05/Bull-PNG-Chicago-Bulls.png"/></li>`,
                                   picKey5:     `<li class="option js-option">The Los Angeles Clippers
                                         <input type="image" class="wrong js-wrong teamLogo" id ="lac" alt="Clippers" src ="https://retohercules.com/images/clippers-logo-png-4.png"/></li>`,
                                   picKey6:     `<li class="option js-option">The Houston Rockets
                                         <input type="image" class="wrong js-wrong teamLogo" id ="hou" alt="Rockets" src ="http://t01.deviantart.net/1VbOgtAsAIIv1vabKNlKlevValY=/300x200/filters:fixed_height(100,100):origin()/pre13/2dca/th/pre/f/2010/309/5/e/houston_rockets_3d_logo_by_rico560-d328xy1.png"/></li>`,
                                   picKey7:     `<li class="option js-option">The Philadelphia 76ers
                                         <input type="image" class="wrong js-wrong teamLogo" id ="phi" alt="Sixers" src ="https://retohercules.com/images/76ers-logo-png-1.png"/></li>`
                             },
                              {
                                   page: 4,
                                   question: 'Question 4: Which of the following NHL teams recieved a future star player in a trade in which they only had to give up $1?',
                                   
                                   picKey1:  `<li class="option js-option">The Toronto Maple Leafs
                                         <input type="image" class="wrong js-wrong teamLogo" id ="leafs" alt="Maple Leafs" src ="http://1.bp.blogspot.com/-jJAH_6Wj6ms/T4EGOovvBhI/AAAAAAAALs4/Ax4l4VS8cfA/s1600/OTH67logo.png "/></li>`,
                                   picKey2:   `<li class="option js-option">The Edmonton Oilers
                                         <input type="image" class="wrong js-wrong teamLogo" id ="edm" alt="Oilers" src ="https://www.stickpng.com/assets/images/5a4fbb49da2b4f099b95da0f.png"/>`,
                                   picKey3:   `<li class="option js-option">The San Jose Sharks 
                                         <input type="image" class="wrong js-wrong teamLogo" id ="sj" alt="Sharks" src="http://logos-download.com/wp-content/uploads/2016/04/San_Jose_Sharks_logo_logotype_emblem.png"/></li>`,
                                   picKey4:   `<li class="option js-option">The Buffalo Sabres
                                         <input type="image" class="wrong js-wrong teamLogo" id ="buff" alt="sabres" src="http://logos-download.com/wp-content/uploads/2016/04/Buffalo_Sabres_logo_logotype_symbol_emblem.png"/></li>`,
                                   picKey5:  `<li class="option js-option">The New York Rangers
                                        <input type="image" class="wrong js-wrong teamLogo" id ="nyr" alt="Rangers" src ="https://cdn.freebiesupply.com/logos/large/2x/new-york-rangers-3-logo-png-transparent.png"/></li>`,
                                   picKey6: `<li class="option js-option">The Detroit Red Wings
                                        <input type="image" class="right js-right teamLogo" id ="wings" alt="Red Wings" src =" https://logos-download.com/wp-content/uploads/2016/04/Detroit_Red_Wings_logo_emblem_logotype_symbol.png"/></li>`,
                                   picKey7:  `<li class="option js-option">The Washington Capitals
                                        <input type="image" class="wrong js-wrong teamLogo" id ="caps" alt="Capitals" src ="https://enterpriseengineeringnetwork.org/images/washington-logo-png-17.png"/></li>`              
                             },
                            {
                                   page:5,
                                   question: 'Question 5: Which of the following MLB teams, has posted the lowest home attendance for a game in the history of baseball?',
                                   picKey1:     `<li class="option js-option">The Florida Marlins
                                         <input type="image" class="wrong js-wrong teamLogo" id ="flr" alt="Marlins" src ="https://sulimanalomran.com/images/marlin-fish-clipart-19.png"/></li>`,
                                   picKey2:     `<li class="option js-option">The Montreal Expos 
                                         <input type="image" class="wrong js-wrong teamLogo" id ="exp" alt="Expos" src ="https://i.pinimg.com/originals/89/82/03/89820315b883420a01b8462f8f45a20e.png"/></li>`,
                                   picKey3:     `<li class="option js-option">The Toronto Blue Jays
                                         <input type="image" class="wrong js-wrong teamLogo" id ="jays" alt="Blue Jays" src="http://logos-download.com/wp-content/uploads/2016/04/Toronto_Blue_Jays_logo_logotype_emblem.png"/></li>`,
                                   picKey4:     `<li class="option js-option">The Oakland A's
                                         <input type="image" class="right js-right teamLogo" id ="oak" alt="Athletics" src="http://logos-download.com/wp-content/uploads/2016/04/Oakland_Athletics_logo_logotype.png"/></li>`,
                                   picKey5:    `<li class="option js-option">The Baltimore Orioles
                                         <input type="image" class="wrong js-wrong teamLogo" id ="bal" alt="Orioles" src ="https://logos-download.com/wp-content/uploads/2016/04/Baltimore_Orioles_logo_emblem_transparent.png"/></li>`,
                                   picKey6:    `<li class="option js-option">The Detroit Tigers
                                         <input type="image" class="wrong js-wrong teamLogo" id ="tig" alt="Tigers" src ="https://rfathead-res.cloudinary.com/image/upload/h_300,w_300/logos/lgo_mlb_detroit_tigers.png"/></li>`,
                                   picKey7:   `<li class="option js-option">The Chicago White Sox
                                         <input type="image" class="wrong js-wrong teamLogo" id ="chisox" alt="White Sox" src ="http://assets.stickpng.com/thumbs/584d4aff0a44bd1070d5d48d.png"/></li> `    
                            }
                     ]

                      
              }
                     
                               



                     



const answerTitle = ["Nothin' but Net!!!", "Swing and a Miss"];

const answerInfo = {

                     answerTextIndex: 0,
                     answerText:  
                               [
       
                                          { 
                                                 question: 1,
                                                 team: "Sf Giants",
                                                 info: `Out of all the great teams in American professional sports that
                                                 are synonmous with winning and success, in terms of winning games
                                                 no one has had more success than <u>The San Francisco Giants</u>. 
                                                 Dating all the way back from thier humble begginings in the Polo Grounds 
                                                 as <u>The New York Giants</u> - they have amassed the most amount of 
                                                 wins with a win loss record of <u>11,165 – 9,687</u>. Dems a lot of W's...`
                                           },
                                           {
                                                 question: 2,
                                                 team: 'Arizona Cardinals',
                                                 info: `When we think about all the great historical football teams that 
                                                 have graced the gridiron for more than a century, very few of us think 
                                                 look to the desert to find the oldest team. Established in 1898 as 
                                                 the Morgan Athletic Club,  the Cardinals have called Chicago, St.Louis 
                                                 and now Arizona home. For a sport that is synonomous with winter, cold, 
                                                 snow and mud, who'da thought that the sport's oldest representative 
                                                 would hail from the Valley of the Sun.`
                                           },       
                                           {
                                                 question: 3,
                                                 team: 'New York Knicks',
                                                 info: `In 1947 (the same year that Jackie Robinson broke the color barrier in MLB) 
                                                 the New York Knicks drafted Wataru Misaka in the BBA/NBA Draft. Wataru, a second 
                                                 generation Japanese American from the University of Utah, led the University of Utah
                                                 to two NCAA championships and a NIT Championship which at the time was the most 
                                                 prestegious of the two tournaments at the time. Although, Wataru Misaka's tenrue
                                                 with the Knicks was short lived - he would be offered a position with the 
                                                 Harlem Globetrotters (which he would turn down) and be inducted into the 
                                                 Utah Sports of Hall of Fame. He and his wife, Kate, had two children. 
                                                 Misaka died at the age of 95 on November 20, 2019 in Salt Lake City.`
                                                 }, 
                                                 {
                                                 question: 4,
                                                 team: 'Detroit Red Wings',
                                                 info: `After only playing 20 games in 4 years after being drafted by the 
                                                 Winnipeg Jets, Kris Draper was traded to the Detroit Red Wings for only 
                                                 ONE AMERICAN DOLLAR. Draper would go on to become a four-time winner of 
                                                 the Stanley Cup (all with Detroit), a Frank J. Selke Trophy winner and 
                                                 score over 100 goals in his NHL career with the Red Wings. Draper was 
                                                 a member of the famous "Grind Line" in Detroit, consisting of himself, 
                                                 Kirk Maltby and either Joe Kocur or Darren McCarty. The Winnipeg Jets, 
                                                 three years later, would fold and cease operations. Considering that 
                                                 they traded a player of Kris Draper's caliber for merely $1 - it should be 
                                                 to no one's surprise that the original Winnipeg Jets are no longer around. `
                                                 }, 
                                                 {
                                                 question: 5,
                                                 team: 'Oakland Athletics',
                                                 info: `23 people On September 8, 1916, the New York Yankees came to Philadelphia 
                                                 to play the hapless Athletics. The fans sitting in Shibe Park for the rain-delayed 
                                                 game were outnumbered by the men in uniform. In fact, when the Yankees were at bat,
                                                 they had more players on the bench than fans in the seats. After an 8-2 win over 
                                                 the Yankees, for the only time in major league history, a team was two games back 
                                                 for every fan in attendance. 46 games back of the first place Red Sox and an 
                                                 announced attendance of 23. This trend of low-attendance has plauged the Athletics
                                                 throughout thier history. Moving from Philadephia, then to Kansas City and finally
                                                 to Oakland. Even currently, the A's struggle to draw fans and are in talks of
                                                 getting a new stadium either inside of Oakland or relocating for the third time
                                                 in 65 years.`
                                                 } 
                            ]
}

const answerPics = {
       currentPicSet: 0,
       teamPicSet : [
                       {
                             team: 'SF giants',
                             pic1: '<img class="answerPic picOne" src="https://tse4.mm.bing.net/th?id=OIP.vdWaRRPcjYox4uIC5z9v0QHaJ5&pid=Api&P=0&w=300&h=300"alt="Monte Irvin: Giants First Black Player">',
                             pic2: '<img class="answerPic picTwo" src="https://tse3.mm.bing.net/th?id=OIP.MivcL5RA1OluKZuOC86ulgHaEn&pid=Api&P=0&w=303&h=190" alt="Matt Williams: The Marine">',
                             pic3: '<img class="answerPic picThree"src="https://tse2.mm.bing.net/th?id=OIP.92keH2Enda0IVQaI6hYjQQHaE7&pid=Api&P=0&w=235&h=157" alt="Willie Mays: Maybe The Greatest Of All Time">',
                             pic4: '<img class="answerPic picFour" src="http://s3.amazonaws.com/darkroom-cdn/2014/10/royals-giants-world-series-violence073.jpg" alt="Giants First Title in San Francisco, 2010"> ',
                        },
                        {
                             team: 'Arizona Cardinals ',
                             pic1: '<img class="answerPic picOne" src="http://cdn.bleacherreport.net/images_root/slides/photos/001/014/297/cardsMorganAthleticClub_display_image.jpg?1308023951" alt="The Morgan Athletic Club of 1898">',
                             pic2: '<img class="answerPic picTwo" src="http://www.cardinalsgab.com/wp-content/uploads/2009/12/Kurt-Warner.jpg" alt="Kurt Warner on the way to his third SuperBowl">',
                             pic3: '<img class="answerPic picThree" src="https://sportsteamhistory.com/wp-content/uploads/2017/01/st.-louis-cardinals-football.jpg" alt="An old St.Louis Cardinals ad">',
                             pic4: '<img class="answerPic picFour" src="https://clutchpoints.com/wp-content/uploads/2018/10/Larry_Fitzgerald.jpg" alt="Larry Fitzgerald - The Cardinals greatest Wide Receiver ever">',
                         },
                         {
                             team: 'New York Knicks',
                             pic4: '<img class="answerPic picFour" src="https://tse1.mm.bing.net/th?id=OIP.9db8Xbn5xUrtVkeMmsm6sgHaF8&pid=Api&P=0&w=206&h=166" alt="Wataru Misaka wearing his New York threads">',
                             pic2: '<img class="answerPic picTwo" src="https://cdn.japantimes.2xx.jp/wp-content/uploads/2018/12/sp-ed-e-20181229-870x698.jpg" alt="The 1947 New York Knicks">',
                             pic3: '<img class="answerPic picThree" src="https://tse3.mm.bing.net/th?id=OIP.NxF1sqx6vOao6HxpL2RS7AHaD4&pid=Api&P=0&w=304&h=160"alt="Wataru Misaka sees action">',
                             pic1: '<img class="answerPic picOne"src="https://theundefeated.com/wp-content/uploads/2019/11/AP_080910048828-e1574881859339.jpg?w=700" alt="Wataru Misaka looks back at his time at the University of Utah">',
                          },
                          {
                             team: 'Detroit Red Wings',
                             pic1: '<img class="answerPic picOne" src="http://media.mlive.com/redwings_impact/photo/kris-draper-red-wings-82f2a1703ef36dc7.jpg" alt="Kris Draper after scoring one of his 100+ goals">',
                             pic2: '<img class="answerPic picTwo" src="http://hockeygods.com/system/gallery_images/7006/normal.jpg?1311750062" alt="Kris Draper lifting Lord Stanleys Cup">',
                             pic4: '<img class="answerPic picFour" src="https://www.gannett-cdn.com/-mm-/d3ebabf4ef4a4e64ead932fed9254bccd29239ae/c=0-30-1268-984/local/-/media/DetroitFreePress/DetroitFreePress/2014/08/26/1409078939018-C4-20080522-SPORTS05-601011-19.jpg?width=520&height=390&fit=crop" alt="Kris Draper with the Slapshot">',
                             pic3: '<img class="answerPic picThree"src="http://www4.pictures.gi.zimbio.com/Dallas+Stars+v+Detroit+Red+Wings+Game+dlltkirDBYkx.jpg" alt="Kris Draper celebrating one of thier 4 Stanley Cups together" >',
              
                           },
                           {
                             team: 'Oakland Athletics ',
                             pic1: '<img class="answerPic picOne" src="https://sfbay.ca/home/wp-content/uploads/2016/09/160925_Rangers_Athletics1077_bay114.jpg" alt="Stomper waving the Athletics flag infront of almost no one">',
                             pic2: '<img class="answerPic picTwo" src="http://sfbay.ca/home/wp-content/uploads/2012/10/2012-08-02-20.31.39-1000x563.jpg" alt="another picture of no one watching the As play">',
                             pic3: '<img class="answerPic picThree" src="http://assets.sbnation.com/assets/1050595/oakland_as_fan_attendance_coliseum.jpg" alt="sensing a theme? More pictures of the empty As stadium!!">',
                             pic4: '<img class="answerPic picFour"src="http://ww3.hdnux.com/photos/07/00/05/1835342/19/628x471.jpg" alt="this is embarrasing at this point, seriously? No one at these games? And As fans have the nerve to talk bad about Giants fans...the audacity. Just sell the team already...the fan base is a joke. Go Giants"> ',
              
                             }

                             ]
}

const finalResults = {
                        scoreTitleIndex: 0,
                        scoreTitle: [
                                                  {
                                                        score: 5,
                                                        title: "You're Batting .1000!!!!",
                                                        info: `Way to go!!! You answered correct on all 5 of the toughest
                                                        sports questions out there. You definitely know your way around
                                                        the football field and the baseball diamond. When it comes to sports
                                                        trivia - you my friend are a Hall Of Famer!!!`
                                                  },
                                                  {
                                                        score: 4,
                                                        title: "You're an All-Star!!",
                                                        info: `Wow, 4 out of 5!! No wonder why everyone in the league wants you. 
                                                        My phone has been ringing off the hook trying to get me to trade you. But
                                                        with numbers like yours, there's no way I can let go of a talent like you.
                                                        You hear that???.... You know what that is? Thats endorsement deals, tv 
                                                        commercials, shoe deals, you name it - all coming your way. You just this up
                                                        and dont get complacent and keep raising your game.... pretty soon you'll be 
                                                        in a gold jacket!!!`
                                                   },
                                                   {
                                                         score: 3,
                                                         title: "Hey, Even the Greats Need Role-Players...",
                                                         info: `Look, not everyone can be Micheal Jordan or Derek Jeter. Some
                                                         people are just B.J. Armstrong or Chuck Knoblauch. And with a 3 out of 5
                                                         you've proven that you belong on the team and deserve a spot - you're just 
                                                         probably not the person we want to give the ball to with the game on the line.
                                                         In any event, you can work hard to seperate yourself from the pack and raise 
                                                         your game and prove me wrong... or you can settle for being A.C Green instead of 
                                                         Magic Johnson...I mean.....even the greats need role-players, right? `
                                                   },
                                                   {
                                                         score: 2,
                                                         title: "Could Use Some More Work in the Cage",
                                                         info: `2 out 5, not the best but good enough that we know you got some talent.
                                                         My advice? Go hit the weight room, stop by the film room a few times a week and 
                                                         do some more work in the cage. It's a long season, so theres plenty of time to
                                                         turn it around, but i'd get on it now - you don't a bad outing to turn into a 
                                                         slump....thats how you find a pink slip in your locker.`
                                                    },
                                                    {
                                                        score: 1,
                                                        title: "Gotta turn it around, Kid",
                                                        info: `Look Kid, we like you and you got great hustle, but 1 out of 5
                                                        is not gonna keep you on this team much longer. Take a few deep breaths,
                                                        and maybe get with the assistant coach to go over your mechanics. When you do, 
                                                        why don't ya' come back and give it another go. `
                                                     },
                                                     {
                                                        score: 0,
                                                        title: "Pink Slip",
                                                        info: `Sports is a buisness kid. And as much as we'd like to keep you on
                                                        the team, we have enough 'club house' guys - what we need is someone that can produce
                                                        and put numbers up. 0 out of 5 is not gonna get it done - we need to open up this 
                                                        roster spot to someone who can help us. Go home, work on your game and if you can
                                                        improve your performance in the future - we'll reach out. Until then..... 
                                                        Clean out your locker.. `
                                                      }

                     ]
}

const finalPics = {
                     scorePicsIndex: 0,
                     scorePics: [
                                           {
                                                  score: 5,
                                                  pic1:`<img class="resultPic lastPic" src="http://www.profootballhof.com/assets/1/19/Brooks-Derrick-GJ-Lead.jpg?45270" alt="HOF jacket ceremony"></img> `,
                                                  pic2: `<img class="resultPic lastPic" src="http://sportschump.net/wp-content/uploads/2013/05/chad-ochocinco-hof-jacket.jpg" alt="Future Hall of Famer">`,
                                                  pic3: `<img class="resultPic" src="https://s3.amazonaws.com/s3.wpgcfm.radio.com/styles/delta__775x515/s3/ray_lewis.jpg?itok=nlwdkaFX&c=96740be446a2477a37ca698c9e290440" alt="Ray Lewis HOF">`
                                           },
                                           {
                                                  score: 4,
                                                  pic1: `<img class="resultPic" src="https://tse3.mm.bing.net/th?id=OIP.BoeQzMdzwL6Yn4XwbLW-zAHaE8&pid=Api&P=0&w=284&h=190">`,
                                                  pic2: `<img class="resultPic lastPic" src="https://i.ytimg.com/vi/wBCw82QKU1g/maxresdefault.jpg">`,
                                                  pic3: `<img class="resultPic lastPic" src="http://www1.pictures.zimbio.com/gi/2019+Honda+NHL+All+Star+Game+PfxyMlFUBP0x.jpg">` 
                                           },
                                           {
                                                 score: 3,
                                                 pic1: `<img class="resultPic" src="https://www.basketusa.com/wp-content/uploads/2013/09/BJ.jpg">`,
                                                 pic2: `<img class="resultPic lastPic" src="http://www.bestsportsphotos.com/sc_images/products/t_47638.jpg">` ,
                                                 pic3: `<img class="resultPic lastPic" src="https://i.ytimg.com/vi/9OSuzLAZjZQ/maxresdefault.jpg">`
                                           },
                                           {
                                                 score: 2,
                                                 pic1: `<img class="resultPic lastPic" src="http://www.saturdaydownsouth.com/wp-content/uploads/2015/03/MG_2345.jpg">` ,
                                                 pic2: `<img class="resultPic lastPic" src="http://static5.businessinsider.com/image/51fa6e926bb3f7933d000008-1200/the-film-room.jpg">` ,
                                                 pic3: `<img class="resultPic" src="https://patch.com/img/cdn/users/207354/2011/11/raw/fdcdaad88c3c9dde64b7a6e4b0c27acd.jpg?width=705">` 
                                           },
                                           {
                                                 score : 1,
                                                 pic1: `<img class="resultPic" src="http://media.masslive.com/sports_impact/photo/10091180-large.jpg">` ,
                                                 pic2: `<img class="resultPic lastPic" src="http://media.gettyimages.com/photos/soccer-player-sitting-on-bench-picture-id157718601">` ,
                                                 pic3: `<img class="resultPic lastPic" src="http://4.bp.blogspot.com/-In8EZkmSDgs/TfutRDQmEeI/AAAAAAAAAKM/184dEiKZXE8/s1600/sad%2Bfootball%2Bplayer.JPG">`
                                           },
                                           {
                                                 score : 0,
                                                 pic1: `<img class="resultPic lastPic" src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1217631.jpg">`,
                                                 pic2: `<img class="resultPic" src="http://www.it-career-coach.net/wp-content/uploads/2009/01/pinkslip.jpg">`,
                                                 pic3: `<img class="resultPic lastPic" src="https://www.incimages.com/uploaded_files/image/970x450/getty_618526794_345052.jpg">`
                                           },
                                           ]
                     }


let i = 0;

function startQuiz(){
       $('.start').on('click', function(){
       $('.js-welcome').hide();
       buildBody();
       renderQuestion();
       buildAnswerBubble();
       displayScore();
       displayOptions();
       questCount();
       showAnswer();
       nextQuestion();
       displayFinalScore();
      
    });
}
 
function buildBody(){
    $('body').html(`
    <div class = 'js-legend2 legend2'></div>
    <div class ="js-legend legend"></div>
    <div class="js-answerBubble answerBubble" id="correctAnswer"></div>
    <div class = "js-questionBubble questionBubble"></div>
    <form class ="js-answerKey answerKey"></form>`);
}

function renderQuestion(){
       let quizQuestion = STORE.answersObject[STORE.currentQuestionIndex].question;     
       $('.js-questionBubble').html(`<p class="js-question question">${quizQuestion}</p>`);
       }



function buildAnswerBubble(){
       $('.js-answerBubble').html(`
       <div class= "js-finalTitle finalTitle"></div>
       <div class="js-picContainer picContainer">
       </div>
       <div class="js-extraInfo extraInfo">
       <p class= "js-answerInfo answerInfo">
       </p>
       <button class="js-nextQuestion nextQuestion" type="submit">Next Question</button>
       <button class="js-getResults getResults" type="submit">Get Results</button>
       <button class="js-restartQuiz restartQuiz" type="submit">Reattempt Quiz</button>
       </div>`)
       $('.js-answerBubble').hide();

}

function displayScore(){
       $('.js-legend').html(`<div class = "js-counter counter" id="correctCounter"> 
       <p class="js-correctText correctText"> Answered Correct: ${STORE.answeredCorrectly} </p></div>`);
  };

function questCount(){
       $('.js-legend2').html(` <div class = counter "js-counter"> <p class="js-questionCounter questionCounter js-correctText correctText">
       Question ${STORE.currentQuestion} out of 5</p></div>`);
  }



function displayOptions(){
    $('.js-answerKey').html("<div class = 'js-answers answers'><ul class ='js-teams teams'></ul><ul class ='js-teams1 teams1'></ul><ul class ='js-teams2 teams2'></ul><ul class ='js-teams3 teams3'></ul></div>")
    $('.js-teams1').append(STORE.answersObject[STORE.currentQuestionIndex].picKey1);
    $('.js-teams1').append(STORE.answersObject[STORE.currentQuestionIndex].picKey2);
    $('.js-teams1').append(STORE.answersObject[STORE.currentQuestionIndex].picKey3);
    $('.js-teams2').append(STORE.answersObject[STORE.currentQuestionIndex].picKey4);
    $('.js-teams2').append(STORE.answersObject[STORE.currentQuestionIndex].picKey5);
    $('.js-teams2').append(STORE.answersObject[STORE.currentQuestionIndex].picKey6);
    $('.js-teams3').append(STORE.answersObject[STORE.currentQuestionIndex].picKey7);
    handleClicks();
}
       
       

function handleClicks(){
       $('.js-option').on('click',function(event){
       event.preventDefault();
       $(".js-legend").hide();
       $(".js-legend2").hide();
       $(".js-questionBubble").hide();
       $(".js-answerKey").hide();
       $('.js-getResults').hide();
       $('.js-restartQuiz').hide();
       $(".js-answerBubble").show();
       if (STORE.currentQuestion === 5){
       $('.js-nextQuestion').hide();
       $('.js-getResults').show();      
}});
}

function showAnswer(){
       $('.right').on('click',function(){
       $('.js-finalTitle').text(answerTitle[0]).prepend('<img class="js-greenCheck greenCheck" src="http://www.clipartbest.com/cliparts/nTB/9dE/nTB9dEnTA.png" alt="greenCheck">')
       STORE.answeredCorrectly++
       }); 
       $('.js-wrong').on('click',function(){
       $('.js-finalTitle').text(answerTitle[1]).prepend('<img class="js-redX redX" src="http://www.clipartbest.com/cliparts/niB/Bq8/niBBq8A9T.png" alt="red X">')
       });
       $('.js-picContainer').append(answerPics.teamPicSet[answerPics.currentPicSet].pic1);
       $('.js-picContainer').append(answerPics.teamPicSet[answerPics.currentPicSet].pic2);
       $('.js-picContainer').append(answerPics.teamPicSet[answerPics.currentPicSet].pic3);
       $('.js-picContainer').append(answerPics.teamPicSet[answerPics.currentPicSet].pic4);
       $('.js-answerInfo').append(answerInfo.answerText[answerInfo.answerTextIndex].info);
       displayScore();
       questCount();
}

function nextQuestion(){
       $('.js-nextQuestion').on('click',function(){
       STORE.currentQuestionIndex++;
       STORE.currentQuestion++;
       answerInfo.answerTextIndex++;
       answerPics.currentPicSet++;
       $(".js-legend").show();
       $(".js-legend2").show();
       $(".js-questionBubble").show()
       $(".js-answerKey").show();
       $(".js-answerBubble").hide();
       $('.js-picContainer').empty();
       $('.js-answerInfo').empty();
       renderQuestion();
       displayOptions();
       showAnswer();
       });
}

function displayFinalScore(){
       $('.js-getResults').on('click', function(){
       $('.js-redX').hide();
       $('.js-greenCheck').hide();
       $('.js-picContainer').empty();
       $('.js-answerInfo').empty();
       $('.js-getResults').hide();
       $('.js-restartQuiz').show();
       restartQuiz();
       if (STORE.answeredCorrectly === 5){
       $('.js-finalTitle').html(finalResults.scoreTitle[0].title)
       $('.js-picContainer').append(finalPics.scorePics[0].pic1);
       $('.js-picContainer').append(finalPics.scorePics[0].pic2);
       $('.js-picContainer').append(finalPics.scorePics[0].pic3);
       $('.js-answerInfo').append(finalResults.scoreTitle[0].info);
       }
       else if (STORE.answeredCorrectly === 4){
              $('.js-finalTitle').html(finalResults.scoreTitle[1].title)
              $('.js-picContainer').append(finalPics.scorePics[1].pic1);
              $('.js-picContainer').append(finalPics.scorePics[1].pic2);
              $('.js-picContainer').append(finalPics.scorePics[1].pic3);
              $('.js-answerInfo').append(finalResults.scoreTitle[1].info);
              }
        else if (STORE.answeredCorrectly === 3){
              $('.js-finalTitle').html(finalResults.scoreTitle[2].title)
              $('.js-picContainer').append(finalPics.scorePics[2].pic1);
              $('.js-picContainer').append(finalPics.scorePics[2].pic2);
              $('.js-picContainer').append(finalPics.scorePics[2].pic3);
              $('.js-answerInfo').append(finalResults.scoreTitle[2].info);
                     }
       else if (STORE.answeredCorrectly === 2){
              $('.js-finalTitle').html(finalResults.scoreTitle[3].title)
              $('.js-picContainer').append(finalPics.scorePics[3].pic1);
              $('.js-picContainer').append(finalPics.scorePics[3].pic2);
              $('.js-picContainer').append(finalPics.scorePics[3].pic3);
              $('.js-answerInfo').append(finalResults.scoreTitle[3].info);
                            }
       else if (STORE.answeredCorrectly === 1){
              $('.js-finalTitle').html(finalResults.scoreTitle[4].title)
              $('.js-picContainer').append(finalPics.scorePics[4].pic1);
              $('.js-picContainer').append(finalPics.scorePics[4].pic2);
              $('.js-picContainer').append(finalPics.scorePics[4].pic3);
              $('.js-answerInfo').append(finalResults.scoreTitle[4].info);
                            }
       else {
              $('.js-finalTitle').html(finalResults.scoreTitle[5].title)
              $('.js-picContainer').append(finalPics.scorePics[5].pic1);
              $('.js-picContainer').append(finalPics.scorePics[5].pic2);
              $('.js-picContainer').append(finalPics.scorePics[5].pic3);
              $('.js-answerInfo').append(finalResults.scoreTitle[5].info);
                                          }
                     

       });
}

function restartQuiz(){
       $('.js-restartQuiz').on('click',function(){ 
              location.reload(true);    
       });
}

function handleQuizApp(){
    startQuiz();
}
    
$(handleQuizApp);
