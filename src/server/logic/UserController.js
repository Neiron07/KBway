import User from '../models/user.js';

class UserController {
    async create(req, res) {
        try {
            const date = new Date().toUTCString();
            const { id, username, first_name } = req.body;
            const NewUser = await User.create({ id, username, first_name , date});
            res.status(200).json(NewUser);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllUser(req, res) {
        try {
            const allUsers = await User.find();
            res.status(200).json(allUsers);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getUser(req, res) {
        try {
            const {id} = req.params;
            const OneUser = await User.findById(id);
            res.status(200).json(OneUser);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new UserController();