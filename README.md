# DockerNodeProject
***
Simple docker project dockerizing an Node application

## 💻 Pre-requisites

Before you use this project you need to have Docker and Node installed in your computer.

https://www.docker.com/products/docker-desktop/

### Git clone
This will clone the project.
```
$ git clone https://github.com/Kar1stan/DockerNodeProject.git
$ cd DockerNodeProject
```

## 🚀 Run the Dockerfile: 
Open the terminal and run:
```
$ docker build -t my-node-app .
$ docker run -it -p 1234:8000 my-node-app
