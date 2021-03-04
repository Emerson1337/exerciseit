import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContexts';
import styles from '../styles/components/Countdown.module.css';



export function Countdown() {

    const { minutes, seconds, hasFinished, isActive, resetCountdown, startCountDown } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
    var x = 0;

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>


            {hasFinished ?
                (<button
                    disabled
                    className={styles.countdownButton}>
                    Finished cycle
                    <img src="icons/level.svg" />
                </button>)
                :
                <>
                    {isActive ? (
                        <button onClick={resetCountdown} className={`${styles.countdownButton} ${styles.countdownButtonIsActive}`}>Stop the cycle</button>
                    ) : (<button onClick={startCountDown} className={styles.countdownButton}>Start a cycle</button>)}
                </>}
        </div>
    );
}