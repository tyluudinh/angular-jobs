export type ISODate = string;
export interface Job {
  title: string;
  location: string;
  department: string;
  level?: string;
  createdAt: ISODate;
  updatedAt: ISODate;
}
export interface Option {
  name: string;
}
export interface Department extends Option {
  name: string;
}
export interface Country extends Option{
  code: string;
}
export type Type = Option;
export type Level = Option;

export interface JobListCard {
  department: string;
  lists: Array<Job>;
}

export interface ModalEditJob {
  visible: boolean;
  job: Job;
}

export interface JobsFilter {
  search: string;
  department: string;
  location: string;
  type?: string;
}
