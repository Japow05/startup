import React from 'react';


export function Login() {
    return (
        <main className="container-fluid bg-primary-subtle text-center text-primary-emphasis">
                <div>
                <h1>Welcome to Memory Madness</h1>
                <form method="get" action="play">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Email</span>
                        <input className="form-control" type="text" id="email" placeholder="your@email.com"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">🔒</span>
                        <input className="form-control" type="password" id="password" placeholder="password"/>
                    </div>
                    <button type="submit" className="btn btn-primary" id="login">Login</button>
                    <button type="submit" className="btn btn-primary" id="accountCreate">Create</button>

                    <br/>

                    <button type="button" id="googleApiButton" className="btn btn-secondary">Log in Via Google</button>

                    <br/>
                    <a href="play">
                        <button type="button" className="btn btn-secondary">Play Anonymously</button>
                    </a>
                </form>
            </div>
        </main>
    )
}