import { PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './HeaderImage.module.css';

type HeaderImageProps = {
  imageClass?: string;
  text1?: string;
  text2?: string;
};

function HeaderImage(props: PropsWithChildren<HeaderImageProps>): JSX.Element {
  const { imageClass, text1, text2, children } = props;

  if (children) {
    return <div className={cn(styles.headerimage, 'bg-no-repeat bg-cover bg-center bg-scroll bg-transparent', imageClass)}>{children}</div>;
  } else {
    return (
      <div className={cn(styles.headerimage, 'bg-no-repeat bg-cover bg-center bg-scroll bg-transparent', imageClass)}>
        <section className="w-full absolute">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative mt-14 sm:mt-32">
              <div className="pl-6">
                <span className="uppercase text-white px-6 text-xl tracking-tight font-bold sm:text-3xl lg:text-4xl bg-secondary">{text1}</span>
              </div>
              <div className="pl-16 mt-3 sm:mt-4">
                <span className="uppercase line-through text-white px-6 text-xl tracking-tight font-bold sm:text-3xl lg:text-4xl bg-secondary">{text2}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default HeaderImage;
