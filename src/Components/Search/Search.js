import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { coinSearchAction } from '../../State/Action';
import {useNavigate} from 'react-router-dom';


function Search() {

    const navigate = useNavigate();

    const coins = useSelector(state=>state.coinsData)
    
    const dispatch = useDispatch();

    const search = useSelector(state=>state.coinSearch);

  const Result = coins.filter(coin=>coin.name.toLowerCase()===search.toLowerCase())

   
    const onChange = (e)=>{    
        dispatch(coinSearchAction(e.target.value))
    }

    const handleEnter =(e)=>{
        if(e.key==='Enter'){
            if(Result.length>0){
                e.preventDefault();
                navigate(`/search?q=${search}`)
            }else{
                alert('Please enter correct coin')
            }  
        }
    }
    
      return (
    <div className='border-black'>

        <div class=' mx-3 max-w-full'>
    <div class="relative flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        className="placeholder-gray-500 rounded-full px-3 pl-8 py-1 outline-none transition duration-700 ease-in-out focus:shadow-outline w-[30rem]"
        type="text"
        id="search"
        onChange={onChange}
        value={search}
        placeholder="Search" 
        onKeyPress={handleEnter}
        />

    </div>
</div>

    </div>

  )
}

export default Search