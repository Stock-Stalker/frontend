import React from 'react'
import './TimeFrameButton.css'

interface TimeFrame {
    timeFrame: string
    prediction: boolean
    selectedTimeFrame: string
    toggleTimeFrame: (t: string) => void
}

const TimeFrameButton: React.FC<TimeFrame> = ({
    prediction,
    timeFrame,
    selectedTimeFrame,
    toggleTimeFrame,
}) => {
    const color = prediction ? 'tertiary' : 'secondary'

    return (
        <div
            className={`timeFrameButton bg-desat-${
                selectedTimeFrame === timeFrame ? color : ''
            }`}
            onClick={() => toggleTimeFrame(timeFrame)}>
            <span className={`text-${color}`}>{timeFrame}</span>
        </div>
    )
}

export default TimeFrameButton