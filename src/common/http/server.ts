import express from 'express';

import v1Router from './router';

function createHttpServer() {
  const application = express();

  application.use(express.json());
  application.use('/api/v1', v1Router);

  application.listen(8000, () => {
    console.log('Application running on port 8000');
  });
}

export default createHttpServer;
