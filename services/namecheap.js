// Config:
//
// {
// 		"domain": "example.com",
// 		"service": "namecheap",
// 		"hosts": [
// 			"@",
// 			"www"
// 		],
// 		"password": "your_password"
// }

const request = require('request')

module.exports.update = async (config, ip, host) => {

	request.get(`https://dynamicdns.park-your-domain.com/update?host=${host}&domain=${config.domain}&password=${config.password}&ip=${ip}`, (error, res, body) => {

		if (error) return console.error(`Unable to update ${host}.${config.domain}`, error)

		console.log(`Updated ${host}.${config.domain} with IP ${ip}`)
	})

}