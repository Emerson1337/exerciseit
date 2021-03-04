import { useContext } from 'react';
import { ChallengeContexts } from '../contexts/ChallengeContexts';
import styles from '../styles/components/LevelUpModel.module.css';

export function LevelUpModel() {

    const { level, closeLevelUpModel } = useContext(ChallengeContexts)

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabéns!</strong>
                <p>Você alcançou um novo level.</p>

                <button onClick={closeLevelUpModel} type="button">
                    <img src="/icons/close.svg" alt="Fechar Model" />
                </button>
            </div>
        </div>
    );
}