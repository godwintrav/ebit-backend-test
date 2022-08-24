# eBit Labs back-end technical exercise

Thanks for applying for a front-end developer role at eBit Labs! This exercise is designed to allow you to demonstrate your development skills and for us to see how you think about solving a technical problem. It shouldn't take more than an hour to complete, and we'll use it as a starting point for our technical interview.

## Tech stack

Please use whatever language/framework you feel most comfortable with to complete the exercise. We have provided a database file as well as some unit tests for testing your solution which require the following:

- [Node.js](https://nodejs.org/en/)
- [SQLite](https://sqlite.org/)

## Getting started

- Fork this repo and clone locally
- `npm install`

To run the tests:

- `npm run test`

## The exercise

Please complete the steps below, committing your changes at the end of each step. Once you've finished, please push your repo to GitHub and share the URL with us (or zip up the Git repo and email it to us if you prefer).

### Step 1: Return the most recent ETH/USD price

Using any language or framework, create an HTTP API service which connects to the SQLite database (`db.sqlite3`) and returns the most recent `vwap` price for the `ETH/USD` pair.

The service should be available at `http://localhost:3000/api/fx/ohlc/ETHUSD`, and should return the data in this format:

```json
{
  "pair": "ETH/USD",
  "vwap": 1234.5
}
```

You should also consider that this API service will eventually be used by a web app hosted at `http://example.ebitlabs.com`.

### Step 2: Return the ETH/GBP price

Update your service so that you can also retrieve the ETH/GBP price. The output should look something like this:

```bash
$ curl http://localhost:3000/api/fx/ohlc/ETHGBP | json_pp

{
   "pair" : "ETH/USD",
   "vwap" : 1937.05779
}
```

### Step 3: Return the high and low prices for each day

Update your service so that you can retrieve the historical high/low prices for each day in descending date order.

The request URLs should look like:

```bash
http://localhost:3000/api/fx/ohlc/ETHUSD/history # ETH/USD
http://localhost:3000/api/fx/ohlc/ETHGBP/history # ETH/GBP
```

And the response be in this format:

```json
[
  ["ETH/USD", "2021-06-15", 1854.99, 1785.58],
  ["ETH/USD", "2021-06-18", 1954.99, 1745.58],
  ...
]
```
