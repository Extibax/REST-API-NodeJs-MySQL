import { Router } from "express";

import users_model from '../models/users';

const router = Router();

router.get('/', async (req, res) => {
    res.json(await users_model.getUsers());
});

router.post('/', async (req, res) => {
    const new_user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    res.json(await users_model.insertUser(new_user));

});

export default router;