// this component takes the search input & renders it.

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {coinSearchAction} from '../../State/Action';
import {useNavigate} from 'react-router-dom';


function Search() {

    const navigate = useNavigate();

    const coins = useSelector(state => state.coinsData)

    const dispatch = useDispatch();

    let search = useSelector(state => state.coinSearch);

    // created result to check the coins or suggestions based on letters enters 
    let Result = coins.filter(coin => coin.name.toLowerCase().slice(0,[search.length]) === search.toLowerCase())


    // handling the inpute change
    const onChange = (e) => {
        dispatch(coinSearchAction(e.target.value))
    }

    // on entering the comlete or incomplete search bar
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            if (Result.length > 0) {
                e.preventDefault();
                navigate(`/search?q=${search}`)
            } else {
                alert('Please enter correct coin')
            }
        }
    }

    // dispatching the value of suggested coin 
    const handleClick = (e) =>{
        dispatch(coinSearchAction(e.target.value))
        navigate(`/search?q=${search}`)
    }

    return (
        <>
            <div className='border-black'>

                <div class=' ml-3  max-w-full'>
                    <div class="relative flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                        <div class="grid place-items-center h-full w-12 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                        </div>

                        <input className="placeholder-gray-500 rounded-full px-3 pl-8 py-1 outline-none transition duration-700 ease-in-out focus:shadow-outline w-[30rem]" type="text" id="search"
                            onChange={onChange}
                            placeholder="Search"
                            value={search}
                            onKeyPress={handleEnter}/>
                            
                    </div>
                </div>
            </div>
            <div>
            {search.length>0 && <ul className=' absolute left-[215px]'>
                        {Result.map(name=><li className='bg-slate-50 m-1 rounded-md'>
                                            <button className=' w-fit rounded-lg text-lg text-left p-1 shadow-md' onClick={handleClick} value={name.name.toLowerCase()}>{name.name}</button>
                                            </li>
                        )}
                    </ul>}
            </div>
        </>

    )
}

export default Search
