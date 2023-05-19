import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './dropdown.css'

function Dropdown() {
    const [open, setOpen] = useState("")

    const toggleOpen = () => {
        setOpen(!open)
    }
    return (
        <div>
            <button className='no-button' onClick={toggleOpen}>Menu</button>
            {open && 
            <div className='dropdown'>
                <ul className='dropdown-list'>
                    <li className='dropdisn-list-item'>
                        <Link>
                            thing1
                        </Link>
                    </li>
                    <li className='dropdisn-list-item'>
                        <Link>
                            thing2
                        </Link>
                    </li>
                    <li className='dropdisn-list-item'>
                        <Link>
                            thing3
                        </Link>
                    </li>
                </ul>
            </div>
            }
        </div>
    );
}

export default Dropdown;
