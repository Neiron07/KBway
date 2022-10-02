import Users from "../models/users.js"
import bcrypt from "bcryptjs"
import { validationResult } from "express-validator"
import { generateJWT } from "../helper/token.js"
class auth {
	async registration(req, res) {
		try {
			const validation = validationResult(req)
			if (validation.length > 0) {
				res.status(400).json({ msg: "Ошибка регистрации", validation })
			}
			const { username, password } = req.body
			const user = await Users.findOne({ username })
			if (user) {
				return res.status(400).json({ msg: "username already exits" })
			}
			const hashPass = bcrypt.hashSync(password, 7)
			const CreateUser = new Users({ username, password: hashPass, roles: ["ADMIN"] })
			await CreateUser.save()
			return res.status(201).json({ "data": CreateUser })
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: "registration error" })
		}
	}

	async login(req, res) {
		try {
			const { username, password } = req.body
			const user = await Users.findOne({ username })
			if (!user) {
				return res.status(400).json({ msg: "user not found" })
			}
			const validatePassword = bcrypt.compareSync(password, user.password)
			if (!validatePassword) {
				return res.status(400).json({ msg: "password is incorrect" })
			}
			const token = generateJWT(user._id, user.roles)
			return res.json({token})

		} catch (e) {
			console.log(e)
			res.status(400).json({ message: "login error" })
		}
	}

	async getUser(req, res) {
		try {
			res.json("done")
		} catch (e) {
			console.log(e)
		}
	}

}

export default new auth()