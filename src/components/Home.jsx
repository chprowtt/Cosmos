import React from "react";
import { Link } from "react-router-dom";



export default function Home() {
    return (
        <div>
            <Link 
            className="link" to="/nasaphoto">See into the stars!</Link>
            <p classname="Para">Quis lobortis massa vel morbi ac mi, eu senectus. A nullam vestibulum sed facilisi et nulla id bibendum elementum. Lectus dui sollicitudin id elementum aliquam placerat pretium ornare turpis.</p>
        </div>
    )
}