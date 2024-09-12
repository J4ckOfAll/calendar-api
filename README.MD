# Calendar API Project

## Running the Project Locally

1. **Clone the repository**:

   - Clone project to your local machine

2. **Install dependencies**:

   - Navigate to the project directory in your terminal and run: npm install

3. **Start the server**:

   - Run the server with: node server.js

   - This will start the local server on port 3000. Access the API at `http://localhost:3000/api/calendar/{userId}`.

## Hosting on Cloud Services

1. **Prepare your environment**:

   - Ensure the AWS CLI is installed and configured on your machine.
   - Prepare your application for deployment by ensuring that your `package.json` is set up correctly.

2. **Deploy using Elastic Beanstalk**:
   - Initialize your Elastic Beanstalk application:
     eb init -p node.js -r us-west-2 my-calendar-api
   - Create and deploy the application environment:
     eb create my-calendar-api-env
     eb deploy
