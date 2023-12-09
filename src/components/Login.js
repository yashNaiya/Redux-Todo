import React, { useState } from 'react'
import api from '../Api'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { add } from '../store/loginSlice';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setinput] = useState({
    email:"",
    password:""
  })
  const handleChange = (e)=>{
    setinput(prevState=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }
  const handleSubmit = ()=>{
    api.post('/login',input)
    .then(res=>{
      if(res.status===200) {
        const user = res.data.user;
        dispatch(add(user))
        navigate('/')
      }
    })
    .catch(err=>{

    })
  }
  return (
    <div className='row-md-9'>
      <section class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid" alt=""/>
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button type="button" class="btn btn-primary btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" class="btn btn-primary btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button type="button" class="btn btn-primary btn-floating mx-1">
                    <i class="fab fa-linkedin-in"></i>
                  </button>
                </div>

                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

               
                <div class="form-outline mb-4">
                  <input name='email' value={input.email} onChange={handleChange} type="email" id="form3Example3" class="form-control form-control-lg"
                    placeholder="Enter a valid email address" />
                </div>

                
                <div class="form-outline mb-3">
                  <input name='password' value={input.password} onChange={handleChange} type="password" id="form3Example4" class="form-control form-control-lg"
                    placeholder="Enter password" />
                </div>

                <div class="d-flex justify-content-between align-items-center">
                 
                  <div class="form-check mb-0">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label class="form-check-label" for="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" class="text-body">Forgot password?</a>
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                  <button onClick={handleSubmit} type="button" class="btn btn-primary btn-lg"
                    style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Login</button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register"
                    class="link-danger">Register</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
