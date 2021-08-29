import React from 'react'
import styles from './repo.module.css'
const Repo = ({ repo }) => {

    // Get Days Difference from updated date till now
    const days = Math.floor((new Date(repo.created_at) - new Date("2017-10-22")) / 1000 / 60 / 60 / 24);

    return (
        <div className={styles.repoItem}>
            <img alt="User Avatar" src={repo.owner.avatar_url} className={styles.ownerAvatar} />
            <div className={styles.repoItemDetails}>
                <h2>{repo.name}</h2>
                <p className={styles.description}>{repo.description}</p>
                <div className={styles.repoStarsAndIssues}>
                    <p className={styles.count}>{repo.stargazers_count} Stars</p>
                    <p className={styles.count}>{repo.open_issues_count} Issues</p>
                    <p> Submitted {days} days ago by {repo.owner.login}</p>
                </div>
            </div>
        </div>
    )
}

export default Repo