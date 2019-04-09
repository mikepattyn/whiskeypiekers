import * as React from 'react'

export const CharacterPresentationalComponent = (props: any) => {
    const characters = props.characters
    return (
        <>
            <div className="name-container">
                {characters &&
                    characters.map((character: any) => {
                        return (
                            <span key={character.name} className="name">
                                {character.name}
                            </span>
                        );
                    })}
            </div>
        </>
    )
}