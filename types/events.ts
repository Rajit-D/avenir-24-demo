interface ISingleEvent {
  name: string;
  price: number;
}

interface IMultiEvent extends ISingleEvent {
  min: number;
  max: number;
}

interface Member {
  name: string;
  category: string;
  designation: string;
  linkedinURL: string;
  instagramURL: string;
  facebookURL: string;
  avatarURL: string;
}
