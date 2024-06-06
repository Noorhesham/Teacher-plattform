'use client'
import { useEffect, useState } from 'react';

export function useLocalStorageState(initialState:boolean, key:string) {

    //i make a state initialize it to a function that gets a certain key from storage 
    //if it exists it returns it as a json if not we leave the local state 
    //after we get the value we useeffect to set it to the storage  stringifying this value 

    const [value, setValue] = useState(function () {

        //if there is a key already stored by user of teh isdark mode we get it set it to state 
        //if not we get the initial state the we passed and in this case it is the windows default 

        const storedValue = global?.localStorage?.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialState;
      });
    
      useEffect(
        function () {
          localStorage.setItem(key, JSON.stringify(value));
        },
        [value, key]
      );
    
      return [value, setValue];
}
