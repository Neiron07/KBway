import User from '../models/user.js';
import UserService from './Service/user.js';

class UserController {
    async createUser(req, res) {
        try {
            const NewUser = await UserService.create(req.body);
            res.json(NewUser);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async getAllUser(req, res) {
        try {
            const allUsers = await User.find();
            res.json(allUsers)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async getUser(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ msg: 'eror id' })
            }
            const OneUser = await UserService.getUser(id);
            res.json(OneUser)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async editUser(req, res) {
        try {
            if (!req.body.user._id) {
                return res.status(400).json({msg:'error body'})
            }
            const EditUser = await UserService.editUser(req.body);
            res.json(EditUser);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async deleteUser(req, res) {
        
        if (!req.body._id) {
            res.status(400).json({ msg: 'body error' });
        }
        const User = await UserService.deleteUser(req.body);
        res.json(User);
    }
}

export default new UserController();