import { Router } from "express";
import { body } from "express-validator";
import { createAccount, login } from "./handlers/index.js";
import { handleInputErrors } from "./middleware/validation.js";

const router = Router();

router.post('/auth/register',
    body('handle')
        .notEmpty()
        .withMessage('El handle no debe estar vacio!...'),
    body('name')
        .notEmpty()
        .withMessage('El nombre no debe estar vacio!...'),
    body('email')
        .isEmail()
        .withMessage('email noes valido!...'),
    body('password')
        .isLength({min: 8})
        .withMessage('El password debe ser minimo de 8 caracteres!...'),
    handleInputErrors,
    createAccount);

router.post('/auth/login',
    body('email')
        .isEmail()
        .withMessage('email no es valido!...'),
    body('password')
        .notEmpty()
        .withMessage('El password no debe ser vacio!...'),
    handleInputErrors,
    login);

export default router;  