'use client'
import { useState } from "react";
import { First } from "./navbarDetails/firstSection"
import '../App.css'
import { Secend } from "./navbarDetails/secendSection";
import { Last } from "./navbarDetails/lastSection";
export const Navbar = () => {
    const [country, setCountry] = useState('');

    const language = [
        '',
        'Australia',
        'Canada',
        'New Zealand',
        'United States',
        'UK & Europe',
]

    return (
        <div className="navbar">
            <div className="top_line">
                <a href="">CONTACT SALES</a>
                <a href="">TEL: 646-791-3726</a>
                <div className="top_line_secend">
                {!country && country == '' ? (<img style={{height:'25px', width:'40px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/No_flag.svg/1200px-No_flag.svg.png" alt="" />)
                :
                country == 'Australia' ? 
                (<img style={{height:'25px', width:'40px'}} src="https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg" alt="" />)
                :
                country == 'Canada' ? 
                (<img style={{height:'25px', width:'40px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/640px-Flag_of_Canada_%28Pantone%29.svg.png" alt="" />)
                :
                country == 'New Zealand' ? 
                (<img style={{height:'25px', width:'40px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1200px-Flag_of_New_Zealand.svg.png" alt="" />)
                :
                country == 'United States' ? 
                (<img style={{height:'25px', width:'40px'}} src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg" alt="" />)
                :
                country == 'UK & Europe' ? 
                (<img style={{height:'25px', width:'40px'}} src="https://img.freepik.com/free-vector/uk-flag-inside-european-union-flag_1017-3483.jpg" alt="" />)
                :''
                }
                <select onChange={e=> setCountry(e.target.value)}>
                    {language.map(e => (
                        <option value={e}>{e}</option>
                    ))}
                </select>
                </div>
            </div>
            <div className="bottom_line">
            <First/>
            <Secend/>
            <Last/>
            </div>
        </div>
    )
}