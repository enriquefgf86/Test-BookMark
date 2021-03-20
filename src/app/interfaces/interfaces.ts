export interface BookMarkInterface {
  id: string;
  link: string;
  title: string;
  linkForIframe:string;
  group: string;
}

export interface TableFinal {
  group: string;
  groups: BookMarkInterface[];
}
