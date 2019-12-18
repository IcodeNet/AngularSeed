# How to initialise the project #

[![Greenkeeper badge](https://badges.greenkeeper.io/IcodeNet/AngularSeed.svg)](https://greenkeeper.io/)

This is some documentation about managing the packages and what is needed to get you up and running with this project.

## Technology Stack


- AngularJS: MVW framework
- JSPM.io: Browser package management built on top of ES6 module loader
- Babel Transpiler(known as 6to5 previously); turn your ES6+ code to ES5 friendly code)


## Project Structure
- index.html: entry point of the SPA
- package.json: node module config file 
- config.js: jspm configuration file 
- app folder (under wwwroot) store all application JavaScript, css, img files.
- app.js single entry point to all application JavaScript files

## Setting up the project & package management ##

There are some steps required before you can start work on this project:

1. Install the latest version of Node.Js [http://https://nodejs.org/](http://https://nodejs.org/) 
2. Install the JSPM package manager - to do this, go to your command prompt and type:
 
    `npm install -g jspm`
3. Install the jspm-server - to do this, go to your command prompt and type: 

    `npm install -g jspm-server`

## The following will install all dependencies ##
    
go to an administrator command prompt and navigate to the root folder of this project and run:

    jspm install	

now you can see the SPA running by running the follwoing:
    
    jspm-server

### known issues ###

 1. As we are getting some libraries from github if we get some error around github limits we have to run:

        jspm registry config github    //and follow the instructions

 2. jspm has issues installing sometimes if the command prompt is running under administrator privileges. 
So make sure that you use a normal cmd, navigate to the project's folder and then run the above commands.