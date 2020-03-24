import React from 'react';

export function Login(prop) {
    const image = 'https://www.pitang.com/documents/20142/38209/cards.png/84f790e4-c050-85ec-adbb-282ff41506b6?t=1577214947371'
    const [fillLogin, setFillLogin] = React.useState(false); //O primeiro é a variável, e o segundo é a alteção dessa variável
    const [error, setError] = React.useState(false);
    // false, '', null, undefined, 0 == false
    const [form, setForm] = React.useState({
        login: '',
        password: ''
    });
    const trySubmit = (e) => {
        e.preventDefault();
        if (!form.login) {
            setError(true);
            return;
        } else if (!form.password) {
            setError(true);
            return;
        }
        setError(false);
        if (prop.onLogin)
            prop.onLogin(form);
    };
    const updateComponent = () => {
        setForm({ login: form.login, password: form.password });
    }
    const updateLogin = (e) => {
        form.login = e.target.value;
        updateComponent();
    }
    const updatePass = (e) => {
        form.password = e.target.value;
        updateComponent();
    }

    return (
        <div>
            <div><img src={image} width="75%" /></div>
            <h2>Sign In</h2>
            <form onSubmit={trySubmit}>
                <div className="form-group">
                    <label>Login</label>
                    <input type="text" name="login" value={form.login} onChange={updateLogin} className={"form-control" + (error ? ' is-invalid' : '')} />
                    <div className="invalid-feedback">You must fill the login field.</div>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={form.password} onChange={updatePass} name="password" className={"form-control" + (error ? ' is-invalid' : '')} />
                    <div className="invalid-feedback">
                        You must fill the password field.
                </div>
                </div>
                <div className="form-check">
                    <input className="form-check-input" id="remember" type="checkbox" />
                    <label className="form-check-label" htmlFor="remember">
                        Remember me!
                </label>
                </div>
                <div className="form-group mt-2">
                    <button className="btn btn-success w-100">Sign In</button>
                </div>
            </form>
            <div className="form-group">
                <button type="button" onClick={prop.onRegister} className="btn btn-outline-secondary w-100">Sign Up</button>
            </div>
        </div>
    );
}