import { employStepType, stepType } from '@/constants/steps';
import { ReactHTMLElement } from 'react';

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
  text: ReactHTMLElement;
}

export interface IinputBoxProps {
  label: string;
  register: UseFormRegister<FieldValues>;
  placeholder?: string;
  children?: JSX.Element;
  id: string;
  formState: FormState<FieldValues>;
  defaultValue: string;
}

export interface IModalProps {
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditModal?: React.Dispatch<React.SetStateAction<boolean>>;
  jobPosts?: IGetCompanyJobPosts;
  saveBtnText: string;
}

// export interface IStepBoxProps {
//   stepName: stepType | employStepType;
//   step: stepType | employStepType;
//   setStep: React.Dispatch<React.SetStateAction<stepType | employStepType>>;
//   num: number;
// }

export interface IPostingContensProps {
  title: string;
  contents: string | number;
}

export interface IPreviewModalProps {
  setPreviewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  jobPosts: IGetCompanyJobPosts;
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
  defaultData?: adminTermSingleData;
  editModalOpen?: boolean;
}

export interface ITermListProps {
  index: number;
  term: adminTermSingleData;
  setSaveBtnText: React.Dispatch<React.SetStateAction<string>>;
  setTermModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  saveBtnText: string;
}

export interface IScheduleElementProps {
  schedule: GetCalendarData;
  scheduleDeleteMutate: UseMutateFunction<any, unknown, string, unknown>;
  schedulePutMutate: UseMutateFunction<any, unknown, any, unknown>;
}

export interface ICalendarUIProps {
  schedule: GetCalendarData[];
  schedulePostMutate: UseMutateFunction<any, unknown, PostCalendarData, unknown>;
  scheduleDeleteMutate: UseMutateFunction<any, unknown, string, unknown>;
  schedulePutMutate: UseMutateFunction<any, unknown, any, unknown>;
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
  defaultValue: string;
}

interface Option {
  value: string;
  label: string;
}

export interface IJobPostingListProps {
  jobPosts: IGetCompanyJobPosts;
  setSaveBtnText: React.Dispatch<React.SetStateAction<string>>;
  saveBtnText: string;
  JobDeleteMutate: UseMutateFunction<any, unknown, number, unknown>;
}

export interface IApplicantStepBoxProps {
  stepName: string;
  step: applicantStepType;
  setStep: React.Dispatch<React.SetStateAction<applicantStepType>>;
  num: number;
}

export interface ICompanyStepBoxProps {
  stepName: employStepType;
  step: employStepType;
  setStep: React.Dispatch<React.SetStateAction<employStepType>>;
  num: number;
}

export interface ISearchFilterProps {
  selectedOption: string;
  handleCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSearchOptionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ISearchOptionDropdownProps {
  selectedOption: '직무' | '학력' | '경력';
  handleSearchOptionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface ISearchInputFieldProps {
  handleSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IJobPostSummaryProps {
  onClickSearchContentsOpen: () => void;
  searchData: JobPostsSearchData;
}

export interface IJobPostDetailProps {
  searchData: JobPostsSearchData;
  onClickApply: () => void;
  onClickPdfOpen: () => Window | null;
}
