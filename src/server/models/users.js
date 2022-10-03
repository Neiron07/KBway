import mongoose from 'mongoose';

const Users = new mongoose.Schema({
	username: {type: String, unique: true},
	password: {type: String, required: true},
	roles: [{type: String, ref: 'Role'}]
});

export default mongoose.model('Users', Users);