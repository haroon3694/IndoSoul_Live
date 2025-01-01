export interface SoulSabhaHeroImagesType {
  id: number;
  image: string;
  title: string;
}

export interface DescriptionDataType {
  id: number;
  desc: string;
}

export interface SoulSabhaExperienceDataType {
  id: number;
  image: string;
  title: string;
  content: any;
  links: string;
}

export interface SeasonTwoDataType {
  intro: {
    id: number;
    text: string;
  }[];
  seasonContent: {
    id: number;
    title: string;
    icon: string;
    link: string;
  }[];
}

export interface SocialMediaDataType {
  id: number;
  logo: string;
  link: string;
  title: string;
};

export interface ArtistDataType {
  id: number;
  image: string;
  title: string;
  season: string;
  youtubeLink: string;
  spotifyLink: string;
}