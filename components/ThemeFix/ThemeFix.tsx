import { JSX } from 'react';

function ThemeFix(): JSX.Element {
  return (
    <>
      <div className='border-link text-link hover:bg-link/15 dark:border-link-dark dark:hover:bg-link-dark dark:hover:text-link-dark-hover'>text-link</div>
      <div className='text-heading dark:text-heading-dark'>text-heading</div>
      <div className='text-paragraph dark:text-paragraph-dark'>text-paragraph</div>
    </>);
};

export default ThemeFix;
