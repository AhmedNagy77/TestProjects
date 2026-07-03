This code is just a sample to create and run basic node js code that runs on docker. to run the sample, you may open the folder in visual studio code, then run the following commands
docker build -t alpine-dual-ports .
docker run -d -p 3000:3000 -p 4000:4000 --name running-dual-app alpine-dual-ports
curl http://localhost:3000

just make sure your current bash directory is NodeJS where the NodeJS and docker samples are. Simple!


# How to add files to the existing image without rebuilding
docker cp server.js running-dual-app:/usr/src/app/server.js
docker cp ./App/. running-dual-app:/usr/src/app/
docker restart running-dual-app

# How to use local folder and map it to the docker folder to see instant updates (not useful)
docker run -d -p 3000:3000 -p 4000:4000 -v "$(pwd)/App:/usr/src/app" --name running-dual-app alpine-dual-ports
docker restart running-dual-app

#invoke POST
Invoke-RestMethod -Uri "http://localhost:3000/add" `
  -Method POST `
  -Headers @{"Content-Type" = "application/json"} `
  -Body '{"num1": 15, "num2": 25}'


# Allow NPM to run
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
