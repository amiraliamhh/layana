import * as React from 'react'

interface StarIconProps {
    width?: number
    height?: number
    fill?: string
}

export function StarIcon({
    width = 24,
    height = 24,
    fill = '#424242'
}: StarIconProps & React.Props<any>) {
    return (
        <svg height={`${height}px`} viewBox="0 0 16 16" width={`${width}px`} xmlns="http://www.w3.org/2000/svg">
            <path style={{ fill }} d="m16 6-5.5-.5-2.5-5.5-2.5 5.5-5.5.5 4 4-2 6 6-2.5 6 2.5-2-6zm-8 5.875-3.53467 1.47266 1.25098-3.75293-2.39111-2.39062 3.1792-.289062 1.49561-3.29004 1.49561 3.29004 3.1792.289062-2.39111 2.39062 1.25098 3.75293-3.53467-1.47266z"/>
        </svg>
    )
}
