import { useForm } from 'react-hook-form';
import styles from '../Contact/ContactForm/ContactForm.module.css';
import Link from 'next/link';
import cn from 'classnames';

type PageSectionProps = {
  url: string;
  className?: string;
};

type NewsletterFormData = {
  email: string;
  datenschutz: boolean;
};

function Newsletter(props: PageSectionProps): JSX.Element {
  const { className } = props;
  // const { openSnackbar } = useSnackBar();
  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormData>({
    mode: 'onBlur',
  });
  // const onSubmit = (data: NewsletterFormData) => {
  //  const config: AxiosRequestConfig = {
  //    method: 'post',
  //    url: url,
  //    headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-cache', Pragma: 'no-cache', Expires: '0' },
  //    data: data,
  //  };
  //};

  return (
    <section id="newsletter" className={className}>
      <div className="max-w-screen-xl mx-auto text-base tracking-wide text-gray-900 dark:text-gray-300 px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8">
        <h2 className="text-secondary uppercase tracking-tight font-medium text-xl sm:text-2xl lg:text-3xl">Newsletter</h2>
        <div className="text-sm lg:text-base font-light lg:font-normal py-4 sm:py-6 lg:py-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius recusandae modi quis, illo numquam neque, quos non distinctio voluptas rem repudiandae velit cupiditate omnis ex placeat odio repellat vel aliquam?
        </div>
        <form>
          <div className={styles.checkboxfield}>
            <label className="flex justify-start items-start">
              <div className="bg-white border-2 rounded border-gray-500 w-5 h-5 flex shrink-0 justify-center items-center mr-2 focus-within:border-blue-500 dark:bg-black">
                <input {...register('datenschutz', { required: true })} type="checkbox" className={styles.checkbox} id="datenschutz" name="datenschutz" />
                <svg className="fill-current hidden w-3 h-3 text-secondary pointer-events-none dark:text-secondary-dark" viewBox="0 0 20 20">
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
              <div className={['block tracking-wide text-xs mb-2 select-none', errors.datenschutz ? 'text-red-700 dark:text-red-500' : 'dark:text-gray-500'].join(' ')}>
                Ich habe die{' '}
                <Link href="/datenschutz/">
                  <a>Datenschutzerklärung</a>
                </Link>{' '}
                gelesen und bin mit der Speicherung/Verarbeitung meiner Kontaktdaten zum Zweck der Kontaktaufnahme einverstanden.
              </div>
            </label>
          </div>
          <div className={cn(styles.formfield, 'mt-2')}>
            {errors.email && errors.email.type === 'required' && <div className="text-red-700 text-xs text-right dark:text-red-500 -mt-2 mb-2">Die E-Mail Adresse muss eingeben werden.</div>}
            <input {...register('email', { required: true })} className={errors.email ? styles.textinputerror : styles.textinput} id="email" name="email" type="text" placeholder="E-Mail Adresse" />
          </div>
          <div className="my-4 text-right">
            <button type="submit" disabled={isSubmitting} className="bg-secondary text-gray-200 text-sm uppercase tracking-wider py-2 px-8 rounded transition ease-in-out duration-150 hover:bg-opacity-75 dark:bg-secondary-dark">
              Abonnieren
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Newsletter;
