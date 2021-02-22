import Chapter from './Chapter';

const ChapterList = () => {
    return (
        <div className="chapterlist">
            <Chapter />
            <Chapter />
        </div>
    )
}



const Character = () => {
    return (
        <div className="character">
            <h3>shi mei</h3>
            <ChapterList />
        </div>
    )
}

export default Character;