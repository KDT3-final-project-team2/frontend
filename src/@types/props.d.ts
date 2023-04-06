export interface ISearchAddressProps {
  onClose: () => void;
  setValue: UseFormSetValue<TFieldValues>;
}
export interface IStep1Props extends IStepsButtonProps {
  member: string;
  step: number;
  checkedItems: string[];
  setCheckedItems: React.Dispatch<React.SetStateAction<string[]>>;
}
export interface IStep2Props extends IStepsButtonProps {
  member: string;
  step: number;
  register: UseFormRegister<TFieldValues>;
  handleSubmit: UseFormHandleSubmit<TFieldValues>;
  formState: FormState<TFieldValues>;
  setValue?: UseFormSetValue<TFieldValues>;
}
export interface IStep3Props {
  member: string;
  step: number;
}
export interface IStepsButtonProps {
  onClickNext: () => void;
  onClickBack: () => void;
  step: number;
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

export interface ISignUpFormProps {
  register: UseFormRegister;
  handleSubmit: UseFormHandleSubmit;
  formState: FormState;
  setValue: UseFormSetValue;
}

export interface ICheckBoxProps {
  title: string;
  checkedItems: string[];
  setCheckedItems: React.Dispatch<React.SetStateAction<string[]>>;
  index: number;
}

export interface IinputBoxProps {
  label: string;
  register: UseFormRegister<FieldValues>;
  placeholder?: string;
  children?: JSX.Element;
  id: string;
  formState: FormState<FieldValues>;
}

export interface IModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  isEditModal?: boolean;
}

export interface IStepBoxProps {
  stepName: string;
  step: string;
  setStep: React.Dispatch<React.SetStateAction<string>>;
  num: number;
}

export interface IPostingContensProps {
  title: string;
  contents: string;
}

export interface IPreviewModalProps {
  setPreviewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ITermDataProps {
  version: string;
  contents: string;
  selectedOption: string;
}

export interface ITermPostEditModalProps {
  setTermModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEditModalOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  saveBtnText: string;
  defaultData?: adminTermData;
  editModalOpen?: boolean;
}

export interface ITermListProps {
  index: number;
  adminTerm: adminTermData;
  setSaveBtnText: React.Dispatch<React.SetStateAction<string>>;
  setTermModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  saveBtnText: string;
}

export interface IScheduleElementProps {
  index: number;
}

export interface IPlanUserProps {
  id: string;
  name: string;
  price: number | string;
  functions: string[];
  year: number;
  month: number;
  today: number;
}

export interface ISettingProps {
  register: UseFormRegister<TFieldValues>;
  handleSubmit: UseFormHandleSubmit<TFieldValues>;
  formState: FormState<TFieldValues>;
  setValue?: UseFormSetValue<TFieldValues>;
}

export interface ISelectBoxProps {
  label: string;
  options: Option[];
  setValue: UseFormSetValue<IPostingInput>;
  trigger: UseFormTrigger<IPostingInput>;
  property: string;
}

interface Option {
  value: string;
  label: string;
}

export interface IJobPostingListProps {
  setIsEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  jobPosts: IGetCompanyJobPosts;
}
