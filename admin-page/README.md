Needs a setup mongodb on a server. bindIp has to be later set to 127.0.0.1 (which means localhost). While in development
this bindIp should be 0.0.0.0 which means listening to all ports (including remotes).

npm i - install all package
npm start - to start the server