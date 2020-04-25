import React, { Component } from 'react'
import './Pokecard.css'

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
const padToThree = number => number > 999 ? number : `00${number}`.slice(-3)

class Pokecard extends Component {
    state = {
        name: '?'
    }

    // Does NOT require to bind(this)
    clickHandler = event => this.setState({ name: this.props.name })

    // Requires to bind(this)
    // clickHandler(event) { this.setState({ name: this.props.name }) }

    render() {
        const { id, name, type, exp } = this.props
        const imgSrc = `${POKE_API}${padToThree(id)}.png`

        return (
            <div className="Pokecard" onClick={this.clickHandler}>
                <h1 className="Pokecard-title">{this.state.name}</h1>
                <div className="Pokecard-image">
                    <img src={imgSrc} alt={name} />
                </div>
                <div className="Pokecard-data">Type: {type}</div>
                <div className="Pokecard-data">EXP: {exp}</div>
            </div>
        )
    }
}

export default Pokecard
