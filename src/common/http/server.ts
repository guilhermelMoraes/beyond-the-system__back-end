import express from 'express';

import router from './router';

function createHttpServer() {
  const application = express();

  application.use('/api/v1', router);

  application.listen(8000, () => {
    console.log('Application running on port 8000');
  });
}

export default createHttpServer;
