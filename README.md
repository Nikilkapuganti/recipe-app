Run in local 


Clone the source code
Install dependencies by using npm install
To run server npm run dev



Deployment
AWS App Runner Deployment

Create an App Runner Service Go to the AWS Management Console and navigate to AWS App Runner. Create a new service by selecting your source repository and configuring build settings.

Configure Environment Variables Set essential environment variables in the App Runner settings. Make sure to include the MongoDB Atlas connection URL as an environmental variable.

Define Service Settings Specify service settings such as the number of instances, CPU, and memory according to your application's requirements.

Connect MongoDB Atlas URL and Add to Environmental Variables Retrieve the MongoDB Atlas connection URL. Set up an environmental variable in the App Runner settings to store the MongoDB Atlas URL.

Deploy Initiate the deployment process from the AWS App Runner console. Monitor the deployment status and ensure a successful deployment.
