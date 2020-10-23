// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // The length of the sentence can be any, you can write ten sentences or 20 sentences
    // Try not to exceed 15 words in each sentence, otherwise the display effect may not be very good
    texts: [
        "Its your birthday today", //Here, the last comma at the end of each sentence must be in English!! Very important!!
        "Beloved Little Cutie", // Same as above...
        "I hope your day is filled with..",
        "lots of love and laughter.!!",
        "Make your parents feel proud of you",
        "Never ever hurt or cheat them..",
        "As they were working hard for you",
        "Think of your parents before doing any work",
        "May life bring you everything..",
        "you are dreaming about future!",
        "Once Again Wishing you a very pleasant..",
        "Happy Birthday",
        "From Naveen!!",
    ],
    /**
     * imgs can be left blank, but if you want to fill in, you must follow the format below
     * "Correspond to the above text, it must be exactly the same": "Picture address, you can put the picture in the imgs folder"
     * E.g
     * "Beloved little cute": "./imgs/xiaokeai.jpg"
     *
     * If you don't want pictures, just write two slash comments at the beginning of each line. For example, the picture below "Today is your birthday" will not be displayed :)
     * Tip: The picture is best to use a square or close to a square, it looks better
     */
    imgs: {
        "Beloved Little Cutie": "./imgs/APPALANAIDU1.jpg",
        "lots of love and laughter.!!": "./imgs/laugh.jpg",
        "Make your parents feel proud of you": "./imgs/proud.jpg",
        "As they were working hard for you": "./imgs/hard.jpg",
        "Think of your parents before doing any work": "./imgs/hard.jpg",
        "you are dreaming about future!": "./imgs/life.jpg",
        "Happy Birthday": "./imgs/naveen.jpg",
        "From Naveen!!": "./imgs/naveen2.jpg",
        
        // "Today is your birthday": "./imgs/birthday.jpg",
    },
    // Button text description, the following is the default button text, in English, you can change it to your favorite text
    desc: {
        turn_on: "Let's Turn On Lights",
        play: "Now Start Music",
        bannar_coming: "Let's Decorate",
        balloons_flying: "Now feel flying Balloons",
        cake_fadein: "See Most Delicious Cake Ever",
        light_candle: "Light Candle",
        wish_message: "Happy Birthday",
        story: "A small mesage for you",
    }
};