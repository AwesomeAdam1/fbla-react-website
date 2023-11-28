// Server Side
import { Client } from 'square';
import { randomUUID } from 'crypto';

const { paymentsApi } = new Client({
  accessToken: process.env.EAAAEFpNkDTHm2wvSvoXQ5jRB8ZtuJ43jmELNxeopLKJZO2iW0G9xlzca6PsERxe,
  environment: 'sandbox'
});

export default async function handler(req, res, amount_money) {
  if ( req.method === 'POST' ) {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: req.body.sourceId,
      amountMoney: {
        currency: 'USD',
        amount: amount_money
      }
    })
    console.log(result);
    res.status(200).json(result);
  } else {
    res.status(500).send();
  }
}

BigInt.prototype.toJSON = function() { return this.toString(); }