export interface ExperienceDataType {
    id: number;
    title: string;
    image: string;
    logo: string;
    heading: string | null;
    content: string[];
    links: string;
}

export interface OurCareerDataType {
    experience: CareerExperienceType[];
    musicians: CareerMusiciansType[];
    bandVideo: string;
}

interface CareerExperienceType {
    id: number;
    amount: number;
    title: string;
}

interface CareerMusiciansType {
    id: number;
    image: string;
    title: string;
    about: string;
}

export interface MusicianGalleryType {
    id: number;
    image: string;
}