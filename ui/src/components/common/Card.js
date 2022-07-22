export const Card = (props) => {
    return <div className="absolute z-40 translate-x-1/2 -translate-y-full bg-white w-6/12 h-96 rounded-md flex flex-col px-4 py-4 justify-between ">
        {props.children}
    </div>
}