This code is just a sample to create and run basic node js code that runs on docker. to run the sample, you may open the folder in visual studio code, then run the following commands
docker build -t alpine-dual-ports .
docker run -d -p 3000:3000 -p 4000:4000 --name running-dual-app alpine-dual-ports
curl http://localhost:3000

just make sure your current bash directory is NodeJS where the NodeJS and docker samples are. Simple!