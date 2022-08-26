import express, { json } from 'express';
import mongoose from 'mongoose'
import router from './routes/user.js';

const url = 'mongodb+srv://Neiron01:Vjn6mLwZ4IE7x2LS@tg-bot.ivatidg.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use('/api', router);


async function StartApp() {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        app.listen(PORT, () => console.log(`API started on http://localhost:${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

StartApp();
