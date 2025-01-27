import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../../Store/Slice/StoreSlice'
import {toast} from 'react-toastify'

function Login({senduser, isactive, setisactive}) {
    const dispatch = useDispatch()
    const getAccount = async(e) => {
        e.preventDefault()
        let random = Math.floor(Math.random() *100)+1
        // console.log(random)
         try {
            const user = await fetch(`https://fakestoreapi.in/api/users/${random}`)
            const getUser = await user.json()
            // setgetuser(getUser.user)
            // senduser = getuser
            setisactive(false)
            if(getUser.user) {
                toast.success('Log In Successful !', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
            senduser(getUser.user)
            dispatch(setUser(getUser.user))
         } catch (error) {
            console.log(error);
         }
    }


    const handleOutsideClick = (event) => {
        if (!event.target.closest('.news')) {
          setisactive(false);
        }
      };

      
      useEffect(()=>{
        const doc = document.querySelector('.isdoc')
        doc.addEventListener('click', handleOutsideClick);
    return () => {
      doc.removeEventListener('click', handleOutsideClick);
    };
    },[])


  return (
    <div className={`w-screen h-screen fixed top-0 left-0 z-[999] ${isactive ? 'flex' : 'hidden'} items-center justify-center isdoc`}>
            <div className="border-2 rounded-md news">      
                <div className="bg-white rounded-lg shadow-2xl p-6 w-96">
                    <h2 className="text-2xl font-bold text-gray-600 mb-4">Login <button className='underline' onClick={getAccount}>Get Account</button></h2>
                    <form>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-2" htmlFor="email">Email</label>
                        <input className="w-full p-2 outline-none text-sm text-gray-700 rounded-lg focus:ring-2 focus:ring-gray-600" type="email" id="email" placeholder="example@example.com" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-2" htmlFor="password">Password</label>
                        <input className="w-full p-2 outline-none text-sm text-gray-700 rounded-lg focus:ring-2 focus:ring-gray-600" type="password" id="password" placeholder="password" />
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" type="submit">Login</button>
                    </form>
                </div>
            </div>
    </div>  
  )
}

export default Login