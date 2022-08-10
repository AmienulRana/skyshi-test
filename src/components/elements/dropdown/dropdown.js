import styles from './dropdown.module.css';
import PropTypes from 'prop-types';


export function TitleDropdown({ children }){
    return children;
}
export function DataDropdown (props){
    const { children, showDropdown, classNameCustom } = props;
    return(
        <div className={[showDropdown && styles.dataActive, styles.data, classNameCustom].join(' ')}>
            { children }
        </div>
    )
}

export default function Dropdown(props){
    const { classNameCustom, children } = props;
    return(
        <div className={[styles.dropdown, classNameCustom].join(' ')} {...props}>
            { children }
        </div>
    )
}
TitleDropdown.propTypes = {
    children:PropTypes.node,
}
DataDropdown.propTypes = {
    children:PropTypes.node,
}
Dropdown.propTypes = {
    classNameCustom:PropTypes.string,
    children: PropTypes.node
}