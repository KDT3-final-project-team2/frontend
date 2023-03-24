export interface ISearchAddressProps {
  onClose: () => void;
  setValue: UseFormSetValue<TFieldValues>;
}

export interface IStepProps {
  onClickNext?: () => void;
  onClickBack?: () => void;
  member?: string;
}
