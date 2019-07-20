
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'ng test'
            }
        }
        stage('e2e') {
            steps {
                sh 'docker build -t cs6261project4:testimage .'
                sh 'docker run -d -v ${PWD}:/app -p 4200:4200 --name testcontainer cs6261project4:testimage'
                sh 'npm install protractor --save-dev'
                sh './node_modules/protractor/bin/webdriver-manager update'
                sh 'ng e2e --devServerTarget='
                
            }
            post {
                always {
                    sh 'docker rmi cs6261project4:testimage -f || true'
                    sh 'docker rm testcontainer -f || true'
                }
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker build -t cs6261project4:productimage .'
                sh 'docker run -d -v ${PWD}:/app -p 5000:4200 --name productcontainer cs6261project4:productimage'
            }
        }
    }
    
}


