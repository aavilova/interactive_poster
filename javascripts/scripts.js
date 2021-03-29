$(document).ready(function(){
  setTimeout(function(){
    $("#first").css("opacity","0");
  }, 3500);
  setTimeout(function(){
    $("#first").css("display","none");
  }, 5500);


  let randNum1
  let randNum2
  let randNum3
  let randomCards1
  let randomCards2
  let randomCards3
  let description1
  let cardsDescription1
  let cardsDescription2
  let cardsDescription3

  let cards1 = [
  "card_back1",
  "card_back2",
  "card_back3",
  "card_back4",
  "card_back5",
  "card_back6",
  "card_back7"
  ];

  let cards2 = [
  "card_back8",
  "card_back9",
  "card_back10",
  "card_back11",
  "card_back12",
  "card_back13",
  "card_back14",
  "card_back15"
  ];

  let cards3 = [
  "card_back16",
  "card_back17",
  "card_back18",
  "card_back19",
  "card_back20",
  "card_back21",
  "card_back22"
  ];

$(".button_1").click(function(){
  $(".card_inside").removeClass("back");
  setTimeout(function(){
    $(".card_back_1").removeClass(randomCards1);
    $(".card_back_2").removeClass(randomCards2);
    $(".card_back_3").removeClass(randomCards3);
  }, 200);
  setTimeout(function(){
    randNum1 = [Math.floor(Math.random()*cards1.length)]
    randNum2 = [Math.floor(Math.random()*cards2.length)]
    randNum3 = [Math.floor(Math.random()*cards3.length)]
    randomCards1 = cards1[randNum1];
    randomCards2 = cards2[randNum2];
    randomCards3 = cards3[randNum3];

    $(".card_back_1").addClass(randomCards1);
    $(".card_back_2").addClass(randomCards2);
    $(".card_back_3").addClass(randomCards3);

    cardsDescription1 = [
   '<div class="carda '+randomCards1+'"></div><div class="text_1_head">Дурак</div><div class="text_2"> Шут всегда предупреждает о&nbsp;чем-то совершенно новом, что готово ворваться в&nbsp;жизнь, отчего в&nbsp;ней возникает хаос, однако как правило ничего опасного в&nbsp;этом нет. Начало нового цикла жизни, любые новые дела, некий радикальный шаг.</div>',
   '<div class="carda '+randomCards1+'"></div><div class="text_1_head">Маг</div><div class="text_2"> Маг обладает мастерством и&nbsp;господствует над четырьмя стихиями, что предполагает наличие воображения, решительности, уверенности в&nbsp;себе. Новые жизненные уроки, дающие новые знания. Обратите внимание на&nbsp;детали. Развитие и&nbsp;рост умственного и&nbsp;физического.</div>',
   '<div class="carda '+randomCards1+'"></div><div class="text_1_head">Верховная жрица</div><div class="text_2"> В&nbsp;раскладе эта карта сообщает, что потихоньку на&nbsp;свет выйдет информация, которая заставит посмотреть на&nbsp;все под другим углом зрения. В&nbsp;ситуации присутствует влияние неких скрытых факторов, нечто тайное.</div>',
   '<div class="carda '+randomCards1+'"></div><div class="text_1_head">Императрица</div><div class="text_2"> Ситуация благоприятствует вопрошающему, причем события развиваются довольно быстро. Есть все основания полагать, что ситуация, под ее влиянием напрвится в&nbsp;новое русло. Ситуация процветает и&nbsp;разрастается.</div>',
   '<div class="carda '+randomCards1+'"></div><div class="text_1_head">Император</div><div class="text_2"> Император показывает, что в&nbsp;ситуации присутствуют ясные рамки, говорит о&nbsp;способности  устанавливать законы и&nbsp;ограничения, защищаться от&nbsp;чьей-то агрессии или от&nbsp;собственных слабостей.</div>',
   '<div class="carda '+randomCards1+'"></div><div class="text_1_head">Иерофант</div><div class="text_2"> Иерофант указывает главным образом на&nbsp;три вещи: вопросы этики, процесс обучения и&nbsp;участие в&nbsp;каких-то ритуалах и&nbsp;церемониях. Более глубокие значения карты – истинная религиозность, следование за&nbsp;пастырем, наставничество и&nbsp;глубокое знание, поиски смысла и&nbsp;его обретение.</div>',
   '<div class="carda '+randomCards1+'"></div><div class="text_1_head">Влюбленные</div><div class="text_2"> Влюбленные представляют собой период гармонии, в&nbsp;личных или профессиональных вопросах. Иногда карта указывает на&nbsp;необходимость выбора между двумя вещами, которые вы цените, она говорит, что вы примете правильное решение.</div>'
   ];

   cardsDescription2 = [
  '<div class="carda '+randomCards2+'"></div><div class="text_1_head">Колесница</div><div class="text_2"> Жизнь не&nbsp;стоит на&nbsp;месте. По этой карте происходит огромный скачок вперед, преодоление препятствий, уверенный прорыв. Это карта большого личностного роста и&nbsp;расцвета, достижений, прогрессивного развития.</div>',
  '<div class="carda '+randomCards2+'"></div><div class="text_1_head">Сила</div><div class="text_2"> Этот аркан считается позитивным, заключает в&nbsp;себе достаточно большое количество энергии, и&nbsp;призывает отважно и&nbsp;решительно противостоять превратностям судьбы. Сила возвещает испытание на&nbsp;выносливость и&nbsp;говорит о&nbsp;необходимости терпения и&nbsp;смелости.</div>',
  '<div class="carda '+randomCards2+'"></div><div class="text_1_head">Отшельник</div><div class="text_2"> Отшельник акцентирует стремление замкнуться и потребность в&nbsp;самоанализе, обретение внутреннего мира и&nbsp;собственной правды, следование своим путем.  Он  говорит, что пришло время заново оценить свою жизнь, свои цели и&nbsp;связи.</div>',
  '<div class="carda '+randomCards2+'"></div><div class="text_1_head">Колесо фортуны</div><div class="text_2"> Карта указывает, что случится нечто, чем мы едва ли можем управлять и&nbsp;чего никак не могли предвидеть. Неожиданное счастливое событие. Удача, успех, везение, шанс, который дается, может быть, раз в&nbsp;жизни и&nbsp;совсем не случайно, успешное преодоление препятствий.</div>',
  '<div class="carda '+randomCards2+'"></div><div class="text_1_head">Справедливость</div><div class="text_2"> Справедливость - карта личной ответственности. Выпадая в&nbsp;раскладе, Справедливость чаще всего указывает на&nbsp;то, что мы действуем, исходя из&nbsp;того «как правильно», либо пытаемся в&nbsp;чем-то «перехитрить» собственную судьбу, замахиваясь на&nbsp;то, что не может нам принадлежать. </div>',
  '<div class="carda '+randomCards2+'"></div><div class="text_1_head">Повешенный</div><div class="text_2"> Карта описывает необходимость каких-то жертв и&nbsp;нового подхода. Судьба замирает в&nbsp;невесомости.  Время апатии, отсутствие продвижения вперед. Нахождение в&nbsp;состоянии волевого ступора, паралича, потери контроля над&nbsp;происходящим, невозможности повлиять на события.</div>',
  '<div class="carda '+randomCards2+'"></div><div class="text_1_head">Смерть</div><div class="text_2">  Основное значение карты – близок естественный конец существующей ситуации. Человеку, которому выпала Смерть, предстоит перемена прежней жизни. Смерть не несет успеха, но&nbsp;расчищает путь для&nbsp;новых усилий и&nbsp;нового витка.</div>',
  '<div class="carda '+randomCards2+'"></div><div class="text_1_head">Умеренность</div><div class="text_2">В&nbsp;прямом значении карта таро Умеренность свидетельствует о&nbsp;том, что все цели, которые вы перед&nbsp;собой поставили, достижимы, а&nbsp;все проблемы – решаемы. Однако для того, чтобы&nbsp;добиться успеха, вам необходимо соблюдать баланс между желанием изменить ситуацию и&nbsp;умением под&nbsp;нее подстроиться.</div>'
  ];

  cardsDescription3 = [
 '<div class="carda '+randomCards3+'"></div><div class="text_1_head">Дьявол</div><div class="text_2">В&nbsp;самом простом смысле Дьявол указывает, что человек не очень-то держит под&nbsp;контролем ситуацию, и&nbsp;может навлечь на&nbsp;себя массу неприятностей. Дьявол указывает, что где-то в&nbsp;чем-то человек вступил на&nbsp;неправильный путь. Он предупреждает, что вопрошающий переходит допустимые границы.</div>',
 '<div class="carda '+randomCards3+'"></div><div class="text_1_head">Башня</div><div class="text_2"> Башня показывает, что стены, за которыми прятались, рушатся. Один период жизни сменяется другим, причем происходит это весьма стремительно, а&nbsp;потому небезболезненно. В&nbsp;самом простом смысле карта символизирует конец существующей ситуации под&nbsp;влиянием внешних сил, неожиданный и&nbsp;очень быстрый. </div>',
 '<div class="carda '+randomCards3+'"></div><div class="text_1_head">Звезда</div><div class="text_2"> Наличие этой карты в раскладе говорит о существовании в жизни человека высшей путеводной силы, которой он должен довериться. Это некое желание, цель, которая всегда находится перед&nbsp;его взором. Вопрошающий знает, что это за&nbsp;вера, живущая в&nbsp;его душе.</div>',
 '<div class="carda '+randomCards3+'"></div><div class="text_1_head">Луна</div><div class="text_2"> Что-то тайное, скрываемое, таящее опасность. Эта карта предполагает наличие в повседневной жизни неприятных эмоциональных проявлений. Она указывает на&nbsp;то, что события, развивающиеся в&nbsp;настоящее время, вне&nbsp;нашего полного контроля. </div>',
 '<div class="carda '+randomCards3+'"></div><div class="text_1_head">Солнце</div><div class="text_2"> Солнце - это новые перспективы бытия, открывшиеся перед человеком. Это самый расцвет жизни, ощутимый успех. Человек получит от&nbsp;жизни какой-то дар, которому сможет просто радоваться. По&nbsp;Солнцу человек может получить подарки сверх заслуженного и&nbsp;ожидаемого. </div>',
 '<div class="carda '+randomCards3+'"></div><div class="text_1_head">Суд</div><div class="text_2"> Это благополучное завершение какой-либо кризисной фазы, чудесное избавление от&nbsp;множества трудностей, перспектива одним махом избавиться от&nbsp;всего, что гнетет и&nbsp;давит. Либо исполнится давнее желание, либо жизнь в&nbsp;целом выйдет на&nbsp;более высокую ступень благополучия.</div>',
 '<div class="carda '+randomCards3+'"></div><div class="text_1_head">Мир</div><div class="text_2"> При раскладе на&nbsp;ситуацию Мир предвещает несомненный успех задуманного, исполнение всех желаний, счастливое завершение хода событий. Карта говорит о&nbsp;том, что человек может доверять своим суждениям в&nbsp;текущих обстоятельствах, тут&nbsp;он знаток и&nbsp;едва ли кто-то справится с&nbsp;этим лучше него.</div>'
 ];

   description1 = cardsDescription1[randNum1]
   description2 = cardsDescription2[randNum2]
   description3 = cardsDescription3[randNum3]
  }, 500);


  setTimeout(function(){
    $(".card_inside").addClass("back");
  }, 1000);


});

let button = '<div class="button_x"></div>';
$(".card, .card2, .card3").click(function(){
    $(".screen").css({
    "opacity":"1",
    "display":"block"
    });
    setTimeout(function(){
      $("#third").css("display","block");
    }, 100);
    if ($(this).hasClass("card")) {
      $("#third").html(description1 + button);
    }
    else if ($(this).hasClass("card2")) {
      $("#third").html(description2 + button);
    }
    else if ($(this).hasClass("card3")) {
      $("#third").html(description3 + button);
    }
    });
    $(document).on('click','.button_x', function(){
          $("#third").css("display","none");
          $(".screen").css({
          "opacity":"0",
          "display":"none"
          });
      });

});
