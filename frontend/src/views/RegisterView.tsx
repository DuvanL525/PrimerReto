import { Link } from "react-router-dom";

export default function RegisterView(){
    return(
        <>
            <h1 className='text-4x1' text-white font-bold>Iniciar Sesión</h1>
            <nav className='mt-10'>
                <Link 
                    className="text-center text-white text-lg block"
                    to = "/auth/login">Ya tienes cuenta? inicia aqui...</Link>
            </nav>
        </>
    )
}