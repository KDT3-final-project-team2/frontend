export interface ISearchAddressProps {
  onClose: () => void;
  setValue: UseFormSetValue<TFieldValues>;
}

export interface IStepProps {
  onClickNext?: () => void;
  onClickBack?: () => void;
  member?: string;
  register?: UseFormRegister<TFieldValues>;
  handleSubmit?: UseFormHandleSubmit<TFieldValues>;
  formState?: FormState<TFieldValues>;
  setValue?: UseFormSetValue<TFieldValues>;
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

export interface ICompanySignUpFormProps {
  register: UseFormRegister;
  handleSubmit: UseFormHandleSubmit;
  formState: FormState;
  setValue: UseFormSetValue;
}
