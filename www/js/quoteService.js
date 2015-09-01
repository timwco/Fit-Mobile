angular.module('starter.controllers')

.service('QuoteService', function () {


  // Source: http://www.menshealth.com/fitness/best-fitness-quotes-all-time
  var quotes = [
    {
      quote: 'The last three or four reps is what makes the muscle grow. This area of pain divides the champion from someone else who is not a champion.',
      author: 'Arnold Schwarzenegger'
    },
    {
      quote: 'In training, you listen to your body. In competition, you tell your body to shut up.',
      author: 'Rich Froning Jr'
    },
    {
      quote: 'You shall gain, but you shall pay with sweat, blood, and vomit.',
      author: 'Pavel Tsatsouline'
    },
    {
      quote: 'There’s no secret formula. I lift heavy, work hard, and aim to be the best.',
      author: 'Ronnie Coleman'
    },
    {
      quote: 'If something stands between you and your success, move it. Never be denied.',
      author: 'Dwayne Johnson'
    },
    {
      quote: 'There comes a certain point in life when you have to stop blaming other people for how you feel or the misfortunes in your life. You can’t go through life obsessing about what might have been.',
      author: 'Hugh Jackman'
    },
    {
      quote: 'Success is usually the culmination of controlling failure.',
      author: 'Sylvester Stallone'
    },
    {
      quote: 'Don’t be afraid of failure. This is the way to succeed.',
      author: 'LeBron James'
    },
    {
      quote: 'I will sacrifice whatever is necessary to be the best.',
      author: 'J.J. Watt'
    },
    {
      quote: 'Most people give up right before the big break comes—don’t let that person be you.',
      author: 'Michael Boyle'
    },
    {
      quote: 'I feel an endless need to learn, to improve, to evolve—not only to please the coach and the fans—but also to feel satisfied with myself.',
      author: 'Cristiano Ronaldo'
    },
    {
      quote: 'You’re going to have to let it hurt. Let it suck. The harder you work, the better you will look. Your appearance isn’t parallel to how heavy you lift, it’s parallel to how hard you work.',
      author: 'Joe Manganiello'
    },
    {
      quote: 'You have to push past your perceived limits, push past that point you thought was as far as you can go.',
      author: 'Drew Brees'
    },
    {
      quote: 'If you ain’t pissed off for greatness, that just means you’re okay with being mediocre.',
      author: 'Ray Lewis'
    },
    {
      quote: 'When you have a clear vision of your goal, it’s easier to take the first step toward it.',
      author: 'L.L. Cool J.'
    },
    {
      quote: 'We run for the people who think they cant.',
      author: 'Dick Hoyt'
    },
    {
      quote: 'I was never a natural athlete, but I paid my dues in sweat and concentration, and took the time necessary to learn karate and became a world champion.',
      author: 'Chuck Norris'
    },
    {
      quote: 'Your health account, your bank account, they’re the same thing. The more you put in, the more you can take out. Exercise is king and nutrition is queen. Together you have a kingdom.',
      author: 'Jack LaLanne'
    },
    {
      quote: 'Some people want it to happen, some wish it would happen, others make it happen.',
      author: 'Michael Jordan'
    },
    {
      quote: 'I know that if I set my mind to something, even if people are saying I can’t do it, I will achieve it.',
      author: 'David Beckham'
    },
  ];


  this.randomQuote = function () {
    return quotes[Math.floor(Math.random()*quotes.length)];
  };


});
