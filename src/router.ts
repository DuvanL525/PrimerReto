import { Router } from "express";
import { createAccount } from "./handlers/index.js";

const router = Router();

//Routing:
router.post('/auth/register', createAccount);
/*
router.post('/auth/register', async(req, res) => {
    //res.send('Desde register, lo envia res.send!...');
    console.log('Desde register');
    console.log(req.body);

    const user = new User(req.body);
    await user.save();

    res.send('Registro creado correctamente...');
})*/

export default router;  