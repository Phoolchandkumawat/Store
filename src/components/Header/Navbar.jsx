import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import MediaNavbar from '../Body/MediaNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa7, faBell, faCartShopping, faHome, faLineChart, faList, faListAlt, faMagnifyingGlass, faPanorama, faPerson, faUser } from '@fortawesome/free-solid-svg-icons'
import Login from '../Body/Login';
import Signup from '../Body/Signup';
import { useEffect } from 'react';
import Notification from '../popnotification/Notification';
import { useDispatch, useSelector } from 'react-redux';


function Navbar() {
  const [search, setSearch] = useState([])
  const [showsearch, setShowSearch] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [togglemenu, setToggleMenu] = useState(false)
  const [logactive, setlogactive] = useState(false)
  const [shownotification, setShownotification] = useState(false)
  const [isuser, setIsuser] = useState([])
  const [toggle, setToggle] = useState(2)
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let timeoutId; 
  const searchData = (e) => {
    setSearchText(e.target.value)
    clearTimeout(timeoutId);
      if(e.target.value == ''){
        setSearch([])
        setShowSearch(false)

      }else{
        timeoutId = setTimeout(async() => {
          const api = 'https://fakestoreapi.in/api/products?limit=150'
          try {
            const res = await fetch(api)
            const data = await res.json()
            if(data){
                setShowSearch(true)
                const products = data.products
                const filteredData = products.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
                setSearch(filteredData)
                console.log(filteredData)
            }
          } catch (error) {
            
          }
            // console.log(e.target.value); 
        }, 1000); 
      }
        
    };

  const toProduct = (e)=>{
    // console.log(e)
    navigate(`/product/${e}`)
    setShowSearch(false)
    setSearchText('')
  }

  const toToggle =(index)=>{
    setToggle(index)
    if(index==0){
      
    }else if(index ==1){

    } else if(index ==2){
      navigate('/')
    } else if(index ==3){
      navigate('/product/cart')
    }
  }

  useEffect(()=>{
    window.addEventListener('resize',()=>{
      console.log(window.innerWidth)
      if(window.innerWidth >640){
        setToggle(2)
      }
    })
  },[])




  return (
    <nav className='w-full h-16 border-b-2 fixed z-[909] bg-white'>
      <div className="fixed bottom-1 rounded-md left-0 w-full sm:hidden flex h-14 z-[999] ">
        <div className="bg-white border-2 shadow-2xl h-full w-full  ">
          <div className="icons flex items-center justify-between w-4/5 m-auto h-full text-2xl">
            {[faList,faMagnifyingGlass,faHome,faCartShopping,faUser].map((icons,index)=>{
              return <FontAwesomeIcon icon={icons} onClick={()=> toToggle(index)} className={`${toggle==index ? "relative bottom-3 bg-black text-white" :"hover:border-black border-[1px]"}  p-2 rounded-full h-7 w-7 cursor-pointer `}/>
            })}
          </div>
        </div>
      </div>
      <div className={`${toggle ==1 ? 'flex w-full h-full' : "hidden"}`}>
            <div className="search w-4/5 m-auto h-full items-center justify-center flex relative">
                <input type="text" onChange={searchData} value={searchText} className='border-black border w-full py-2 pr-2 pl-10  outline-none rounded-md' />
                  <FontAwesomeIcon className='absolute left-3' icon={faMagnifyingGlass} />
              <div className= {`absolute top-14 p-2 bg-white border-2 w-5/6 h-max overflow-hidden z-[999] ${showsearch ? 'block' : 'hidden' }`}>
                <h2 className='px-2 py-1 text-gray-600'>Search Result</h2>
                <ul className='grid grid-cols-1 gap-3'>
                  {search && search.map((search,index)=>{
                    if(index < 6){
                      return <li onClick={()=>toProduct(search.id)} key={search.id} className='text-center rounded-lg m-auto p-1 text-ellipsis hover:bg-gray-200 bg-gray-100 text-nowrap w-4/5 overflow-hidden cursor-pointer'>{search.title}</li>
                    }
                  })}
                </ul>
              </div>
            </div>
      </div>
        <Notification/>
        <div className={`justify-between items-center w-4/5 m-auto h-full ${toggle == 1 ? "hidden": "flex"}`}>
            <div className="logo w-1/4 text-red-500">Web Store</div>
            <div className="search w-2/4 h-full items-center justify-center hidden md:flex relative">
                <input type="text" onChange={searchData} value={searchText} className='border-black border w-full h-3/5 py-2 pr-2 pl-10  outline-none rounded-md' />
                  <FontAwesomeIcon className='absolute left-3' icon={faMagnifyingGlass} />
              <div className= {`absolute top-14 p-2 bg-white border-2 w-5/6 h-max overflow-hidden z-[999] ${showsearch ? 'block' : 'hidden' }`}>
                <h2 className='px-2 py-1 text-gray-600'>Search Result</h2>
                <ul className='grid grid-cols-1 gap-3'>
                  {search && search.map((search,index)=>{
                    if(index < 6){
                      return <li onClick={()=>toProduct(search.id)} key={search.id} className='text-center rounded-lg m-auto p-1 text-ellipsis hover:bg-gray-200 bg-gray-100 text-nowrap w-4/5 overflow-hidden cursor-pointer'>{search.title}</li>
                    }
                  })}
                </ul>
              </div>
            </div>
            <div className='icons flex justify-between md:w-3/6 lg:w-2/6 xl:w-1/4 ml-5'>
                  <div className="icons hidden gap-5 text-[20px] md:flex">
                    <div className='relative'>
                      <FontAwesomeIcon onClick={()=> setShownotification(!shownotification)} icon={faBell} className='cursor-pointer hover:text-red-500 relative'/>
                      <span className= {`${notification.length>0 ? "flex": 'hidden'} px-1 w-2 h-2 bg-gray-400 rounded-full absolute top-0 -right-1 text-[12px]`}></span>
                      <ul className={`${shownotification ? 'grid grid-cols-1': 'hidden'} p-2 absolute gap-2 top-10 rounded-md right-0 w-64 max-h-80 h-max bg-white border-2 shadow-2xl`}>
                        {notification && notification.map((notification)=>{
                          return <li key={notification.id} className='bg-gray-400 text-white h-max p-1 rounded-md text-[16px]'>{notification.text}</li>
                        })}
                        <span className={`${notification.length>0 ? "hidden":"flex text-[16px]"}`}>No Notifications</span>
                      </ul> 
                    </div>
                    <div className='relative'>
                      <FontAwesomeIcon onClick={(e)=> {e.preventDefault(); return navigate(`/product/cart`) }} icon={faCartShopping} className='cursor-pointer hover:text-red-500 relative'/>
                      <span className='px-1 h-2 w-2 bg-red-400 rounded-full absolute top-0 -right-1 text-[12px]'></span>
                    </div>
                  </div>
                      {/* <div className="fle x md:hidden cursor-pointer" onClick={()=>{setToggleMenu(!togglemenu)}}>Menu</div> */}
                    <div className={`${isuser.length !== 0 ? "hidden":"flex"} flex gap-5`}>
                      <button onClick={()=>setlogactive(!logactive)} className='bg-gray-400 py-1 px-2 hover:bg-gray-500 rounded-lg'>Log in</button>
                      <button className='bg-gray-400 py-1 px-2 hover:bg-gray-500 rounded-lg'>Sing up</button>
                    </div>
                    <div className= {`${isuser.length !== 0 ? "flex":"hidden"} items-center justify-center gap-2`}>
                        <div className="img-profile w-8 h-8 rounded-full bg-green-300"></div>
                        <span>{isuser.length !== 0 && isuser.name["firstname"] +" "+ isuser.name["lastname"]}</span>
                    </div>
            </div>
                    <Login  senduser ={setIsuser} isactive={logactive} setisactive = {setlogactive}/>
        </div>
        {/* <MediaNavbar istoggle={togglemenu}/> */}
    </nav>

  )
}

export default Navbar