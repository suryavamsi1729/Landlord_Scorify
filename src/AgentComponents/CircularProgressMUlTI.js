import React, { useState, useEffect } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MultiColorProgressBar = ({ aRating, bRating, cRating, dRating }) => {
    const [progress, setProgress] = useState(0); // Initial progress set to 0
    const total = aRating + bRating + cRating + dRating;
    const aPercentage = (aRating / total) * 100;
    const bPercentage = (bRating / total) * 100;
    const cPercentage = (cRating / total) * 100;
    const dPercentage = (dRating / total) * 100;
    const segments = [
        { percentage: aPercentage, color: '#4a90e2', value: aRating },
        { percentage: bPercentage, color: '#f8e71c', value: bRating },
        { percentage: cPercentage, color: '#7ed321', value: cRating },
        { percentage: dPercentage, color: '#d0021b', value: dRating },
    ];

    const radius = 85; // Radius of the circle where labels should appear
    const centerX = 100; // Center x of the SVG
    const centerY = 100; // Center y of the SVG
    var  cumulativeAngle = 0;
    useEffect(() => {
        // Animate the progress from 0 to 100%
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += 1;
            setProgress(currentProgress);
            if (currentProgress >= 100) {
                clearInterval(interval);
            }
        }, 20); // Adjust speed by modifying the interval time (20ms here)

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div style={{ width: 200, height: 200, position: 'relative' }}>
            <CircularProgressbarWithChildren
                value={progress}
                strokeWidth={15}
                styles={buildStyles({
                    strokeLinecap: 'butt',
                    pathTransitionDuration: 0.5,
                    pathColor: '#EF4444',
                    trailColor: 'transparent',
                })}
            >
                <CircularProgressbarWithChildren
                    value={(progress / 100) * (aPercentage + bPercentage + cPercentage)}
                    strokeWidth={15}
                    styles={buildStyles({
                        strokeLinecap: 'butt',
                        pathTransitionDuration: 0.5,
                        pathColor: '#22C55E',
                        trailColor: 'transparent',
                    })}
                >
                    <CircularProgressbarWithChildren
                        value={(progress / 100) * (aPercentage + bPercentage)}
                        strokeWidth={15}
                        styles={buildStyles({
                            strokeLinecap: 'butt',
                            pathTransitionDuration: 0.5,
                            pathColor: '#FCD34D',
                            trailColor: 'transparent',
                        })}
                    >
                        <CircularProgressbarWithChildren
                            value={(progress / 100) * aPercentage}
                            strokeWidth={15}
                            styles={buildStyles({
                                strokeLinecap: 'butt',
                                pathTransitionDuration: 0.5,
                                pathColor: '#3C4BEF',
                                trailColor: 'transparent',
                            })}
                        >
                            <div style={{ fontSize: 20 }}>
                                <strong>{total}</strong>
                            </div>
                        </CircularProgressbarWithChildren>
                    </CircularProgressbarWithChildren>
                </CircularProgressbarWithChildren>
            </CircularProgressbarWithChildren>

            {/* Custom Labels */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                {segments.map((segment, index) => {
                    const startAngle = cumulativeAngle;
                    const endAngle = startAngle + (segment.percentage / 100) * 360;
                    {
                        console.log(`index-${index}`,startAngle,endAngle);
                    }
                    // Calculate the middle angle for the segment
                    const midAngle = -90 +( (startAngle + endAngle) / 2);

                    // Convert angle to radians
                    const radians = (midAngle * Math.PI) / 180;

                    // Calculate x and y positions based on the angle
                    const x = centerX + radius * Math.cos(radians);
                    const y = radius * Math.sin(radians) + centerY;
                    {
                        console.log(`X,Y Values -${index} x=${x} y=${y}`);
                    }
                    // Return the cumulative angle for the next segment and the JSX element
                    cumulativeAngle = endAngle;
                    return (
                        <React.Fragment key={index}>
                            <text
                                x={x}
                                y={y}
                                textAnchor="middle"
                                dominantBaseline="central"
                                fill={'#FFFFFF'}
                                fontSize="12px"
                                fontWeight="bold"
                            >
                                {segment.value}
                            </text>
                            {endAngle} {/* Return updated cumulative angle */}
                        </React.Fragment>
                    );
                }, 0)}
            </svg>
        </div>
    );
};

export default MultiColorProgressBar;
