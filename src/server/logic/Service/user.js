import User from '../../models/user.js';

class UserService {
    async create(user) {
        const date = new Date().toUTCString();
        const { id, username, first_name } = user;
        const result = await User.create({ id, username, first_name, date });
        return result;
    }

    async getUser(id) {
        if (!id) {
            throw new Error({ msg: 'eror id' })
        }
        const OneUser = await User.findById(id);
        return OneUser;

    }

    async editUser(user) {
        const EditUser = await User.findByIdAndUpdate(user._id, user, { new: true });
        return EditUser;
    }

    async deleteUser(user) {
        const DeletedUser = await User.findByIdAndDelete(user._id);
        return DeletedUser;
        
    }
}

export default new UserService();