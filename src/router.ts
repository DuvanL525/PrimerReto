import { Router } from "express";
<<<<<<< HEAD
import { createAccount } from "./handlers/index.js";
=======
>>>>>>> 23a3bc36824558161c3e7c0c8a9323698fdefcb5

const router = Router();

//Routing:
<<<<<<< HEAD
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
=======

router.post('/auth/register', (req, res) => {
    res.send('Desde register, lo envia res.send!...');
    console.log('Desde register');
    console.log(req.body);
})
>>>>>>> 23a3bc36824558161c3e7c0c8a9323698fdefcb5

export default router;  