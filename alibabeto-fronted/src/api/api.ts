

export const API_ENDPOINTS = {
    auth: async () => {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            // body: {
            //     correo: state.correo,
            //     password: '123'
            // }
        })
        const data = response.json()
        return data
    }
}