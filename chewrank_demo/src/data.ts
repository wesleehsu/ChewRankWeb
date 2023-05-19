const data = {
  hot: [
    { height: 233,imgFlag:true, title: "Thai food is so good🤤", description: "Siam Station | Irvine, CA \nThai food is so good🤤here are the #deats : \n-Pad Thai \n -Pad See Ew \n-Chinese Broccoli", 
      img: "/Post1/Post.jpg", accountName: "clovchoi", accountPic: "/Post1/Account.png",
      likesNum: 520, commentNum: 5, collectionNum: 1, restaurantName:"Siam Station",
      reviewRank:4.3, reviewNum: 128, followingFlag: false, feature: "Hot"},

    { height: 272, imgFlag:false, title: "Had to get some vids of my first time at @iniristorante!", description: "It’s been on my list of places to try for months 🤤 been feeling inspired to create food content outside of the kitchen again so I thought I’d share! (Bringing back the Yelp elite in me hahaha)🫶🏼", 
      img: "/Post2/Post.mp4", accountName: "skatewithlin", accountPic: "/Post2/Account.png",
      likesNum: 165, commentNum: 32, collectionNum: 76, restaurantName:"Ini Ristorane",
      reviewRank:4.5, reviewNum: 231, followingFlag: true, feature: "Hot"},

    { height: 285, imgFlag:true, title: "I have a good review for you all today 🫶", description: "hello friends! \nI have a good review for you all today 🫶\nSo my family and I went to @folksrestaurantand we knew this place was amazing, but it really blew our minds \n", 
      img: "/Post3/Post.jpg", accountName: "bishesdishes", accountPic: "/Post3/Account.png",
      likesNum: 326, commentNum: 5, collectionNum: 0, restaurantName:"Folks Pizzeria",
      reviewRank:4.7, reviewNum: 80, followingFlag: true, feature: "Hot"},

    { height: 170, imgFlag:true, title: "Introducing Northern-style Vietnamese cuisine", description: "\nCLICK HERE TO FOLLOW\n@supnoodlebar \n\nIf you would like to have your restaurant featured on our site for FREE, please email us at\naapiownedrestaurants@gmail.com", 
      img: "/Post4/Post.jpg", accountName: "fkndelicious", accountPic: "/Post4/Account.png",
      likesNum: 772, commentNum: 29, collectionNum: 0, restaurantName:"SÚP NOODLE BAR",
      reviewRank:4.5, reviewNum: 704, followingFlag: false, feature: "Hot"},

    { height: 275, imgFlag:false, title: "Anyone else obsessed with bone marrow? 😅", description: "anyone else obsessed with bone marrow? 😅\n\nft. @nep.cafe\n\n#bonemarrow #bonemarrowpasta #banhmichao #bánhmìchảo #thitnuong", 
      img: "/Post5/Post.mp4", accountName: "takeoneroad", accountPic: "/Post5/account.png",
      likesNum: 1322, commentNum: 981, collectionNum: 2312, restaurantName:"Nép cafe & brunch",
      reviewRank:4.7, reviewNum: 80, followingFlag: true, feature: "Hot"},

    { height: 260, imgFlag:true, title: "everything we ate at @anjin_costamesa", description: "everything we ate at @anjin_costamesa", 
      img: "/Post6/Post.jpg", accountName: "johnson.doa", accountPic: "/Post6/account.png",
      likesNum: 3965, commentNum: 966, collectionNum: 1255, restaurantName:"Anjin",
      reviewRank:4.6, reviewNum: 486, followingFlag: true, feature: "Hot"},

    { height: 218, imgFlag:true, title: "📌 Rising Phoenix Milk Tea $5.00 USD", description: "Best Oolong milk tea I’ve ever had! Their boba milk tea was truly exceptional, you could literally taste the quality of the tea compared to many other boba chains! The service was 10/10, they wanted me to have a taste of my drink first before leaving to make sure I got my desired amount of sweetness (1-5). 10/10 recommended;)", 
      img: "/Post7/Post.jpg", accountName: "foodie.914", accountPic: "/Post7/account.png",
      likesNum: 754, commentNum: 28, collectionNum: 76, restaurantName:"Orobae",
      reviewRank:4.6, reviewNum: 384, followingFlag: false, feature: "Hot"},

    { height: 280, imgFlag:true, title: "Very cute spot next to the beach", description: "At Larsen's Grill, the food is as spectacular as the scenery.", 
      img: "/Post8/Post.jpg", accountName: "Cindy_0314", accountPic: "/Post8/account.png",
      likesNum: 36597, commentNum: 3223, collectionNum: 2756, restaurantName:"Larsen",
      reviewRank:3.8, reviewNum: 132, followingFlag: true, feature: "Hot"},

    { height: 214, imgFlag:true, title: "I feel like a new boba shop opens in Irvine every week", description: "I feel like a new boba shop opens in Irvine every week and @cloudycotea is another one of them :-) Located in Heritage Plaza near Orobae, across from Omomo, and a short walk from Irvine High, Cloudy Co has a variety of drinks AND desserts, separating it from other shops.", 
    img: "/Post9/Post.jpg", accountName: "hungryhingco", accountPic: "/Post9/account.png",
    likesNum: 102, commentNum: 12, collectionNum: 2, restaurantName:"Cloudy Co", 
    reviewRank:4.2, reviewNum: 84, followingFlag: false, feature: "Hot"},

    { height: 282, imgFlag:false, title: "Have you ever seen a pink shipping container serving coffee? ☕️", description: "🔷This pretty pink container serves specialty coffees in addition to cheeky merchandise and vegan/keto-friendly treats made with natural ingredients. It’s dog friendly and offers “puppy cracks” for your dogs. Overall, It’s on the pricier side (it’s in Irvine after all 😀), but it’s a fun and unique experience. Tip: You can find it between two buildings.", 
    img: "/Post10/Post.mp4", accountName: "jazwonder", accountPic: "/Post10/account.png",
    likesNum: 555, commentNum: 312, collectionNum: 4376, restaurantName:"Dose In The Box", 
    reviewRank:4.4, reviewNum: 84, followingFlag: false, feature: "Hot"},

    { height: 298, imgFlag:true, title: "midday matcha break 🫶🏼✨", description: "midday matcha break 🫶🏼✨", 
    img: "/Post11/Post.jpg", accountName: "lifeandlyss", accountPic: "/Post11/account.png",
    likesNum: 178, commentNum: 32, collectionNum: 76, restaurantName:"Nook coffee Bar", 
    reviewRank:4.7, reviewNum: 163, followingFlag: false, feature: "Hot"},

    { height: 260, imgFlag:true, title: "Night before X-mas~~~ North Italian, amazing food. ", description: "Night before X-mas~~~ North Italian, amazing food. ", 
    img: "/Post12/Post.jpg", accountName: "m_xxy5", accountPic: "/Post12/account.png",
    likesNum: 3235, commentNum: 712, collectionNum: 1716, restaurantName:"North Italian", 
    reviewRank:4.5, reviewNum: 2892, followingFlag: true, feature: "Hot"},

    { height: 280, imgFlag:true, title: "Brunch date with my soon to be bride Monica~", description: "📍Irvine, CA\n@angelinaspizzeria \n\nSquid ink pasta is a must !!!!!!!", 
    img: "/Post13/Post.jpg", accountName: "chapterrita", accountPic: "/Post13/account.png",
    likesNum: 296, commentNum: 132, collectionNum: 176, restaurantName:"Angelina's Pizzeria", 
    reviewRank:4.5, reviewNum: 706, followingFlag: true, feature: "Hot"},

    { height: 283, imgFlag:false, title: "Join me for some Japanese BBQ at @manpuku.cali🥩!", description: "What I ordered: - Uni beef sashimi  - Manpuku salad - Fresh corn - Angus Beef tongue",
    img: "/Post14/Post.mp4", accountName: "jill.akemi", accountPic: "/Post14/account.png",
    likesNum: 297, commentNum: 28, collectionNum: 0, restaurantName:"Manpuku Jp BBQ",
    reviewRank:4.4, reviewNum: 204, followingFlag: false, feature: "Hot"},

//   ],
//   "Following":[


    { height: 233, imgFlag:true, title: "Enjoyed a delicious ramen dinner at HiroNori Craft Ramen at the Enclave", description: "Enjoyed a delicious ramen dinner at HiroNori Craft Ramen at the Enclave. Pictured here is the Spicy Dipping Cold Noodles, the Tonkatsu Ramen, the Spicy Tuna on Crispy Rice and the Pork Belly Buns. @hironoriramen", 
    img: "/Post15/Post.jpg", accountName: "shortsweet2eat", accountPic: "/Post15/account.png",
    likesNum: 2199, commentNum: 32, collectionNum: 76, restaurantName:"Hironori",
    reviewRank:4.6, reviewNum: 1921, followingFlag: false, feature: "Following"},

    { height: 282, imgFlag:true, title: "Love my drinks super sweet but this place is not as sweet as most boba places even at 100%", description: "✧ mango high mountain tea ($5.30) - all of their fruit teas are made with high mountain oolong tea. this one was the most fragrant so it was def my favorite out of the two✧ passionfruit high mountain tea ($5.30) - this one wasn't bad but i felt like it wasn't as fragrant as mango", 
    img: "/Post16/Post.jpg", accountName: "friesandchives", accountPic: "/Post16/account.png",
    likesNum: 365, commentNum: 132, collectionNum: 76, restaurantName:"Soma tea & mocktail",
    reviewRank:4.5, reviewNum: 57, followingFlag: true, feature: "Following"},

    //   ],
//   "New":[
    { height: 290, imgFlag:true, title: "Honey Pig Irvine", description: "PC @spencerqin    #irvine #irvinefood #irvinefoodie #irvinefoodies#foodie #foodies #food #nice #yum #tasty", 
    img: "/Post17/Post.jpg", accountName: "irvinefoodies", accountPic: "/Post17/account.png",
    likesNum: 629, commentNum: 74, collectionNum: 6, restaurantName:"HoneyPig",
    reviewRank:4.2, reviewNum: 359, followingFlag: false, feature: "New"},

    { height: 210, imgFlag:true, title: "Snooze A.M. Eatery📍(chain)", description: "🥚Huevos tostada ⭐️7/10 $12.25\n🥑Smashed avocado⭐️6/10 $14.95\ 🍫Hot chocolate ⭐️8/10 $4.50\n\n\nThe ambiance is very scenic. The food could use more flavor especially for the price. If i were to choose, I would go first to watch over this place for brunch.", 
    img: "/Post18/Post.jpg", accountName: "phaties.eat", accountPic: "/Post18/account.png",
    likesNum: 1139, commentNum: 32, collectionNum: 76, restaurantName:"Snooze, AN A.M.",
    reviewRank:4.4, reviewNum: 1915, followingFlag: false, feature: "New"},

    { height: 310, imgFlag:false, title: "@houstonsrestaurants| always a solid option", description: "@houstonsrestaurants| always a solid option, how do we always forget about the hawaiian rib eye! and the five nut brownie is my new fav dessert🍫🤤", 
    img: "/Post19/Post.mp4", accountName: "conniechews", accountPic: "/Post19/account.png",
    likesNum: 719, commentNum: 51, collectionNum: 117, restaurantName:"Houston’s Restaurant ",
    reviewRank:4.5, reviewNum: 1682, followingFlag: false, feature: "New"},

    { height: 221, imgFlag:true, title: "Geat for any occasion and private events", description: "We love going to @eddievs_ it’s great for any occasion and private events too.. especially when there’s cheesy potatoes involved 😉They have locations in Michigan, Massachusetts and more! Check them out!", 
    img: "/Post20/Post.jpg", accountName: "bossblue.eats", accountPic: "/Post20/account.png",
    likesNum: 269, commentNum: 14, collectionNum: 36, restaurantName:"Eddie V’s Seafood",
    reviewRank:4.7, reviewNum: 743, followingFlag: false, feature: "New"},

    //   ],
//   "Best":[
    { height: 263, imgFlag:true, title: "Beautiful Saturday meal 🪴", description: "#rogersgardens #rogersgardensnewportbeach#farmhouse #farmhouseatrogersgardens#farmtotable #enchiladas #stuffedfrenchtoast#newportbeach ", 
    img: "/Post21/Post.jpg", accountName: "Cindy_0314", accountPic: "/Post21/account.png",
    likesNum: 8110, commentNum: 232, collectionNum: 3676, restaurantName:"Roger's Gardens",
    reviewRank:4.6, reviewNum: 1434, followingFlag: false, feature: "Best"},

],
};

export default data;
