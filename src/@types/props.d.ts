export interface ISearchAddressProps {
  onClose: () => void;
  setValue: UseFormSetValue<TFieldValues>;
}

export interface IStepProps {
  onClickNext?: () => void;
  onClickBack?: () => void;
  member?: string;
}

export interface IStepCheckTitle {
  title: string;
  line: boolean;
  checkStep: boolean;
}

export interface IStepCheckProps {
  checkStep: boolean[];
}

export interface IStepCheckColorProps {
  checkStep: boolean;
}
