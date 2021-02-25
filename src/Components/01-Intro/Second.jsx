'use strict';

const Second = () => {

    // how to incorporate HTML and JS in one - AKA JSX
    const name = `Manny`;
    const date = new Date(); 
    const firstName = `Emmanuel`; 
    const lastName = `Lomax`;

    return(
        <>
            <h1>Hello friends, nice to see you!</h1>
            <p>{name}</p>
            <p>This component was created on: {date.toLocaleDateString()}</p>
            <p>{firstName} {lastName}</p>
            <p>{ `${firstName} ${lastName}` }</p>
            <p> The current time is: {date.toLocaleTimeString()}</p>
        </>
    );

}

export default Second; 