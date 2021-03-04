import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenge } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContexts';
import styles from '../styles/pages/Home.module.css';
import { ChallengesProvider } from '../contexts/ChallengeContexts';


interface homeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
}

export default function Home(props) {
  console.log(props)
  return (
    <ChallengesProvider level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>

        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
          <title>Start | Exercise.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenge />

              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>

      </div>
    </ChallengesProvider>
  )
}

//roda no Node, no backend da aplicação, no servidor. E por que usar aqui?
//para que webcrawlers consigam ler os dados na requisição de carregamento da pagina, tendo em vista
//que eles não esperariam o carregamento de uma outra requisição.
export const getServerSideProps: GetServerSideProps = async (ctx) => {

  //chamada API
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}