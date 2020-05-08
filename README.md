# Author: Ibrahim Tonifarah
# DevOps Resistor App

Very Simple single-page-application in Angular that calculates the resistance of a resistor based on its color bands.
- Calculate 5-band resistors
- Using an Angular service to perform calculations
-Fully Unit test the service
- Use an Angular Component to handle the models
- Fully end to end test the application
- Execute builds in jenkins
- Deploy Application with Jenkins deploy stage: This will build a Docker image with the application code, and working environment (http-server and other needed node packages). Then, starts a container running the deployed application on the virtual machines port 5000

Goals:
- Continuous Integration and build automation using Jenkins, npm etc.
- Source-controlled testing and deployment environments (Docker)
- Distributed version control (Git and remote repositories on Bitbucket)
- Build and test a web application using a Model View Controller style framework (Angular, Karma, Protractor etc)
- Use a command line environment (Linux) for application development.

The Three Major Components of this Project:
1. Configuring Jenkins and establishing pipelines: pulls code from remote repository and runs unit tests in a container
    -A Jenkinsfile was included with the following stages: Build (to run npm install), test (to run ng test), e2e(build docker image, run the detached container, perform a local webdriver-manager update, and run ng e2e using the --devServerTarget= option) , deploy.
    - Jenkins was configured with my github repository url and credentials
    - Jenkins will not allow code into the production codebase until it passes all test, and it will also be set to automatically run a pipeline when it detects new commits in the repository.

2. Docker Based E2E test environment
    - Dockerfile was created to build an image for hosting and running the application in Docker containers. This image will have everything required to run the application. This image will also be used to create e2e testing as well as deployment.
    - The Dockerfile: builds on top of a node-based image, creates a working directory, installs angular-cli, installs http-server, directs containers to build the application and start the webserver on port 4200

3. Deploy the application
    - Implemented in the deploy stage of the jenkins pipeline
    - builds a Docker image with application code and working environment (http-server and other needed node packages_
    - starts a container running the deployed application on the linux virtual machines port 5000

Screen Shot of the Working application
![Screenshot_2020-05-08 Cs6261project4](https://user-images.githubusercontent.com/52586211/81377388-5e21e400-90d3-11ea-8952-c1bde5ae5456.png)
