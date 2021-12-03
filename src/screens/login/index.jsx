import React from 'react'
import { signIn } from '../../services/auth'


export default function index() {

    function handleSignIn() {
        signIn().then(response => {
            console.log(response)
        })
    }

    return (
        <div style={{ margin: '200px', justifyContent: 'center' }}>
            <button style={{ width: 100, height: 50 }} onClick={handleSignIn}>
                Login
            </button>
        </div>
    )
}
