import { JSX, PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './HeaderImage.module.css';
import { AnmeldungData, ErgebnisseData, StarterListeData } from '@/data/TimingPartnerData';

type HeaderImageProps = {
  imageClass?: string;
  text1?: string;
  text2?: string;
};

export type TimingPartnerDataItem =
  | {
      id: string;
      name: string;
      link: string;
    }
  | undefined;

function HeaderImage(props: PropsWithChildren<HeaderImageProps>): JSX.Element {
  const { imageClass, text1, text2, children } = props;

  if (children) {
    return <div className={cn(styles.headerimage, 'bg-no-repeat bg-cover bg-center bg-scroll bg-transparent', imageClass)}>{children}</div>;
  } else {
    return (
      <div className={cn(styles.headerimage, 'bg-no-repeat bg-cover bg-center bg-scroll bg-transparent', imageClass)}>
        <div className="flex flex-wrap">
          <section className="w-full absolute">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex">
              <div className="relative mt-14 sm:mt-32 w-full">
                <div className="md:flex">
                  <div className="grow">
                    <div className="pl-6">
                      <span className="uppercase text-white px-6 text-xl tracking-tight font-bold sm:text-3xl lg:text-4xl bg-secondary">{text1}</span>
                    </div>
                    <div className="pl-16 mt-2">
                      <span className="uppercase text-white px-6 text-xl tracking-tight font-bold sm:text-3xl lg:text-4xl bg-secondary">{text2}</span>
                    </div>
                  </div>
                  <div className="absolute mt-10 px-6 md:px-0 md:mt-0 md:right-6">
                    {AnmeldungData && (
                      <div className="float-left md:float-none">
                        <a
                          className="text-white sm:text-2xl tracking-wider py-1 px-4 border border-white rounded transition ease-in-out duration-150 bg-secondary hover:bg-opacity-75 md:w-40 inline-block"
                          href={AnmeldungData.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {AnmeldungData.name}
                        </a>
                      </div>
                    )}
                    {StarterListeData && (
                      <div className="float-left px-6 md:px-0 md:right-6 md:mt-2 md:float-none">
                        <a
                          className="text-white sm:text-2xl tracking-wider py-1 px-4 border border-white rounded transition ease-in-out duration-150 bg-secondary hover:bg-opacity-75 md:w-40 inline-block"
                          href={StarterListeData.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {StarterListeData.name}
                        </a>
                      </div>
                    )}
                    {ErgebnisseData && (
                      <div className="float-left px-6 md:px-0 md:right-6 md:mt-2 md:float-none">
                        <a
                          className="text-white sm:text-2xl tracking-wider py-1 px-4 border border-white rounded transition ease-in-out duration-150 bg-secondary hover:bg-opacity-75 md:w-40 inline-block"
                          href={ErgebnisseData.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {ErgebnisseData.name}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default HeaderImage;
