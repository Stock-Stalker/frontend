import React from 'react'
import './TimeFrameButtons.css'
import TimeFrameButton from './TimeFrameButton'

interface Prediction {
    prediction: boolean
}

const TimeFrameButtons: React.FC<Prediction> = ({ prediction }) => {
    return (
        <div className="timeFrameButtonContainer">
            <TimeFrameButton prediction={prediction} timeFrame="D" />
            <TimeFrameButton prediction={prediction} timeFrame="W" />
            <TimeFrameButton prediction={prediction} timeFrame="M" />
            <TimeFrameButton prediction={prediction} timeFrame="6M" />
            <TimeFrameButton prediction={prediction} timeFrame="Y" />
            <TimeFrameButton prediction={prediction} timeFrame="ALL" />
        </div>
    )
}

export default TimeFrameButtons
