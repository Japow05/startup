import React from 'react';

export function About() {
    return (
        <main className="container-fluid bg-primary-subtle text-center text-primary-emphasis">
            <div id="picture" className="picture-box"><img width="200px" src="designPicture.png" alt="Example drawing of the Memory Madness game"/></div>

            <p>
                Memory madness is a memory game in which you memorize the order of a set of buttons, and repeat the order back. There are many
                difficulty options to choose from from a 2x5 grid to a 5x5.
            </p>

            <p>
                The name Memory Madness is something that I just made up and is not tied to any existing corporate trademark.
                It is a very cheesy name and will likely be subject to change as of whenever I feel like it.
            </p>
        </main>
    )
}