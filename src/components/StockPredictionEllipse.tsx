import React from 'react'

interface Prediction {
    prediction: number
}
const StockPredictionEllipse: React.FC<Prediction> = ({ prediction }) => {
    const color =
        prediction === 1 ? 'tertiary' : prediction === 0 ? 'secondary' : 'light'
    return (
        <>
            <div className={`glass-${color} ellipse ellipse-prediction`}>
                <h4 className={`text-${color}`}>StockStalker Prediction:</h4>
                <div className={`bg-desat-${color} pill`}>
                    <h5 className={`text-${color}`}>
                        {prediction === 1
                            ? 'UP'
                            : prediction === 0
                            ? 'DOWN'
                            : 'HOLD'}
                    </h5>
                </div>
            </div>
        </>
    )
}

export default StockPredictionEllipse
