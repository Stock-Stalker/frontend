import React from 'react'
import './TimeFrameButtons.css'
import TimeFrameButton from './TimeFrameButton'

interface TimeFrameButtonsProps {
    color: string
    selectedTimeFrame: string
    toggleTimeFrame: (t: string) => void
    timeFrames: Array<string>
}

const TimeFrameButtons: React.FC<TimeFrameButtonsProps> = ({
    color,
    selectedTimeFrame,
    toggleTimeFrame,
    timeFrames,
}) => {
    return (
        <div className="timeFrameButtonContainer">
            {timeFrames.map((timeFrame: string) => (
                <TimeFrameButton
                    key={timeFrame}
                    color={color}
                    timeFrame={timeFrame}
                    selectedTimeFrame={selectedTimeFrame}
                    toggleTimeFrame={toggleTimeFrame}
                />
            ))}
        </div>
    )
}

export default TimeFrameButtons
