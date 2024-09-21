
import { useForm } from 'react-hook-form';
import { useRef } from "react";

export default function Login() {

    const user = {
        login : "",
        password:""
    }
    const onSubmit = (user)=>{
        //e.preventDefault();
        //user.password = passRef.current.value;
        console.log(`Login data :`,user);
    } 

      /*   

    ////1 - using useRef();
    let passRef = useRef();  
    
    // 2 - using OnChange event
     const emailChange = (e)=>
    {       
        //console.log(e.target.value);
        user.login = e.target.value;
    }   
     
    */

    //3 - use useForm() React Hook
    const {
        register,
        handleSubmit,
        formState: { errors },
        //validatiors
      } = useForm();

     

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <label>Email</label>
                    {/* <input onChange={emailChange} type="text" name="email" /> */}
                    <input {...register("email")} type="text" name="email" />
                </div>
                <div>
                    <label>Password</label>
                    {/* <input ref={passRef} type="password" name="password" /> */}
                    <input {...register("password")} type="password" name="password" />
                </div>
                <div>
                    <label>Age</label>
                    {/* <input ref={passRef} type="password" name="password" /> */}
                    <input {...register("age")} type="number" name="age" />
                </div>
                <div>
                   
                    <button  type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}