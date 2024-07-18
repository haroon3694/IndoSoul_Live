import React from 'react'
import SeasonHeader from './SeasonHeader'
// import CollaborateButton from './CollaborateButton';

const SeasonTwo: React.FC = () => {

    const seasonTwoData = {
        intro: [
            {
                id: 0,
                text: 'Join us for the upcoming season of Soul Sabha featuring collaborations with talented artists from across India. Stay tuned for our schedule of listening sessions, live concerts by following us on social media platforms and subscribe to our newsletter.',
            },
            {
                id: 2,
                text: 'Become a part of the SS Community and join us as we celebrate the timeless beauty of Indian Classical music in our unique way!',
            },
        ],
        seasonContent: [
            {
                id: 0,
                title: 'Performer',
                link: 'https://forms.gle/Jhy7myf7Gadv8KG49',
            },
            {
                id: 1,
                title: 'Sponsor',
                link: 'https://forms.gle/Jhy7myf7Gadv8KG49',
            },
            {
                id: 2,
                title: 'Listener',
                link: 'https://forms.gle/Jhy7myf7Gadv8KG49',
            },
            {
                id: 3,
                title: 'CREW',
                link: 'https://forms.gle/Jhy7myf7Gadv8KG49',
            },
        ],
    };
    

    return (
        <div className='w-full py-16 mb-24'>
            <SeasonHeader text={`UPCOMING SEASON`} styles='my-10' />
            <h1 className='text-lg font-semibold tracking-[4px] font-clashdisplay text-center mb-5'>WHAT TO EXPECT?</h1>
            <div className='w-full px-10 md:px-20 lg:px-48 xl:px-72 pt-8 mb-8'>
                {
                    seasonTwoData?.intro?.map((data) => (
                        <h1 key={data?.id} className='text-center mb-5'>{data?.text}</h1>
                    ))
                }
            </div>
            <div className='w-full flex flex-col justify-center items-center gap-7 px-10'>
                {
                    seasonTwoData?.seasonContent?.map((data) => (
                        <div key={data?.id} className='flex flex-col justify-center items-center text-center'>
                            <h1 className={`text-xl`}>{data?.title}</h1>
                            <h1 className={`text-sm ${data?.id === 0 ? 'w-full max-w-[500px]' : ''}`}>If you are a {data?.id === 0 ? 'vocalist with a strong background in Indian classical music' : data?.id === 1 ? 'sponsor' : data?.id === 2 ? 'listener' : 'crew'}, please fill the form - <a className='text-blue-600 underline' target='_blank' href={data?.link}>{data?.link}</a></h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SeasonTwo