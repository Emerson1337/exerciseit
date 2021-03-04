import { useContext } from 'react';
import { ChallengeContexts } from '../contexts/ChallengeContexts';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengeContexts);

    return (
        <div className={styles.profileContainer}>
            <img src="https://www.github.com/Emerson1337.png" alt="Emerson Picture" />
            <div>
                <strong>Emerson Lucena</strong>

                <p id="small-icon">
                    <img className={styles.profileContainerImage} src="icons/level.svg" alt="Level image" />
                    <span>Level {level}</span>
                </p>
            </div>
        </div>
    );
}