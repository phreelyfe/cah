game.service('GetCardsService', function getCardsService() {
    console.log("Call from Card Service");

    
    
        
    var GetCards = {};

	var masterCards = GetCards.masterCards = [{"id":2753,"cardType":"Q","text":"Believe it or not, Jim Carrey can do a dead-on impression of _.","numAnswers":1,"expansion":"90s"},
  {"id":2754,"cardType":"Q","text":"It\'s Morphin\' Time! Mastodon! Pterodactyl! Triceratops! Sabertooth Tiger! _!","numAnswers":1,"expansion":"90s"},
  {"id":2755,"cardType":"Q","text":"Tonight on SNICK: \â€Are You Afraid of _?\â€","numAnswers":1,"expansion":"90s"},
  {"id":2756,"cardType":"A","text":"The black half of Barack Obama.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2757,"cardType":"A","text":"The white half of Barack Obama.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2758,"cardType":"A","text":"Free ice cream, yo.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2759,"cardType":"A","text":"A face full of horse cum.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2760,"cardType":"A","text":"Getting caught by the police and going to jail.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2761,"cardType":"A","text":"My dead son's baseball glove.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2762,"cardType":"A","text":"Ejaculating live bees and the bees are angry.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2763,"cardType":"A","text":"Western standards of beauty.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2764,"cardType":"A","text":"Getting eaten alive by Guy Fieri.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2765,"cardType":"A","text":"Blowjobs for everyone.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2766,"cardType":"A","text":"Blackface.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2767,"cardType":"A","text":"Butt stuff.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2768,"cardType":"A","text":"Some shit-hot guitar licks.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2769,"cardType":"A","text":"Social justice warriors with flamethrowers of compassion.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2770,"cardType":"A","text":"Deez nuts.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2771,"cardType":"A","text":"An unforgettable quinceaÃ±era.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2772,"cardType":"A","text":"September 11th, 2001.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2773,"cardType":"A","text":"Daddy's credit card.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2774,"cardType":"A","text":"A one-way ticket to Gary, Indiana.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2775,"cardType":"A","text":"An uninterrupted history of imperialism and exploitation.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2776,"cardType":"A","text":"P.F. Change himself.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2777,"cardType":"A","text":"Cutting off a flamingo\'s legs with garden shears.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2778,"cardType":"A","text":"A giant powdery manbaby.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2779,"cardType":"A","text":"Anal fissures like you wouldn\'t believe.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2780,"cardType":"A","text":"Not believing in giraffes.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2781,"cardType":"A","text":"Getting drive-by shot.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2782,"cardType":"A","text":"A team of lawyers.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2783,"cardType":"A","text":"AIDS monkeys.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2784,"cardType":"A","text":"Wearing glasses and sounding smart.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2785,"cardType":"A","text":"Slowly easing down onto a cucumber.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2786,"cardType":"A","text":"A whole new kind of porn.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2787,"cardType":"A","text":"40 acres and a mule.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2788,"cardType":"A","text":"Boring vaginal sex.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2789,"cardType":"A","text":"Genghis Khan\'s DNA.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2790,"cardType":"A","text":"The tiger that killed my father.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2791,"cardType":"A","text":"My boyfriend\'s stupid penis.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2792,"cardType":"A","text":"Changing a person\'s mind with logic and facts.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2793,"cardType":"A","text":"Child support payments.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2794,"cardType":"A","text":"The passage of time.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2795,"cardType":"A","text":"Going to a high school reunion on ketamine.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2796,"cardType":"A","text":"A reason not to commit suicide.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2797,"cardType":"A","text":"Russian super-tuberculosis.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2798,"cardType":"A","text":"A mouthful of potato salad.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2799,"cardType":"A","text":"All these decorative pillows.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2800,"cardType":"A","text":"Figuring out how to have sex with a dolphin.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2801,"cardType":"A","text":"Being worshipped as the one true God.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2802,"cardType":"A","text":"The basic suffering that pervades all of existence.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2803,"cardType":"A","text":"The ghost of Marlon Brando.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2804,"cardType":"A","text":"Out-of-this-world bazongas.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2805,"cardType":"A","text":"Ancient Athenian boy-fucking","numAnswers":0,"expansion":"CAHe5"},
  {"id":2806,"cardType":"A","text":"A crazy little thing called love.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2807,"cardType":"A","text":"A zero-risk way to make $2,000 from home.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2808,"cardType":"A","text":"Seeing my village burned and my family slaughtered before my eyes.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2809,"cardType":"A","text":"Being paralyzed from the neck down.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2810,"cardType":"A","text":"Backwards knees.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2811,"cardType":"A","text":"Having been dead for a while.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2812,"cardType":"A","text":"My first period.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2813,"cardType":"A","text":"Vegetarian options.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2814,"cardType":"A","text":"The Abercrombie & Fitch lifestyle.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2815,"cardType":"A","text":"The unbelievable world of mushrooms.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2816,"cardType":"A","text":"Being nine years old.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2817,"cardType":"A","text":"The eight gay warlocks who dictate the rules of fashion.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2818,"cardType":"A","text":"The swim team, all at once.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2819,"cardType":"A","text":"Denzel.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2820,"cardType":"A","text":"Unrelenting genital punishment.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2821,"cardType":"A","text":"Mom\'s new boyfriend.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2822,"cardType":"A","text":"A disappointing salad.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2823,"cardType":"A","text":"A powered exoskeleton.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2824,"cardType":"A","text":"Ennui.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2825,"cardType":"A","text":"Oil!","numAnswers":0,"expansion":"CAHe5"},
  {"id":2826,"cardType":"A","text":"Giant sperm from outer space.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2827,"cardType":"A","text":"Doing the right stuff to her nipples.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2828,"cardType":"A","text":"Too much cocaine.","numAnswers":0,"expansion":"CAHe5"},
  {"id":2829,"cardType":"A","text":"Seeing things from Hitler\'s perspective","numAnswers":0,"expansion":"CAHe5"},
  {"id":2830,"cardType":"Q","text":"And today\'s soup is Cream of _.","numAnswers":1,"expansion":"CAHe5"},
  {"id":2831,"cardType":"Q","text":"Now in bookstores: \â€The Audacity of _,\â€ by Barack Obama.","numAnswers":1,"expansion":"CAHe5"},
  {"id":2832,"cardType":"Q","text":"WHOOO! God damn I love _!","numAnswers":1,"expansion":"CAHe5"},
  {"id":2833,"cardType":"Q","text":"Do you lack energy? Does it sometimes feel like the whole world is _? Zoloft.&reg;","numAnswers":1,"expansion":"CAHe5"},
  {"id":2834,"cardType":"Q","text":"Hi, this is Jim from accounting. We noticed a $1,200 charge labeled \â€_.\â€ Can you explain?","numAnswers":1,"expansion":"CAHe5"},
  {"id":2835,"cardType":"Q","text":"Well if _ is good enough for _, it\'s good enough for me.","numAnswers":2,"expansion":"CAHe5"},
  {"id":2836,"cardType":"Q","text":"Yo\' mama so fat she _!","numAnswers":1,"expansion":"CAHe5"},
  {"id":2837,"cardType":"Q","text":"What killed my boner?","numAnswers":1,"expansion":"CAHe5"},
  {"id":2838,"cardType":"Q","text":"Don\'t forget! Beginning this week, Casual Friday will officially become \â€_ Friday.\â€","numAnswers":1,"expansion":"CAHe5"},
  {"id":2839,"cardType":"Q","text":"In his farewell address, George Washington famously warned Americans about the dangers of _.","numAnswers":1,"expansion":"CAHe5"},
  {"id":2840,"cardType":"Q","text":"Having the worst day EVER. #_","numAnswers":1,"expansion":"CAHe5"},
  {"id":2841,"cardType":"Q","text":"Get ready for the movie of the summer! One cop plays by the book. The other\'s only interested in one thing: _.","numAnswers":1,"expansion":"CAHe5"},
  {"id":2842,"cardType":"Q","text":"What\'s making things awkward in the sauna?","numAnswers":1,"expansion":"CAHe5"},
  {"id":2843,"cardType":"Q","text":"Life\'s pretty tough in the fast lane. That\'s why I never leave the house without _.","numAnswers":1,"expansion":"CAHe5"},
  {"id":2844,"cardType":"Q","text":"Patient presents with _. Likely a result of _.","numAnswers":2,"expansion":"CAHe5"},
  {"id":2845,"cardType":"Q","text":"Hi MTV! My name is Kendra, I live in Malibu, I\'m into _, and I love to have a good time.","numAnswers":1,"expansion":"CAHe5"},
  {"id":2846,"cardType":"Q","text":"Help me doctor, I\'ve got _ in my butt!","numAnswers":1,"expansion":"CAHe5"},
  {"id":2847,"cardType":"Q","text":"Why am I broke?","numAnswers":1,"expansion":"CAHe5"},
  {"id":2848,"cardType":"Q","text":"I don\'t mean to brag, but they call me the Michael Jordan of _.","numAnswers":1,"expansion":"CAHe5"},
  {"id":2849,"cardType":"Q","text":"Heed my voice, mortals! I am the god of _, and I will not tolerate _!","numAnswers":2,"expansion":"CAHe5"},
  {"id":2850,"cardType":"Q","text":"Here at the Academy for Gifted Children, we allow students to explore _ at their own pace.","numAnswers":1,"expansion":"CAHe5"},
  {"id":2851,"cardType":"Q","text":"Well what do you have to say for yourself, Casey? This is the third time you\'ve been sent to the principal\'s office for _.","numAnswers":1,"expansion":"CAHe5"},
  {"id":2852,"cardType":"Q","text":"In his new action comedy, Jackie Chan must fend off ninjas while also dealing with _.","numAnswers":1,"expansion":"CAHe5"},
  {"id":2853,"cardType":"Q","text":"Armani suit: $1,000. Dinner for two at that swanky restaurant: $300. The look on her face when you surprise her with _: priceless.","numAnswers":1,"expansion":"CAHe5"},
  {"id":2854,"cardType":"Q","text":"Do the Dew &reg; with our most extreme flavor yet! Get ready for Mountain Dew _!","numAnswers":1,"expansion":"CAHe5"}];
    
    
    // Function Factory
    // GetCards.isAnswerCard = isAnswerCard;
    // GetCards.isQuestionCard = isQuestionCard;
    // GetCards.answerCards = answerCards;
    // GetCards.questionCards = questionCards;

	
    return GetCards;
})