import { MdLabelOutline } from 'react-icons/md';

import { NavButtons } from '@/components/NavSide/components/NavButtons';
import ROUTES from '@/constants/routes.json';
import { useAppSelector } from '@/hooks/redux';
import { useNavSide } from '@/hooks/useNavSide';
import type { Label } from '@/types/labels/Label';

export function UserCreatedLabels() {
  const { isNavSideClose } = useAppSelector((state) => state.global);
  const { checkIsCurrentPage, handleButtonNavClick } = useNavSide();
  const { labels } = useAppSelector((state) => state.user);

  return (
    <>
      {Object.keys(labels).map((labelId) => {
        const labelRoute = `${ROUTES.LABELS}/${labelId}`;
        const { labelName } = labels[labelId] as Label;

        return (
          <NavButtons
            key={labelId}
            icon={MdLabelOutline}
            label={labelName}
            isActive={checkIsCurrentPage(labelRoute)}
            isNavSideClose={isNavSideClose}
            onClick={() => {
              handleButtonNavClick(labelRoute);
            }}
          />
        );
      })}
    </>
  );
}
