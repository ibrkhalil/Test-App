import React from 'react'
import styles from './repo.module.css'
const Repo = ({ repo }) => {

    // Get Days Difference from updated date till now
    const days = Math.floor((new Date(repo.created_at) - new Date("2017-10-22")) / 1000 / 60 / 60 / 24);

    return (
        <div className={styles.repoContainer}>
            <img alt="User Avatar" src={repo.owner.avatar_url} className={styles.ownerAvatar} />
            <div className={styles.repoStarsAndIssues}>
                <h1>{repo.name}</h1>
                <p className={styles.description}>{repo.description}</p>
                <div className={styles.repoDetails}>
                    <p className={styles.count}>Stars: {repo.stargazers_count}</p>
                    <p className={styles.count}>Issues: {repo.open_issues_count}</p>
                    <p> Submitted {days} days ago by {repo.owner.login}</p>
                </div>

            </div>
        </div >
    )
}

export default Repo