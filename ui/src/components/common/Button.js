export const Button = (props) => {

    let { click, children, styles, type } = props;
    return <button type={type} onClick={click} className={styles}>
        {children}
    </button>
}