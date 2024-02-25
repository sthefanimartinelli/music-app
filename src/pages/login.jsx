import LoginForm from "@/components/LoginForm";
import UserContext from "@/context/Usercontext";
import React, { useEffect, useState } from "react";
import { createUser } from '../services/userAPI';
import { useRouter } from "next/router";

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [amIlogged, setAmIlogged] = useState(false);

  const minInput = 3;

  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    createUser({ name, email }).then(() => {
      setLoading(false);
      setAmIlogged(true);
    });
  };

  useEffect(() => {
    if (amIlogged) {
      router.push("/search");
    }
  }, [amIlogged]);

  return (
    <UserContext.Provider value={{}}>
      <div>
        <LoginForm 
        onSubmit={handleSubmit}
        onChange={handleChange}
        name={name}
        email={email}
        minInput={minInput}
        loading={loading}
        />
      </div>
    </UserContext.Provider>
  );
}
