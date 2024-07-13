// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // The length of the sentence can be any, you can write ten sentences or 20 sentences
    // Try not to exceed 15 words in each sentence, otherwise the display effect may not be very good
    texts: [
        "Its your birth day today", //Here, the last comma at the end of each sentence must be in English!! Very important!!
        "Beloved Little baby", // Same as above...
        "I hope your birthday is as",
        "amazing as you are, my beautiful girlfriend.",
        "You mean a lot to me",
        "you deserve nothing less..",
        "May life bring you everything..",
        "you are dreaming about future!",
        "No one lightened up my life like you",
        "Thank you for being by my side",
        "and sharing your life with me",
        "Once again Wishing you a very pleasant..",
        " !! Happy Birthday !! ",
        "from your Vee!!",
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
        "Beloved Little baby": "./imgs/little_cutie.jpg",
        "lots of love and laughter.!!": "./imgs/laughter.jpg",
        "amazing as you are, my beautiful girlfriend.": "./imgs/amazing.jpg",
        "You mean a lot to me": "./imgs/alot.jpg",
        "you deserve nothing less..": "./imgs/nothing_less.jpg",
        "May life bring you everything..": "./imgs/everything.jpg",
        "you are dreaming about future!": "./imgs/life.jpg",
        "No one lightened up my life like you": "./imgs/lightenup.jpg",
        "Once again Wishing you a very pleasant..": "./imgs/pleasant.jpg",
        " !! Happy Birthday !! ": "./imgs/bday2.jpg",        
        "from your Vee!!": "./imgs/naveen2.jpg",
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
