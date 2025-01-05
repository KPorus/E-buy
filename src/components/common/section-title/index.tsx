import styles from './sectionTitle.module.scss'

const SectionTitle = ({title}:{title:string}) => {
    return (
        <div id='ts--section-title' className={styles.sectiontitle}>
           <h1>{title}</h1>
        </div>
    );
};

export default SectionTitle;