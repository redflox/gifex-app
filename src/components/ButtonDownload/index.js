

const ButtonDownload = ({ url, children }) => {
    return (
        <a href={url} download> <button>{children}</button> </a>
    )
}

export default ButtonDownload