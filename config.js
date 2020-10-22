// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // The length of the sentence can be any, you can write ten sentences or 20 sentences
    // Try not to exceed 15 words in each sentence, otherwise the display effect may not be very good
    texts: [
        "Its your birthday today", //Here, the last comma at the end of each sentence must be in English!! Very important!!
        "Beloved Little Cutie", // Same as above...
        "I hope your day is filled with..",
        "lots of love and laughter!",
        "May life bring you everything..",
        "you are dreaming about.",
        "Once Again",
        "Happy Birthday",
        "From",
        "~~Naveen~~",
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
        // "Today is your birthday": "./imgs/birthday.jpg",
    },
    // Button text description, the following is the default button text, in English, you can change it to your favorite text
    desc: {
        turn_on: "Let's Turn On Lights",
        play: "Now Start Music",
        bannar_coming: "Let's see Decoratations",
        balloons_flying: "Now Fly With Balloons",
        cake_fadein: "See Most Delicious Cake Ever",
        light_candle: "Light Candle",
        wish_message: "Happy Birthday",
        story: "A small mesage for you",
    }
};