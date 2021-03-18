import React from 'react'
import './TimeFrameButton.css'

interface TimeFrame {
    timeFrame: string,
    prediction: boolean
}

const TimeFrameButton: React.FC<TimeFrame> = ({ timeFrame, prediction }) => {
    const color = prediction ? 'tertiary' : 'secondary'

    return (
        <div className={`timeFrameButton bg-desat-${color}`}>
            <p className={`text-${color}`}>{timeFrame}</p>
        </div>
    )
}

export default TimeFrameButton
