import express, { json } from 'express';
import mongoose from 'mongoose';
import router from './routes/user.js';
import authRouter from './routes/auth.js';
import * as dotenv from 'dotenv';
dotenv.config();
const url = process.env.MONGO_URI;
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use('/api', router);
app.use('/api/auth', authRouter);

async function StartApp() {
	try {
		await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
		app.listen(PORT, () => console.log(`API started on http://localhost:${PORT}`));
	} catch (e) {
		console.log(e);
	}
}

StartApp();
