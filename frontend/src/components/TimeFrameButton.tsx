import React from 'react'
import './TimeFrameButton.css'

interface TimeFrame {
    timeFrame: string
    color: string
    selectedTimeFrame: string
    toggleTimeFrame: (t: string) => void
}

const TimeFrameButton: React.FC<TimeFrame> = ({
    color,
    timeFrame,
    selectedTimeFrame,
    toggleTimeFrame,
}) => {

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
