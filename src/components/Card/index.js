import React from 'react';

function Card(prop) {
    const { experiencia } = prop.resposta;

    return (
        <div class="container">
            <div class="card">
                <div class="content">
                    <h2>01</h2>
                    <h3>Card one</h3>
                    <p>blbalbdmewidnmewifref dniuefnew rdefnberujifbfc fjernfujrenfr</p>
                    <a href="#">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default Card;