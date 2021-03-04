import styles from '../styles/components/CompletedChallenge.module.css';
import { ChallengeContexts } from '../contexts/ChallengeContexts';
import { useContext } from 'react';

export function CompletedChallenge() {

    const { challengesCompleted } = useContext(ChallengeContexts);

    return (
        <div className={styles.completedChallengesContainer}>
            <span>Finished Challenges</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}