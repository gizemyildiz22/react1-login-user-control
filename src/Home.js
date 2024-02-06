import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Menu from "./Menu"

function Home() {

  const navigate = useNavigate();
  //Giriş kontrolü yapıyoruz ve kimliksiz kullanıcıyı login formuna yönlendiriyoruz.
  useEffect
  (
  ()=>
    {
      if (localStorage.getItem("userName")==null)
      {
        navigate("/form1");
      }
    }
    ,
    []
  );

return (
  <div>
    <Menu />
    Welcome, {localStorage.getItem("userName")}
    <h1>This is the Home page!</h1>
  </div>
);
}
export default Home;