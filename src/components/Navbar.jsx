import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/"> Take me Home</Link>
                </li>
            </ul>
        </div>
    )
}