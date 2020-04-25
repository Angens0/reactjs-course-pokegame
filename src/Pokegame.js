import React, { Component } from 'react'
import shuffle from 'fast-shuffle'
import Pokedex from './Pokedex'

const getHandExp = deck => deck.reduce((sum, pokemon) => sum + pokemon.base_experience, 0)

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    }

    render() {
        const hand1 = shuffle(this.props.pokemon)
        const hand2 = hand1.splice(Math.floor(hand1.length / 2))
        const exp1 = getHandExp(hand1)
        const exp2 = getHandExp(hand2)

        return (
            <div>
                <h1>Pokegame!</h1>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp1 < exp2} />
            </div>
        )
    }
}

export default Pokegame
