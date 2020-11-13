import 'dotenv/config';

import app from './src/app';

app.listen(process.env.PORT || 3333, () => console.log('application started!'));
