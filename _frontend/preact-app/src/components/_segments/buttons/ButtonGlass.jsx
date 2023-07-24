const ButtonGlass = props => {
    const { 
        text, 
        children, 
        type = 'button', 
        className='py-2 px-4 rounded-full' 
    } = props

    const styleClassName = "transition duration-500 hover:bg-white/10 inline-flex items-center gap-3";

    return (
        <button 
            {...props}
            type={type} 
            className={`${className} ${styleClassName}`}>
                { text || children }
        </button>
    )
}


export default ButtonGlass;