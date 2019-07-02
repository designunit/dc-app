import React from 'react'
import Link from 'next/link'

import Svg from '../../assets/dc_logo_full.svg'

const Logo = () => (
    <div>
        <style jsx>{`
            div {
                width: 100%;
            }

            span { 
                display: flex;

                color: rgb(50, 50, 50);
                font-family: sans-serif;
                font-weight: bold;
                font-size: 1.75em;

                margin: 10px;
            }

            strong {
                max-width: 250px;
            }
        `}
        </style>

        <Link href="/">
            <a>
                <span>
                    <Svg />
                </span>
            </a>
        </Link>
    </div>
)

export default Logo
