export function signIn() {
    return new Promise(resolve => {
        resolve({
            token: 'asuduwh1289hd1972gd29',
            user: {
                name: 'Davi',
                email: 'email@davi.com'
            }
        })
    })
}