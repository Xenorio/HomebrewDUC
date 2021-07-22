const ms = require('ms')
const fs = require('fs')

const publicip = require('public-ip')

const domains = require('./domains.js').domains
const config = require('./config.js').config

var lastip = "0.0.0.0"

var services = {}

// Load services
fs.readdir('./services', (error, files) => {
	for(let file of files){
		let service = file.split('.')[0]
		if(file.endsWith('.js')){
			services[service] = require(`./services/${file}`)
		}
	}
})

// Update IPs
let update = async () => {

	// Get current IP
    let ip = await publicip.v4()

	// Don't update if IP has not changed
    if (ip == lastip) return
    lastip = ip

	// Iterate over domains in config
    for (let domain of domains) {

		// Fetch service to use
		let service = services[domain.service]

		// If service does not exist, ignore update and post error to console
		if(service == undefined){
			console.error(`Unknown service "${domain.service}" for domain ${domain.domain}`)
			continue
		}

		// Iterate over hosts of domain
        for (let host of domain.hosts) {
			
			// Update host
			service.update(domain, ip, host)

        }
    }




}

// Start the update cycle
update()

setInterval(() => {

    update()

}, ms(config.updateInterval))