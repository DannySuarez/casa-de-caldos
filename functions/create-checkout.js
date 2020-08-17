const stripe = require('stripe')(process.env.STRIPE_API_SECRET);

exports.handler = async({ body }) => {
  const {  amount } = JSON.parse(body);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        currency: 'usd',
        name: 'Casa De Caldos',
        amount,
        quantity: 1
      }
    ],
    success_url: 'http://localhost:8888/',
    cancel_url: 'http://localhost:8888/',
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ sessionId: session.id }),
  };
};
