//I have defined  x='333' in .env file in same folder as server.js
//I have to console.log the value of api key in server.js file
//console.log(process.env.RAPIDAPI_KEY);
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const api = process.env.x
// Handle POST requests to /submit-code
app.post('/submit-code', async (req, res) => {
  const code = req.body.code;
  const languageId = req.body.languageId;

  try {
    // Make a POST request to Judge0 API
    const response = await axios.post('https://judge0.p.rapidapi.com/submissions', {
      source_code: code,
      language_id: languageId, // Replace with the language ID of the code you're submitting
      stdin: '',
      expected_output: 'Hello World'
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': api,
         'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      }
    });

    const submissionId = response.data.token;

    // Use the submission ID to check the status of the submission or get the results
    // You can make additional API calls to Judge0 endpoints to retrieve the results

    res.status(200).json({ submissionId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});


// Handle GET requests to /submission/:submissionId
app.get('/submission/:submissionId', async (req, res) => {
    const { submissionId } = req.params;
  
    try {
      // Make a GET request to Judge0 API to retrieve submission results
      const response = await axios.get(`https://judge0.p.rapidapi.com/submissions/${submissionId}`, {
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': api,
                'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        }
      });
  
      const submissionResult = response.data;
  
      res.status(200).json({ submissionResult });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });




    //Admin Firebase
    const admin = require('firebase-admin');
    const serviceAccount = require('./pack.json');
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    admin
    .auth()
    .listUsers()
    .then((userRecords) => {
      console.log(userRecords);
      // The Admin SDK is authenticated and the user list was retrieved successfully
      console.log('Firebase Admin SDK is properly set up');
      console.log('Total user:', userRecords.users.length);
    })
    .catch((error) => {
      // There was an error authenticating or retrieving the user list
      console.error('Firebase Admin SDK setup error:', error);
    });
  
  
    const emails = ["code25545@gmail.com", "admin11@gmail.com"]; // Provide the emails of the users to grant admin access
  
  Promise.all(
    emails.map((email) =>
      admin
        .auth()
        .getUserByEmail(email)
        .then((userRecord) => {
          // Add the "admin" custom claim to the user
          const customClaims = {
            admin: true
          };
  
          return admin.auth().setCustomUserClaims(userRecord.uid, customClaims);
        })
        .then(() => {
          const uid = 'y6zzq071ARVhLDWzbSiV4dzIYZK2'; // Replace with the UID of the user you want to check
  
  admin
    .auth()
    .getUser(uid)
    .then((userRecord) => {
      const customClaims = userRecord.customClaims;
      if (customClaims && customClaims.admin) {
        console.log('User has admin access');
      } else {
        console.log('User does not have admin access');
      }
    })
    .catch((error) => {
      console.error('Error retrieving user:', error);
    })
        })
        .catch((error) => {
          console.error(`Error granting admin access to ${email}:`, error);
        })
    )
  )
    .then(() => {
      console.log("Admin access granted to all users");
    })
    .catch((error) => {
      console.error("Error granting admin access:", error);
    });


   

    //Firebase post request to verify user is admin or not
    app.post('/admin-status', async (req, res) => {
      const { uid } = req.body;

      try {
        const userRecord = await admin.auth().getUser(uid);
        const customClaims = userRecord.customClaims;
        if (customClaims && customClaims.admin) {
          res.status(200).json({ isAdmin: true });
        } else {
          res.status(200).json({ isAdmin: false });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
    });

    //gene



  
    // Now you can use the Firebase Admin SDK to access Firebase services
    // and perform administrative tasks, such as managing users, database operations, etc.
    
  
  
  
  
  
  // Start the server
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('process.env.RAPIDAPI_KEY', api);
  });



