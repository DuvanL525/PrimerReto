import { Request, Response} from "express";
import { validationResult } from "express-validator";
import slug from 'slug';
import User from "../models/User.js";
import { hashPassword, checkPassword } from "../utils/auth.js";

export const createAccount = async(req : Request, res : Response) => {
    

    const { email, password } = req.body;

    const UserExists = await User.findOne({email});

    if( UserExists ) {
        const error = new Error('El email esta en uso');
        return res.status(409).json({error: error.message});
    }

    const handle = slug(req.body.handle,'');
    const handleExists = await User.findOne({handle});

    if(handleExists){
        const error = new Error('El nombre de usuario no esta disponible...')
        return res.status(409).json({error: error.message})
    }

    console.log('Desde register....');
    console.log(req.body);

    const user = new User(req.body);
    user.password = await hashPassword(password);
    user.handle = handle;

    await user.save();

    res.status(201).send('Registro creado correctamente...');
    //res.send('Registro creado correctamente');
    
}
    export const login = async (req: Request, res: Response) => {
        //Gestionado errores:
        let errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        const { email, password} = req.body;

        // Check User Exist
        const user = await User.findOne({email});

        if(!user){
            const error = new Error('El usuario no existe')
            return res.status(404).json({ error: error.message})
        }

        //Check Correct Password
        const isPasswordCorrect = await checkPassword(password, user.password);
        console.log(isPasswordCorrect);
        if(!isPasswordCorrect){
            const error = new Error('Contraseña incorrecta')
            return res.status(401).json({ error: error.message})
        }

        res.json({"msg" : "La validación es correcta"});
    }

    