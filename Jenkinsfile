node {

    stage('Clone') {
        checkout scm
    }

    withEnv(['PATH+RBENV=$HOME/.rbenv/bin:$HOME/.rbenv/shims']) {
        stage('Build') {
            sh 'npm install'
        }

        stage('Test') {
            sh 'npm run lint'
            sh 'npm test'
        }

        stage('Deploy') {
            echo 'Deploy would happen here'
        }
    }
}

