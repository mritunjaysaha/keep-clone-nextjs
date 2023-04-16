import { MdLabelOutline } from 'react-icons/md';
import { useQuery } from 'react-query';

import { NavButtons } from '@/components/NavSide/components/NavButtons';
import ROUTES from '@/constants/routes.json';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useNavSide } from '@/hooks/useNavSide';
import { setLabels } from '@/redux/slices/userSlice';
import { getAllLabelsByUserId } from '@/request/httpCalls/labels/getAllLabelsByUserId';
import type { Label } from '@/types/labels/Label';

export function UserCreatedLabels() {
  const { email } = useAppSelector((state) => state.user);
  const { isNavSideClose } = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();

  const { checkIsCurrentPage, handleButtonNavClick } = useNavSide();

  const { isLoading, data, isError } = useQuery('allLabels', async () => {
    const res = await getAllLabelsByUserId(email);
    console.log({ res });
    if (res) {
      dispatch(setLabels(res));
    }

    return res;
  });

  if (isLoading) return <>Loading...</>;

  if (isError) return <>Error</>;

  return (
    <>
      {data.map(({ labelName, labelId }: Label) => {
        const labelRoute = `${ROUTES.LABELS}/${labelId}`;

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
