import React from 'react'

export function childrenWithProps(props) {
    return React.Children.map(props.Children, child => {
        return React.cloneElement(child, {
            ...props, ...child.props
        })
    })
}