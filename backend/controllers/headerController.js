const headerPage = async (req, res, next) => {
  const quotes = [
    `Don't be 'A' negative, be 'O' positive`,
    `Once a blood donor, always a lifesaver`,
    `Want to watch a miracle? Go and donate blood`,
    `'O' people, did you know you are the Universal Donors`,
    `Be the reason for someone's heartbeat`,
    `Donate blood. Not on roads but in blood donation camps`,
    `A single drop of blood can make a huge difference`,
    `Stay fit and eat right and donate blood`,
    `The gift of blood is a gift to someone's life`,
    `Donate blood and be the reason for someone's existence`,
    `You can become a superhero too. Just donate a bag of blood`,
    `One hour and you can save three lives with your blood`,
    `Not all heroes wear capes; some wear jeans and shirts too`,
    `A blood donor is equal to a lifesaver`,
    `Saving a life won't cost you anything. Go ahead and donate blood`,
    `Be a saviour just by donating your blood`,
    `Donate blood and save lives`,
    `Instead of giving your blood to mosquitoes, give it to someone who needs it`,
    `One bag of blood can bring back one from the dead`,
    `The bond of blood is stronger than anything`,
    `A blood bag in time saves a life`,
    `Someone, your type, is out there somewhere, needing your blood`,
  ];

  try {
    res.status(200).json({
      data: {
        heading: "Blood Donation",
        subHeadingQuote: quotes[Math.floor(Math.random() * quotes.length)],
      },
    });
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { headerPage };
