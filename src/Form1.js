import React, { useState } from 'react';
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';

function Form1() {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [result,setResult]=useState();
    const navigate = useNavigate();

    const myButtonClick = async() =>
    {
        let requestBody = {
            service_val_name:name,
            service_val_password:password
        }
        const response = await axios.post ('https://www.mockachino.com/1b9b9eca-13b9-41/login',
        requestBody);
        //localStorage.setItem("userName", '');


        //if (name==="onur" && password==="1234")
        if (response.data.result=="success")
        {
            console.log("OK");
            //Kullanıcıya kimlik verip bir alt satırda Home sayfasına yönlendiriyoruz.
            localStorage.setItem("userName", name);
            navigate("/Home");
            //setResult("Giriş Başarılı");
            // console.log ile tarayıcı içindeki incele menusu altından console bölümünde takip ve kontrol yapılabilir.
        }   
        else
        {
            console.log("NOT OK");
            setResult("Hatalı kullanıcı adı veya şifre");
        }
    }

    return(
        <>
        <form>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" onChange={e=>setName(e.target.value)} />
        <br /><br />
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" onChange={e=>setPassword(e.target.value)} />
        <br /><br />
        <input type="button" value="Gönder" onClick={()=>myButtonClick()} />
        </form>

            {result}

        </>

    );
    
}
export default Form1;