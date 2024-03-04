# Awesome Application

Welcome to the Awesome Application! This guide will help you set up and run the application on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- Node.js (https://nodejs.org/)
- npm (Node Package Manager)
- mongodb

## Getting Started

Follow these steps to run the application locally:

1. **Clone the Source Code:**
   `
   git clone https://github.com/Nikilkapuganti/recipe-app.git

2. **Navigate to the Project Directory:**
   `
   cd awesome-application

3. **Install Dependencies:**
   `
    npm install

4 **Set Up Environment Variables::**
   `
PORT=3010
CORS_DOMAIN = http://localhost:3000
DATABASE_URL = mongodb://localhost:27017/

4 **Run the Application:::**
npm run dev
   



Deployment
AWS App Runner Deployment

Create an App Runner Service Go to the AWS Management Console and navigate to AWS App Runner. Create a new service by selecting your source repository and configuring build settings.

Configure Environment Variables Set essential environment variables in the App Runner settings. Make sure to include the MongoDB Atlas connection URL as an environmental variable.

Define Service Settings Specify service settings such as the number of instances, CPU, and memory according to your application's requirements.

Connect MongoDB Atlas URL and Add to Environmental Variables Retrieve the MongoDB Atlas connection URL. Set up an environmental variable in the App Runner settings to store the MongoDB Atlas URL.

Deploy Initiate the deployment process from the AWS App Runner console. Monitor the deployment status and ensure a successful deployment.
