//     import { useEffect, useRef, useState } from "react"
// import music from "../music/music.mp3"

//     export const MusicPlay = ()=>{

//         const [playMusic,setPlayMusic]= useState(true)
//         const MusicRef = useRef()


//         useEffect(()=>{
//             if(playMusic){
//                 play()
//             }else{
//                 stop()
//             }
//         },[])

//         useEffect(()=>{
//             if(playMusic){
//                 play()
//             }else{
//                 stop()
//             }
//         },[playMusic])

//         const play= () =>{
//             MusicRef.current.play();
//         }

//         const stop = () =>{
//             MusicRef.current.pause();
//         }

//         return <>
//             <audio ref={MusicRef} src={music}/>
//             <button onClick={()=>setPlayMusic(!playMusic)}>{playMusic ? "stop" : "play"}</button>
//         </>
        
// }