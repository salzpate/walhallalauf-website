'use client';

import { JSX } from 'react';

import { AnmeldungData, ErgebnisseData, StarterListeData } from '@/data/TimingPartnerData';
import { ButtonLink } from '@salzpate/react-ui';

function TimingButtons(): JSX.Element {
  return (
    <>
      {AnmeldungData && (
        <ButtonLink href={AnmeldungData.link} target="_blank">
          {AnmeldungData.name}
        </ButtonLink>
      )}
      {StarterListeData && (
        <span className="pl-4">
          <ButtonLink href={StarterListeData.link} target="_blank">
            {StarterListeData.name}
          </ButtonLink>
        </span>
      )}
      {ErgebnisseData && (
        <span className="pl-4">
          <ButtonLink href={ErgebnisseData.link} target="_blank">
            {ErgebnisseData.name}
          </ButtonLink>
        </span>
      )}
    </>
  );
}

export default TimingButtons;
