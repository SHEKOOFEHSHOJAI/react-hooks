import React from 'react';
import '../component/Button.css';
import {Link} from 'react-router-dom';
const STYLES=['btn-primary','btn-outline']

const Button=()=>({children,onClick,buttonStyle,buttonSize})=>{


    const checkButtonStyle=STYLES.includes(buttonStyle)?buttonStyle:STYLES[0]

    const checkButtonSize=SIZES.includes(buttonSize)?buttonSize:SIZES[0]


return(
    <Link to='./sing-up' className='btn-mobile'>
        <button>
            {children}
        </button>
    </Link>
)

}

// https://www.youtube.com/watch?v=I2UBjN5ER4s