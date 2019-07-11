
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
                sh 'docker build -t cs6261project4:testimage'
                sh 'docker run -d -v ${PWD}:/app -p 4200:4200 --name testcontainer cs6261project4:testimage'
                sh './node_modules/protractor/bin/webdriver-manager update'
                sh 'ng e2e --devServerTarget='
            }
        }
        stage('Deploy') {
            steps {
                echo 'Not yet implemented'
            }
        }
    }
    post {
      always {
        sh 'docker rm testcontainer || true'
      }
    }
}


