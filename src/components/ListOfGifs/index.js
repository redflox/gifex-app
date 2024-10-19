import Gif from '../Gif/Gif'
import './styles.css'

const ListOfGifs = ({ gifs, title }) => {


    return (
        <>
            <h2>{decodeURI(title)}</h2>
            <div className="ListOfGifs">
                {
                    gifs.map((gif, index) => {
                        return (
                            <Gif
                                key={`${index}-${gif.id}`}
                                id={gif.id}
                                title={gif.title}
                                img={gif.img}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default ListOfGifs