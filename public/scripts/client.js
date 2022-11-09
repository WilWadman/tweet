/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Fake data taken from initial-tweets.json
const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

const renderTweets = function (data) {
  for (let users of data) {
    let tweet = createTweetElement(users);
    console.log("tweet", tweet);
    $(".tweet-container").append(tweet);
    console.log("36", tweet);
  }
  return;

  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
};

const createTweetElement = function (tweet) {
  let $tweet = `
  

          <article>

            <div class="tweethead">
              <div class="tweetheader">
                <span>
                  <img src="${tweet.user.avatars}">
                </span>
                <h3>${tweet.user.name}</h3>
              </div>
              <div class="handle">
                <h2>${tweet.user.handle}</h2>
              </div>
            </div>



            <div class="tweetbody">${tweet.content.text}</div>
            <div class="footerspacer">
              <h5> ${tweet.created_at}</h5>
              <div class="tweetfooter">
                <div class="icon1">
                  <i class="fa-solid fa-flag"></i>
                </div>
                <div class="icon2">
                  <i class="fa-solid fa-repeat"></i>
                </div>
                <div class="icon3">
                  <i class="fa-solid fa-heart"></i>
                </div>
                </div>
                </article>`;

  return $tweet;
};

$(document).ready(function () {
  renderTweets(data);
});
