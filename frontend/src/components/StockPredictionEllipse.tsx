import React from 'react'

interface Prediction {
    prediction: boolean
}
const StockPredictionEllipse: React.FC<Prediction> = ({ prediction }) => {
    const color = prediction ? 'tertiary' : 'secondary'
    return (
        <>
            <div className={`glass-${color} ellipse ellipse-prediction`}>
                <h4 className={`text-${color}`}>StockStalker Prediction:</h4>
                <div className={`glass-${color} pill`}>
                    <h5 className={`text-${color}`}>{ prediction ? 'UP' : 'DOWN' }</h5>
                </div>
            </div>
        </>
    )
}

export default StockPredictionEllipse
