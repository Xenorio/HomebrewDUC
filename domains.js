// A list of all domains and hosts that should be updated.
// 
// All available services are listed in ./services
// Every service has it's own config requirements, which should be listed at the top of each service module
//
// If the service you want to use is not supported, you can either use the "custom" service, request an addition via a GitHub issue, 
// or create your own service module and submit a pull request

module.exports.domains = [
	{
		"domain": "example.com",
		"service": "namecheap",
        	"hosts": [
            		"@",
            		"www",
            		"*"
        	],
        	"password": "your_password"
	}
]
