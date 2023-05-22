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





// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('process.env.RAPIDAPI_KEY', api);
});
