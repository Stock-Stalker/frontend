import React from 'react'
import './TimeFrameButtons.css'
import TimeFrameButton from './TimeFrameButton'

interface TimeFrameButtonsProps {
    prediction: boolean
    selectedTimeFrame: string
    toggleTimeFrame: (t: string) => void
}

const TimeFrameButtons: React.FC<TimeFrameButtonsProps> = ({
    prediction,
    selectedTimeFrame,
    toggleTimeFrame,
}) => {
    return (
        <div className="timeFrameButtonContainer">
            <TimeFrameButton
                prediction={prediction}
                timeFrame="D"
                selectedTimeFrame={selectedTimeFrame}
                toggleTimeFrame={toggleTimeFrame}
            />
            <TimeFrameButton
                prediction={prediction}
                timeFrame="W"
                selectedTimeFrame={selectedTimeFrame}
                toggleTimeFrame={toggleTimeFrame}
            />
            <TimeFrameButton
                prediction={prediction}
                timeFrame="M"
                selectedTimeFrame={selectedTimeFrame}
                toggleTimeFrame={toggleTimeFrame}
            />
            <TimeFrameButton
                prediction={prediction}
                timeFrame="3M"
                selectedTimeFrame={selectedTimeFrame}
                toggleTimeFrame={toggleTimeFrame}
            />
            <TimeFrameButton
                prediction={prediction}
                timeFrame="6M"
                selectedTimeFrame={selectedTimeFrame}
                toggleTimeFrame={toggleTimeFrame}
            />
            <TimeFrameButton
                prediction={prediction}
                timeFrame="Y"
                selectedTimeFrame={selectedTimeFrame}
                toggleTimeFrame={toggleTimeFrame}
            />
        </div>
    )
}

export default TimeFrameButtons
