
export const Popup = (props) => {
    if (!props.show) {
        return null
    }
    return <div onClick={() => props.click()} className={`overflow-hidden bg-primary-black/50 w-screen h-screen z-20 fixed top-0 left-0`}>
    </div>
}

