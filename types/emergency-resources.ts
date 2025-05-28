export interface BrgyHotlineProps {
  src: string;
  brgy: string;
  onclick: () => void;
}

export interface LocalHotlineProps {
  src: string;
  name: string;
  bg: string;
  textColor: string;
}

export interface ContactInfoBrgy {
  id: number;
  brgy_name: string;
  phone: string;
  landline: string;
  email: string;
  fb_page: string;
  captain: string;
  secretary: string;
}

export interface BrgyDetails {
  onclick: () => void;
  brgyId?: string;
}
