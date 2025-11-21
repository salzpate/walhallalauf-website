import { JSX } from 'react';
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
      <div className="mx-auto max-w-7xl px-4 pt-4 text-base tracking-wide text-gray-900 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8 dark:text-gray-300">
        <h2 className="text-xl font-medium tracking-tight text-secondary uppercase sm:text-2xl lg:text-3xl">Newsletter</h2>
        <div className="py-4 text-sm font-light sm:py-6 lg:py-8 lg:text-base lg:font-normal">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius recusandae modi quis, illo numquam neque, quos non distinctio voluptas rem repudiandae velit cupiditate omnis ex placeat odio repellat vel aliquam?
        </div>
        <form>
          <div className={styles.checkboxfield}>
            <label className="flex items-start justify-start">
              <div className="mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border-2 border-gray-500 bg-white focus-within:border-blue-500 dark:bg-black">
                <input {...register('datenschutz', { required: true })} type="checkbox" className={styles.checkbox} id="datenschutz" name="datenschutz" />
                <svg className="pointer-events-none hidden h-3 w-3 fill-current text-secondary dark:text-secondary-dark" viewBox="0 0 20 20">
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
              <div className={['mb-2 block text-xs tracking-wide select-none', errors.datenschutz ? 'text-red-700 dark:text-red-500' : 'dark:text-gray-500'].join(' ')}>
                Ich habe die <Link href="/datenschutz/">Datenschutzerklärung</Link> gelesen und bin mit der Speicherung/Verarbeitung meiner Kontaktdaten zum Zweck der Kontaktaufnahme einverstanden.
              </div>
            </label>
          </div>
          <div className={cn(styles.formfield, 'mt-2')}>
            {errors.email && errors.email.type === 'required' && (
              <div className="-mt-2 mb-2 text-right text-xs text-red-700 dark:text-red-500" role="alert">
                Die E-Mail Adresse muss eingeben werden.
              </div>
            )}
            <input
              {...register('email', { required: true })}
              className={errors.email ? styles.textinputerror : styles.textinput}
              id="email"
              name="email"
              type="email"
              placeholder="E-Mail Adresse"
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-label="E-Mail Adresse für Newsletter"
            />
          </div>
          <div className="my-4 text-right">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-sm bg-secondary px-8 py-2 text-sm tracking-wider text-gray-200 uppercase transition duration-150 ease-in-out hover:bg-secondary/75 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-secondary-dark"
              aria-label={isSubmitting ? 'Newsletter wird abonniert...' : 'Newsletter abonnieren'}
            >
              {isSubmitting ? 'Wird abonniert...' : 'Abonnieren'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Newsletter;
