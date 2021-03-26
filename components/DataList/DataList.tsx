import { PropsWithChildren, ReactNode } from 'react';

type DataListProps = {
  headline: ReactNode;
};

function DataList(props: PropsWithChildren<DataListProps>): JSX.Element {
  const { headline, children } = props;

  return (
    <div className="w-full space-y-2 pb-4 md:inline-flex md:space-y-0">
      <h2 className="md:w-1/4 font-bold">{headline}</h2>
      <div className="md:w-3/4">{children}</div>
    </div>
  );
}
export default DataList;
