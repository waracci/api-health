# node-api-health

Node Js and Express middleware to monitor and log API access. The logs, among other metrics, are displayed realtime on a [live dashboard](https://apihealth.co/logs).

## Getting Started

1 Sign up on api-health website [https://apihealth.co/logs](https://apihealth.co/logs).

2 Create an app via the dashboard [https://apihealth.co/dashboard](https://apihealth.co/dashboard)

2 Copy the credentials provided to your `.env` file

> Example: `API_HEALTH_API_KEY=https://api.apihealth.co/api/sendlogs?apiKey=sample_key`

3 Configure your Node JS API server

### Installation

Install the `node-api-health` monitoring npm package available through the [npm registry](https://www.npmjs.com/)

```bash
   npm install node-api-health --save
```

Configuring the Node server

```javascript
const apiHealth = require("node-api-health");

// Express server initialisation
const app = express();

app.use(apiHealth)
```

## Built With

* [Node JS](https://nodejs.org/)
* [Express](https://expressjs.com/) - The web framework used

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Waracci** - *Initial work* - [waracci](https://github.com/waracci)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Inspiration
* etc

