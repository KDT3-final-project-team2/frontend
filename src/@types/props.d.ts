export interface ISearchAddressProps {
  onClose: () => void;
  setValue: UseFormSetValue<TFieldValues>;
}

export interface IStepProps extends IStepsButtonProps {
  member: string;
  step: number;
  register?: UseFormRegister<TFieldValues>;
  handleSubmit?: UseFormHandleSubmit<TFieldValues>;
  formState?: FormState<TFieldValues>;
  setValue?: UseFormSetValue<TFieldValues>;
}

export interface IStepsButtonProps {
  onClickNext: () => void;
  onClickBack: () => void;
}

export interface IStepCheckTitle {
  title: string;
  step: number;
  order: number;
}

export interface IStepCheckProps {
  step: number;
}

export interface IStepCheckColorProps {
  step: number;
  order: number;
}

export interface ICompanySignUpFormProps {
  register: UseFormRegister;
  handleSubmit: UseFormHandleSubmit;
  formState: FormState;
  setValue: UseFormSetValue;
}

export interface ICheckBoxProps {
  text: string;
  checkedItems: string[];
  setCheckedItems: React.Dispatch<React.SetStateAction<string[]>>;
}
