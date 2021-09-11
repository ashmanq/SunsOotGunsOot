import React from 'react';
interface Props {
    temperature: number | null;
}

export default function JumperOrGunsOot({ temperature }: Props) {

    return (
        <div>
            {temperature ? (
                (temperature < 15) ? (<p>Wear a Jumper</p>) : (<p>Suns Oot Guns Oot!</p>)) : (<p></p>)}
            { }
            <p>The Jumper or guns oot app</p>
        </div>
    )
}
