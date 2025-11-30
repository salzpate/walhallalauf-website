'use client';

import { JSX } from 'react';
import axios, { AxiosError, AxiosResponse, RawAxiosRequestConfig } from 'axios';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { cn } from '@/lib/cn';
import { SnackBarTypes, useSnackBar } from '@/components/SnackBar/SnackBar';

interface MailSendData {
  status: string;
  message: string;
}

interface ContactFormProps {
  url: string;
  style?: string;
}

interface ContactFormData {
  email: string;
  name: string;
  antwort: string;
  nachricht: string;
  datenschutz: boolean;
}

function ContactForm(props: Readonly<ContactFormProps>): JSX.Element {
  const { openSnackbar } = useSnackBar();
  const { style, url } = props;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    mode: 'onBlur',
  });
  const onSubmit = (data: ContactFormData) => {
    const config: RawAxiosRequestConfig = {
      method: 'post',
      url: url,
      headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-cache', Pragma: 'no-cache', Expires: '0' },
      data: data,
    };
    axios(config).then(
      (response: AxiosResponse<MailSendData>) => {
        if (response?.data.status === 'success') {
          openSnackbar(response?.data.message, SnackBarTypes.success, 8000);
        } else if (response?.data.status === 'error') {
          openSnackbar(response?.data.message, SnackBarTypes.error, 8000);
        } else {
          openSnackbar(response?.data.message, SnackBarTypes.warning, 8000);
        }
      },
      (error: AxiosError<MailSendData>) => {
        openSnackbar(error.response?.status + ' Die Nachricht konnte nicht verschickt werden!', SnackBarTypes.error, 10000);
      },
    );
  };

  const getInputClass = (hasError: boolean) => {
    return cn(
      'mb-3 block w-full appearance-none rounded border px-4 py-3 leading-tight transition-all duration-150 ease-in-out',
      style === 'white' ? 'bg-white' : 'bg-gray-100',
      hasError ? 'border-red-700 dark:border-red-500' : 'border-gray-500',
      'text-gray-800 hover:border-secondary focus:border-secondary focus:outline-none dark:bg-black dark:text-gray-300 dark:hover:border-secondary-dark dark:focus:border-secondary-dark',
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="hidden">
        <input {...register('email')} id="email" type="email" name="email" placeholder="E-Mail-Adresse eingeben" />
      </div>
      <div className="mb-2 flex w-full flex-col-reverse">
        {errors.name && errors.name.type === 'required' && (
          <div className="-mt-2 mb-2 text-right text-xs text-red-700 dark:text-red-500" role="alert">
            Der Name muss eingeben werden.
          </div>
        )}
        <input {...register('name', { required: true })} className={getInputClass(!!errors.name)} id="name" name="name" type="text" placeholder="Namen eingeben" aria-required="true" aria-invalid={!!errors.name} />
        <label className={cn('mb-2 block text-xs font-medium tracking-wide dark:text-gray-500', errors.name && 'hover:text-secondary focus:text-secondary dark:hover:text-secondary-dark dark:focus:text-secondary-dark')} htmlFor="name">
          Name <sup className="text-red-700">*</sup>
        </label>
      </div>
      <div className="mb-2 flex w-full flex-col-reverse">
        {errors.antwort && errors.antwort.type === 'required' && (
          <div className="-mt-2 mb-2 text-right text-xs text-red-700 dark:text-red-500" role="alert">
            Die E-Mail Adresse muss eingeben werden.
          </div>
        )}
        <input {...register('antwort', { required: true })} className={getInputClass(!!errors.antwort)} id="antwort" name="antwort" type="email" placeholder="E-Mail Adresse" aria-required="true" aria-invalid={!!errors.antwort} />
        <label className={cn('mb-2 block text-xs font-medium tracking-wide dark:text-gray-500', errors.antwort && 'hover:text-secondary focus:text-secondary dark:hover:text-secondary-dark dark:focus:text-secondary-dark')} htmlFor="antwort">
          E-Mail <sup className="text-red-700">*</sup>
        </label>
      </div>
      <div className="mb-2 flex w-full flex-col-reverse">
        {errors.nachricht && errors.nachricht.type === 'required' && (
          <div className="-mt-2 mb-2 text-right text-xs text-red-700 dark:text-red-500" role="alert">
            Es muss eine Nachricht eingeben werden.
          </div>
        )}
        <textarea
          {...register('nachricht', { required: true })}
          className={getInputClass(!!errors.nachricht)}
          id="nachricht"
          name="nachricht"
          rows={4}
          cols={40}
          placeholder="Nachricht eingeben"
          aria-required="true"
          aria-invalid={!!errors.nachricht}
        />
        <label
          className={cn('mb-2 block text-xs font-medium tracking-wide dark:text-gray-500', errors.nachricht && 'hover:text-secondary focus:text-secondary dark:hover:text-secondary-dark dark:focus:text-secondary-dark')}
          htmlFor="nachricht"
        >
          Nachricht <sup className="text-red-700">*</sup>
        </label>
      </div>
      <div className="flex w-full">
        <label className="flex items-start justify-start">
          <div className="mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border-2 border-gray-500 bg-white focus-within:border-blue-500 dark:bg-black">
            <input {...register('datenschutz', { required: true })} type="checkbox" className="peer absolute opacity-0" id="datenschutz" name="datenschutz" />
            <svg className="pointer-events-none hidden h-3 w-3 fill-current text-secondary peer-checked:block dark:text-secondary-dark" viewBox="0 0 20 20">
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          </div>
          <div className={cn('mb-2 block text-xs tracking-wide select-none', errors.datenschutz ? 'text-red-700 dark:text-red-500' : 'dark:text-gray-500')}>
            Ich habe die{' '}
            <Link href="/datenschutz/" className="text-secondary no-underline transition-all duration-150 ease-in-out hover:underline hover:decoration-dotted">
              Datenschutzerklärung
            </Link>{' '}
            gelesen und bin mit der Speicherung/Verarbeitung meiner Kontaktdaten zum Zweck der Kontaktaufnahme einverstanden.
          </div>
        </label>
      </div>
      {errors.datenschutz && errors.datenschutz.type === 'required' && (
        <div className="-mt-2 mb-2 text-right text-xs text-red-700 dark:text-red-500" role="alert">
          Die Datenschutzerklärung muss als gelesen bestätigt werden.
        </div>
      )}
      <div className="my-4 text-right">
        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer rounded-sm bg-secondary px-8 py-2 text-sm tracking-wider text-gray-200 uppercase transition duration-150 ease-in-out hover:bg-secondary/75 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-secondary-dark"
          aria-label={isSubmitting ? 'Nachricht wird gesendet...' : 'Nachricht senden'}
        >
          {isSubmitting ? 'Wird gesendet...' : 'Senden'}
        </button>
      </div>
    </form>
  );
}
export default ContactForm;
