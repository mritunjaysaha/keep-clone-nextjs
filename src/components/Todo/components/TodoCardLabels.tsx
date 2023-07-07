import { LinkLabel } from '@/components/TakeANote/components/LinkLabel';
import ROUTES from '@/constants/routes.json';
import { useAppSelector } from '@/hooks/redux';

export const TodoCardLabels = () => {
  const { labelIds, labels } = useAppSelector((state) => state.user);

  if (!labelIds.length) return <></>;

  return (
    <div className='flex items-center gap-2'>
      {labelIds.map((labelId, index) => {
        return (
          index < 2 && (
            <LinkLabel
              key={labelId}
              labelName={labels[labelId]?.labelName as string}
              removeLabelHandler={() => {}}
              href={`${ROUTES.LABELS}/${labelId}`}
            />
          )
        );
      })}
      {labelIds.length > 2 && (
        <div className='flex h-8 items-center justify-center border-0 border-gray-700 bg-slate-300 px-2 dark:border dark:border-light dark:bg-inherit'>
          +{labelIds.length - 2}
        </div>
      )}
    </div>
  );
};
