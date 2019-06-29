import React from 'react'
import Link from 'next/link'

const Logo = () => (
    <div>
        <style jsx>{`
            div {
                width: 100%;
            }

            span { 
                display: flex;

                border: 7px solid rgb(50, 50, 50);

                color: rgb(50, 50, 50);
                font-family: sans-serif;
                font-weight: bold;
                font-size: 1.75em;

                margin: 10px;
                padding: 10px 15px;
            }

            strong {
                max-width: 250px;
            }
        `}
        </style>

        <Link href="/">
            <a>
                <span>
                    <strong>DESIGN::CODE</strong>
                </span>
            </a>
        </Link>
    </div>
)

export default Logo
