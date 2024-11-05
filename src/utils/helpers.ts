import logoIndosoul from '../assets/icons/indosoulLogoMain.svg'
import indoSoulLiveIcon from '../assets/indosoul/icons/indoSoulLiveFooterLogo.svg'
import logoMainSoulSabhaWhite from '../assets/soulsabha/icons/soulSabhaLogo.png'
import flowLogo from '../assets/flow/icons/flowLogo.png'

type NavButtonProps = {
  btnText: string;
  styles: string;
  bgColor: string;
};

type PrimaryButtonProps = {
  styles: string;
  shadow?: boolean;
  shadowStyles?: string;
  btnText: string;
  onClick?: () => void;
};

export const findPrimaryButton = (pathname: string): PrimaryButtonProps => {
  if (pathname === '/indo-soul-live') {
    return {
      styles: 'bg-white text-black text-xl tracking-[1.5px]',
      shadow: true,
      shadowStyles: 'bg-white',
      btnText: 'Enquire Here',
      onClick: () => window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2Oy2TFgjxR4qp0qcY_WHvf_woG_VGqWEdygUfyDpSAEOXfseze-9WW1KUBLE3MS5hbQsJhnCMg", '_blank')
    };
  } else if (pathname === '/soul-sabha') {
    return {
      btnText: 'Enquire here',
      styles: 'text-white bg-gradient-to-r from-[#96d312] to-[#e92f2f]',
      shadow: true,
      shadowStyles: 'bg-gradient-to-r from-[#96d312] to-[#e92f2f]'
    };
  } else if (pathname === '/indo-soul-roots') {
    return {
      btnText: 'Enquire here',
      styles: 'text-white bg-[#c48f41]',
      shadow: true,
      shadowStyles: 'bg-[#c48f41]'
    };
  } else if (pathname === '/indo-soul-music') {
    return {
      btnText: 'Enquire here',
      styles: 'text-white bg-[#02A3E8]',
      shadow: true,
      shadowStyles: 'bg-[#02A3E8]'
    };
  } else if (pathname === '/flow') {
    return {
      btnText: 'Enquire here',
      styles: 'text-white bg-[#0fa677]',
      shadow: true,
      shadowStyles: 'bg-[#0fa677]'
    };
  } else {
    return {
      btnText: 'Enquire here',
      styles: 'text-black bg-gradient-to-r from-[#35D1AE] to-[#95D115]',
      shadow: true,
      shadowStyles: 'bg-gradient-to-r from-[#35D1AE] to-[#95D115]'
    };
  }
};

export const getNavButtonProps = (pathname: string): NavButtonProps => {
  if (pathname === '/indo-soul-live') {
    return {
      btnText: 'talk with us',
      styles: 'text-white',
      bgColor: 'liveRed'
    };
  } else if (pathname === '/soul-sabha') {
    return {
      btnText: 'talk with us',
      styles: 'text-black',
      bgColor: 'soulGreen'
    };
  } else if (pathname === '/flow') {
    return {
      btnText: 'talk with us',
      styles: 'text-white',
      bgColor: 'flowGreen'
    };
  } else if (pathname === '/indo-soul-roots') {
    return {
      btnText: 'talk with us',
      styles: 'text-black',
      bgColor: 'rootsBrown'
    };
  } else if (pathname === '/about-us') {
    return {
      btnText: 'talk with us',
      styles: 'text-white',
      bgColor: 'aboutUsRed'
    };
  } else if (pathname === '/indo-soul-music') {
    return {
      btnText: 'talk with us',
      styles: 'text-black',
      bgColor: 'musicBlue'
    };
  } else {
    return {
      btnText: 'talk with us',
      styles: 'text-black',
      bgColor: 'white'
    };
  }
}

export const findFillColor = (pathname: string): string => {
  if (pathname === '/soul-sabha') {
    return '#96d112'
  } else if (pathname === '/indo-soul-live') {
    return '#a91818'
  } else if (pathname === '/flow') {
    return '#0fa677'
  } else if (pathname === '/indo-soul-roots') {
    return '#c48f41'
  } else if (pathname === '/indo-soul-music') {
    return '#02A4EA'
  }  else if (pathname === '/about-us') {
    return '#F44007'
  } else {
    return '#ffffff'
  }
}

export const findLogo = (pathname: string): string => {
  if (pathname === '/indo-soul-live') {
    return indoSoulLiveIcon;
  } else if (pathname === '/soul-sabha') {
    return logoMainSoulSabhaWhite;
  } else if (pathname === '/flow') {
    return flowLogo;
  } else {
    return logoIndosoul;
  }
};