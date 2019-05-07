import {
    Router
} from "express";

import users_model from '../models/users';

const router = Router();

router.get('/', async (req, res) => {
    const result = await users_model.getUsers();
    console.log(result)
    res.json(result);
});

router.post('/', async (req, res) => {
    const new_user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    const result = await users_model.insertUser(new_user);
    console.log(result)
    res.json(result);

});

router.put('/:id', async (req, res) => {
    const update_user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    const result = await users_model.updateUser(update_user, req.params.id);
    console.log(result)
    res.json(result);

});

router.delete('/:id', async (req, res) => {
    const result = await users_model.deleteUser(req.params.id);
    console.log(result);
    res.json(result);
})

export default router;