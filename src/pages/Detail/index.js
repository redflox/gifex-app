import Spinner from 'components/Spinner'
import Gif from '../../components/Gif/Gif'
import useSingleGif from 'hooks/useSingleGif'
import { Redirect } from 'wouter'

const Detail = ({ params }) => {
    const { id } = params
    const { gif, isLoading, isError } = useSingleGif({ id })

    if (isLoading) return <Spinner />
    if (isError) return <Redirect to='/404' />
    if (!gif) return null

    return (
        <>
            <h1>{gif.title}</h1>
            <Gif
                id={gif.id}
                title={gif.title}
                img={gif.img}
            />
            <span>
                {/* <ButtonDownload url={gif.img}>Grande</ButtonDownload> */}
            </span>
        </>
    )
}

export default Detail