## HomebrewDUC
### A modular DynDNS update client


## What's this?
This is a completely modular DynDNS updater. It's supposed to support every DynDNS service in existence. If it doesn't, you can extend it by creating a service module that's tailored to the DynDNS service you want to be added!

Originally, this was a private project i have created to update my own domains, but after i have seen some interest in it, i have decided to make it public. So, as this was private at some point, please don't ridicule my code as it was not originally meant for the public.


## How do i use it?

First of all, you need a working installation of Node.JS

Then, just clone this repository, install dependencies via ``npm install``, configure your domains in domains.js, and start the client via ``npm start``


## The provider i want to use is not supported!

In this case you can either try to use the "custom" service, submit a service request via a GitHub issue, or create your own service module and submit a pull request!


## Can i use this in my own project?

This project is licensed under GPLv3 (or later). You can use it for whatever you want, provided that it's open source too.


## I have some ideas to make this better!

Great! Feel free to fork this repository, implement your ideas, and submit a pull request! I will merge any cool features that work!
