/* eslint-disable no-unused-vars */
declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

/* ----------------------------------------------- */

declare type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};