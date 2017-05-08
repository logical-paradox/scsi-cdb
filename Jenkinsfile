node {

    stage('Clone') {
        git url: 'ssh://jenkins@git.237.egregious.org.uk:29418/scsi-cdb'
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

