import { displayMovies } from "./catalog.js";
import {clearMovies } from "./utilities.js"


export function checkLogUser(){

    const username = sessionStorage.getItem('username')
    return username
};

export function dynamicNav(){

    clearMovies()
    

};







