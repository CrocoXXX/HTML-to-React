import React from 'react'
import propTypes from 'prop-types';

const Button = (props) => {
    // const { title } = props
    const className = ['button']

    if (props.isPrimary)
        className.push('button-primary')
    if (props.isWide)
        className.push('button-wide-mobile')
    if (props.isSmall)
        className.push('button-sm')
    if (props.isBlock)
        className.push('button-block')

    return (
        <div>
            <button className={className.join(" ")}>
                {props.title}
            </button>
        </div>
    )
}

export default Button

Button.propTypes = {
    isPrimary: propTypes.bool,
    isWide: propTypes.bool,
    isSmall: propTypes.bool,
    isBlock: propTypes.bool,
    title: propTypes.string,
}