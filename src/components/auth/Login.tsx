import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export default function Login() {
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="password" />
        <button type="submit">LogIn</button>
        <Link
          to="/signup"
          className="text-sm text-purple-400 hover:text-purple-300"
        >
          Don't have an account? Sign up
        </Link>
      </form>
    </div>
  );
};