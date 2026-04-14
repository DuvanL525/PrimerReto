import { Router } from "express";
import { body } from 'express-validator';
import { createAccount, login } from "./handlers/index.js";
import { handleInputErrors } from "./middleware/validation.js";

const router = Router();

//Routing:
router.post('/auth/register',
    body('handle')
        .notEmpty()
        .withMessage('El handle no debe estar vacio'),
    body('name')
        .notEmpty()
        .withMessage('El nombre no debe estar vacio'),
    body('email')
        .isEmail()
        .withMessage('Email no valido'),
    body('password')
        .isLength({min: 8})
        .withMessage('El handle no debe estar vacio'),
    handleInputErrors,
    createAccount);
    
router.post('/auth/login',
    body('email')
        .isEmail()
        .withMessage('Email no valido'),
    body('password')
        .notEmpty()
        .withMessage('El password no debe estar vacio'),
    handleInputErrors,
    login),
/*
router.post('/auth/register', async(req, res) => {
    //res.send('Desde register, lo envia res.send!...');
    console.log('Desde register');
    console.log(req.body);

    const user = new User(req.body);
    await user.save();

    res.send('Registro creado correctamente...');
})*/
/*
router.post('/auth/register', (req, res) => {
    res.send('Desde register, lo envia res.send!...');
    console.log('Desde register');
    console.log(req.body);
})
*/
export default router;  