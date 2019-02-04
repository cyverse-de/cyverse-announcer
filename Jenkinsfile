timestamps {
    stage('npm-build') {
        agent {
            docker {
                image 'node:10'
            }
        }

        steps {
            echo "Branch is ${env.BRANCH_NAME}..."

            withNPM(npmrcConfig: 'npmrc') {
                echo "Performing npm build..."
                sh 'npm install'
                sh 'npm publish'
            }
        }
    }
}