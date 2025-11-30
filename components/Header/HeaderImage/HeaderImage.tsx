import { JSX, PropsWithChildren } from 'react';
import { cn } from '@/lib/cn';
import { AnmeldungData, ErgebnisseData, StarterListeData } from '@/data/TimingPartnerData';

interface HeaderImageProps {
  imageClass?: string;
  text1?: string;
  text2?: string;
}

type TimingPartnerDataItem = {
  id: string;
  name: string;
  link: string;
};

function HeaderImage(props: Readonly<PropsWithChildren<HeaderImageProps>>): JSX.Element {
  const { imageClass, text1, text2, children } = props;

  if (children) {
    return <div className={cn('min-h-60 bg-transparent bg-cover bg-scroll bg-center bg-no-repeat sm:min-h-80 lg:min-h-[360px] dark:grayscale-60', imageClass)}>{children}</div>;
  } else {
    return (
      <div className={cn('min-h-60 bg-transparent bg-cover bg-scroll bg-center bg-no-repeat sm:min-h-80 lg:min-h-[360px] dark:grayscale-60', imageClass)}>
        <div className="flex flex-wrap">
          <section className="absolute w-full">
            <div className="mx-auto flex max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative mt-14 w-full sm:mt-32">
                <div className="md:flex">
                  <div className="grow">
                    <div className="pl-6">
                      <span className="bg-secondary px-6 text-xl font-bold tracking-tight text-white uppercase sm:text-3xl lg:text-4xl">{text1}</span>
                    </div>
                    <div className="mt-2 pl-16">
                      <span className="bg-secondary px-6 text-xl font-bold tracking-tight text-white uppercase sm:text-3xl lg:text-4xl">{text2}</span>
                    </div>
                  </div>
                  <div className="absolute mt-10 px-6 md:right-6 md:mt-0 md:px-0">
                    {AnmeldungData && (
                      <div className="float-left md:float-none">
                        <a
                          className="inline-block rounded-sm border border-white bg-secondary px-4 py-1 tracking-wider text-white transition duration-150 ease-in-out hover:bg-secondary/75 sm:text-2xl md:w-40"
                          href={AnmeldungData.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {AnmeldungData.name}
                        </a>
                      </div>
                    )}
                    {StarterListeData && (
                      <div className="float-left px-6 md:right-6 md:float-none md:mt-2 md:px-0">
                        <a
                          className="inline-block rounded-sm border border-white bg-secondary px-4 py-1 tracking-wider text-white transition duration-150 ease-in-out hover:bg-secondary/75 sm:text-2xl md:w-40"
                          href={StarterListeData.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {StarterListeData.name}
                        </a>
                      </div>
                    )}
                    {ErgebnisseData && (
                      <div className="float-left px-6 md:right-6 md:float-none md:mt-2 md:px-0">
                        <a
                          className="inline-block rounded-sm border border-white bg-secondary px-4 py-1 tracking-wider text-white transition duration-150 ease-in-out hover:bg-secondary/75 sm:text-2xl md:w-40"
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
export type { TimingPartnerDataItem };
