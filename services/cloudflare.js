// Config:
//
// {
// 	"domain": "example.com",
// 	"service": "cloudflare",
// 	"hosts": [
// 		{
// 			"name": "@",
// 			"id": "host_id"
// 		},
// 		{
// 			"name": "www",
// 			"id": "host_id"
// 		}
// 	],
// 	"zone": "zone_id",
// 	"auth": {
// 		"email": "your_email",
// 		"key": "your_key"
// 	}
// }

const request = require('request')

module.exports.update = async (config, ip, host) => {

	request({
		method: "PATCH",
		uri: `https://api.cloudflare.com/client/v4/zones/${config.zone}/dns_records/${host.id}`,
		headers: {
			"X-Auth-Email": config.auth.email,
			"X-Auth-Key": config.auth.key
		},
		json: {
			type: "A",
			name: host.name,
			content: ip,
			ttl: 300
		}
	}, (err, res, body) => {
		if(err)return console.error(`Unable to update ${host.name}`, error)
		console.log(`Updated ${host.name}.${config.domain} with IP ${ip}`)
	})

}
