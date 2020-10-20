// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // The length of the sentence can be any, you can write ten sentences or 20 sentences
    // Try not to exceed 15 words in each sentence, otherwise the display effect may not be very good
    texts: [
        "Send to me", //Here, the last comma at the end of each sentence must be in English!! Very important!!
        "Beloved Little Cutie", // Same as above...
        "Today is your birthday",
        "This is where we are together",
        "It's the third birthday",
        "Last year's birthday",
        "Remember what I ate at Wang Po Chuan Chuan",
        "I want to eat well this year",
        "I want to feed my lovely pigs",
        "Then take away",
        "YAMI~~",
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
        "Beloved Little Cutie": "./imgs/xiaokeai.png",
        // "Today is your birthday": "./imgs/birthday.jpg",
    },
    // Button text description, the following is the default button text, in English, you can change it to your favorite text
    desc: {
        turn_on: "Turn On Lights",
        play: "Play Music",
        bannar_coming: "Let's Decorate",
        balloons_flying: "Fly With Balloons",
        cake_fadein: "Most Delicious Cake Ever",
        light_candle: "Light Candle",
        wish_message: "Happy Birthday",
        story: "small mesage for you",
    }
};