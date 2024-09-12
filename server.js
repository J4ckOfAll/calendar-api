const express = require('express');
const app = express();

//generate random integer between min and max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//generate random date between two datrs
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

//define route that handles GET requests on '/api/calendar/:userId'
app.get('/api/calendar/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);

   // Validate the userId to be a number
  if (isNaN(userId)) {
    return res.status(400).send('User ID: int');
  }

  let events = [];
  for (let i = 0; i < 10; i++) {
    let startDate = new Date();
    let endDate = new Date(startDate.getTime() + getRandomInt(1, 3) * 3600000); //no longer than 3 hours. ,
    events.push({
      eventId: getRandomInt(1, 10000),//rand between 1 and 10 000,
      start: startDate,//date
      end: endDate,//date
      userId: userId//id the user id from the api call
    });
  }
  // Send the array of events as JSON
  res.json(events);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  
});
