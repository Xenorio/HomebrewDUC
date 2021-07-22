// Config:
//
// {
// 	"domain": "example.com",
// 	"service": "custom",
// 	"uri": "dnsprovider.com/update?domain=%domain%&ip=%ip%&password=%password%",
// 	"headers": {
// 		"Authorization": "auth_header"
// 	},
// 	"payload": {
// 		/* Some payload */
// 	}
// }


// Add variables to string
const parseVariables = (content, config) => {
	return content
			.split('%domain%').join(config.domain)
			.split('%ip%').join(ip)
			.split('%password%').join(config.password)
}

module.exports.update = async (config, ip, host) => {

	// Parse headers
	let headers = config.headers
	for(let i in headers){
		headers[i] = parseVariables(headers[i], config)
	}

	// Parse payload
	let payload = config.payload
	for(let i in payload){
		payload[i] = parseVariables(payload[i], config)
	}

	request({
		method: config.method,
		uri: parseVariables(config.uri, config),
		headers: headers,
		json: payload
	}, (err, res, body) => {
		if(err)return console.error(`Unable to update ${host}`, error)
		console.log(`Updated ${host}.${config.domain} with IP ${ip}`)
	})

}