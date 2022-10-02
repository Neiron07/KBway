import { Router } from "express"
import UserController from "../logic/UserController.js"

const router = new Router()

router.get("/user", UserController.getAllUser)
router.post("/user", UserController.createUser)
router.get("/user/:id", UserController.getUser)
router.put("/user", UserController.editUser)
router.delete("/user", UserController.deleteUser)

export default router