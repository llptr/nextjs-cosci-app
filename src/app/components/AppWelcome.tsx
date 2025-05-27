'use client'

import { useState } from "react";

type AppWelcomeProps = {
    headTilte: string;
    isShow: boolean;
}

export default function AppWelcome({headTilte}: AppWelcomeProps){
    //const title = 'Welcome to cosci'
    const [title,setTitle] = useState('Welcome to cosci');
    const currentYear = <p>2025</p>
    const isShow = true;
    const handleClick = () => {
        //title = 'Welcome to SWU'
        setTitle('Welcome to SWU');
        //alert('Hello TypeScript')
    }

    return(
        <>
        <h1> {headTilte} </h1>
        <p>{title.toUpperCase()}</p>
        <button className=" bg-blue-700 p-3 m-3 text-white rounded-lg" onClick={handleClick}>Click this!</button>
        {currentYear}
        {
            isShow && <p>Date: 10/10/1998</p>
        }
        {
            isShow? <p>Hello Next.js</p> : <p>Hello JavaScript</p>
        }
        </>
    );
}