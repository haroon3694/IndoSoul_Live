import React from 'react'
import ScrollingGallery from "../global/ScrollingGallery"

import songsImage1 from '../../assets/soulsabha/images/artists/02_card/soulsabha-02_card-01_1000px.jpg'
import songsImage2 from '../../assets/soulsabha/images/artists/02_card/soulsabha-02_card-02_1000px.jpg'
import songsImage3 from '../../assets/soulsabha/images/artists/02_card/soulsabha-02_card-03_1000px.jpg'
import songsImage4 from '../../assets/soulsabha/images/artists/02_card/soulsabha-02_card-04_1000px.jpg'
import songsImage5 from '../../assets/soulsabha/images/artists/02_card/soulsabha-02_card-05_1000px.jpg'
import songsImage6 from '../../assets/soulsabha/images/artists/02_card/soulsabha-02_card-06_1000px.jpg'
import songsImage7 from '../../assets/soulsabha/images/artists/02_card/soulsabha-02_card-07_1000px.jpg'

import visualArtsImage1 from '../../assets/soulsabha/images/artists/03_card/aikiyam-03_card-01_1000px.jpg'
import visualArtsImage2 from '../../assets/soulsabha/images/artists/03_card/aikiyam-03_card-02_1000px.jpg'
import visualArtsImage3 from '../../assets/soulsabha/images/artists/03_card/aikiyam-03_card-03_1000px.jpg'
import visualArtsImage4 from '../../assets/soulsabha/images/artists/03_card/aikiyam-03_card-04_1000px.jpg'
import visualArtsImage5 from '../../assets/soulsabha/images/artists/03_card/aikiyam-03_card-05_1000px.jpg'

const ArtistGallery: React.FC = () => {

    const listiningSongsImages = [
        songsImage1,
        songsImage5,
        songsImage4,
        songsImage7,
        songsImage2,
        songsImage6,
        songsImage3,
    ];

    const visualArtsImages = [
        visualArtsImage1,
        visualArtsImage4,
        visualArtsImage2,
        visualArtsImage5,
        visualArtsImage3,
    ];
    
    return (
        <div>
            <ScrollingGallery images={listiningSongsImages} scrollRight={true} />
            <ScrollingGallery images={visualArtsImages} scrollRight={false} />
        </div>
    )
}

export default ArtistGallery