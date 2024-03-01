import { useState } from 'react'

const Login = () => {

    const [state, setUsuario] = useState({
        correo: '',
        password: ''
    })

    let email = ''
    const handleSubmit = async () => {
        debugger
        await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            // body: {
            //     correo: state.correo,
            //     password: '123'
            // }
        })

    }

    const handleChange = (e: any) => {
        debugger
        email = e.target.value
        setUsuario({
            ...state,
            correo: e.target.value
        })
    }
    return (
        <>
            <div className='mb-3'>
                <label
                    className="text-gray-600 font-bold inline-block pb-2"
                    htmlFor="email"
                >
                    Correo
                </label>
                <input
                    className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                    type="email"
                    name="email"
                    placeholder="mehedi@jaman.com"
                    onChange={handleChange}
                />
            </div>
            <div className='mb-3'>
                <label
                    className="text-gray-600 font-bold inline-block pb-2"
                    htmlFor="password"
                >
                    Contraseña
                </label>
                <input
                    className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                    type="password"
                    name="password"
                    placeholder="******"
                />
            </div>
            <div className="flex flex-col mb-3">
                {/* <div className="w-full">
                    <input type="checkbox" name="remeberMe" />
                    <label htmlFor="remeberMe">Remeber me</label>
                </div> */}
                <div className="w-full">
                    <a className="font-bold text-blue-600" href="">
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>
            </div>
            <div>
                <input
                    className="bg-alibabeto-1 w-full  pt-4 pr-5 pb-4 pl-5 rounded-md text-white font-bold cursor-pointer"
                    type="submit"
                    defaultValue="Iniciar Sesión"
                    onClick={handleSubmit}
                />
            </div>
        </>

    )
}

export default Login