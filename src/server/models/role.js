import mongoose from 'mongoose';

const Role = new mongoose.Schema({
	username: {type: String, default: 'user'},
});

export default mongoose.model('Role', Role);