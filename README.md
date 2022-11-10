# Tweeter Project

Tweeter is a simple, single-page Twitter clone. This page is designed to be reactive to monitor sizes over 1024px. This page can take unlimited tweets that are 140 characters or less and publish them dynamically with randomized user names. It is also designed to throw errors should the tweet not be valid (Over 140 or 0 charcters)



## Screenshots
!["Homepage"](https://github.com/WilWadman/tweet/blob/master/docs/Homepage.png?raw=true)
!["Tweet input"](https://github.com/WilWadman/tweet/blob/master/docs/tweetbox.png?raw=true)
!["Published Tweet"](https://github.com/WilWadman/tweet/blob/master/docs/published%20tweet.png?raw=true)

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser ^1.15.2
- chance ^1.0.2
- express ^4.13.4
- md5 ^2.1.0
