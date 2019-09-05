import express from 'express';
import bodyParse from 'body-parser';
import config from './config/default';
import userRoute from './routes/userroutes';
import adminRoute from './routes/adminroute';
import mentorsRoute from './routes/mentorroute';
import sessionRoute from './routes/sessionroute';

const app = express();
app.use(bodyParse.json());
// custom path: for signin and signup endpoints

app.use('/api/v1/auth', userRoute);
app.use('/api/v1/admins', adminRoute);
app.use('/api/v1/mentors', mentorsRoute);
app.use('/api/v1/sessions', sessionRoute);
app.use('/', (req, res) => {
  res.status(200).send({
    status: 200,
    message: 'Welcome to Our Mentors Portal',
  });
});

const { port } = config;
app.listen(port, () => console.log(`listening on port ${port}...`));

export default app;
