import { ChallengeContexts } from '../contexts/ChallengeContexts';
import { useContext } from 'react'
import styles from '../styles/components/ChallengeBox.module.css';
import { CountdownContext, CountdownProvider } from '../contexts/CountdownContexts';

export function ChallengeBox() {

    const { activeChallenge, resetChallenge, CompletedChallenge } = useContext(ChallengeContexts);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        CompletedChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Receive {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="image" />
                        <strong>New Challenge</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button onClick={handleChallengeFailed} type="button" className={styles.challengeFailedButton}>I failed</button>
                        <button onClick={handleChallengeSucceeded} type="button" className={styles.challengeSucceededButton}>I made it</button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>
                            Start a new cycle for receive challenges
                            to you'll complete.
                        </strong>
                        <p>
                            < img src="icons/level-up.svg" alt="Level Up" />
                            Level Up by completing challenges.
                        </p>
                    </div>
                )}

        </div>
    );
}