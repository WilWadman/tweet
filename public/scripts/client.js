/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // --- our code goes here ---

  $("form").on("submit", onSubmit);
  loadTweets();

});

const loadTweets = function() {
  $.get('/tweets')
    .then((data) => renderTweets(data));
};


const onSubmit = function(event) {
  event.preventDefault();
  const serial = $(this).serialize();
  const numberOfChars = $("#tweet-text").val().length;

  if (numberOfChars > 140) {
    document.querySelector('.error').innerHTML = 'This tweet is too long, please make it smaller';
    $('.error').slideDown();

    return;
  }

  if ($("#tweet-text").val() === "") {
    document.querySelector('.error').innerHTML = 'Error, your tweet needs content to be posted.';
    $('.error').slideDown();
    return;
  }

  $.post("/tweets", serial)
  
    .then(() => {
      document.querySelector('.error').innerHTML = "";
      $('.error').slideUp();
      loadTweets();
    });
};

const renderTweets = function(data) {
  for (let users of data) {
    let tweet = createTweetElement(users);
    $(".tweet-container").append(tweet);


  }
  return;

  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
};

const createTweetElement = function(tweet) {
  tweet.content.text = $('<div/>').text(tweet.content.text).html();
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
              <h5> ${timeago.format(tweet.created_at)}</h5>
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


