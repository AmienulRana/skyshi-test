import styles from './layout.module.css';
import PropTypes from 'prop-types';
export default function Layout({ children }){
    return(
        <div className={styles.layout}>
            <nav data-cy="header-background">
                <h1 data-cy="header-title">TO DO LIST APP</h1>
            </nav>
            <main>
                { children }
            </main>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}