import React from 'react'
import propTypes from 'prop-types'
import { Fade } from 'react-reveal'

const Card = (props) => {
    const className = ['tiles-item']

    className.push(props.className)

    return (
        <div className={className.join(" ")}>
            <Fade bottom>
                <div className={`tiles-item-inner ${props.isHasShadow ? 'has-shadow' : ' '} `}>
                    {props.children}
                </div>
            </Fade>
        </div>
    )
}

export default Card

Card.propTypes = {
    isHasShadow: propTypes.bool,
    className: propTypes.string
}