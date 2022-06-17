import React, { useState } from "react";
import "./signin.css";
const SignIn = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [loading, setLoading] = useState(false);
    return (
      <article>
        <div className="login__container">
          <h2>SignIn</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                type="email"
                id="email"
                required
                placeholder="enter an email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                type="password"
                id="password"
                required
                            placeholder="enter password"
                            onChange={e=>setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <button>SignIn</button>
            </div>
          </form>
        </div>
      </article>
    );
}
    export default SignIn;