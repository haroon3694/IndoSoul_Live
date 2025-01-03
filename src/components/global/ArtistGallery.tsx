import ScrollingGallery from "./ScrollingGallery"

const ArtistGallery = ({ imagesLTR, imagesRTL }: any) => {

    return (
        <div>
            <ScrollingGallery images={imagesRTL} scrollRight={true} />
            <ScrollingGallery images={imagesLTR} scrollRight={false} />
        </div>
    )
}

export default ArtistGallery