import express from 'express';

const application = express();

application.listen(8000, () => {
  console.log('Application running on port 8000');
});
