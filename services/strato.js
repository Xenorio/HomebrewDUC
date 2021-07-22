// Config:
//
// {
// 	"domain": "example.com",
// 	"service": "strato",
// 	"hosts": [
// 		"@",
// 		"www"
// 	],
// 	"password": "your_password"
// }

const request = require('request')

module.exports.update = async (config, ip, host) => {

	request.get(`https://dyndns.strato.com/nic/update?host=${host}.${config.domain}&password=${config.password}&myip=${ip}`, (error, res, body) => {

		if (error) return console.error(`Unable to update ${host}.${config.domain}`, error)

		console.log(`Updated ${host}.${config.domain} with IP ${ip}`)
	})


}