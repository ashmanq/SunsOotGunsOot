import React from 'react';
interface Props {
    temperature: number | null;
}

export default function JumperOrGunsOot({ temperature }: Props) {

    const icon = {
        height: 200,
        width: 200
    }

    return (
        <div>
            {temperature ? (
                (temperature < 15) ? (<><img style={icon} alt="sweater" src="/img/sweater-svgrepo-com.svg" /><p>Wear a Jumper!</p></>) : 
                (<><img alt="get the gunsout" style={icon} src="/img/muscle-svgrepo-com.svg"/><p>Suns Oot Guns Oot!</p></>)) : 
                (<><img style={icon} alt="question mark" src="/img/question-svgrepo-com.svg" /><p>What to wear?</p></>)}
            { }
        </div>
    )
}
