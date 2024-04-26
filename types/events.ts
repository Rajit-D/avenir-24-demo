interface ISingleEvent {
  name: string;
  price: number;
}

interface IMultiEvent extends ISingleEvent {
  min: number;
  max: number;
}
