import React from 'react';
import styles from './BlogDetail.module.css';

interface AuthorBioCardProps {
  author: {
    name: string;
    role: string;
    avatar: string;
    bio?: string;
  };
}

export default function AuthorBioCard({ author }: AuthorBioCardProps) {
  return (
    <div className={styles.authorBioCard}>
      <img
        src={author.avatar}
        alt={author.name}
        className={styles.authorBioAvatar}
      />
      <div className={styles.authorBioContent}>
        <h3 className={styles.authorBioTitle}>Written by {author.name}</h3>
        <p className={styles.authorBioRole}>{author.role}</p>
        {author.bio && <p className={styles.authorBioText}>{author.bio}</p>}
      </div>
    </div>
  );
}
