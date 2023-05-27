import { Popover } from '@/components/Popover/Popover';
import { useAppSelector } from '@/hooks/redux';

// @ts-ignore
export const LabelMenu = ({ coords, selectedLabels, handleSelectedLabels }) => {
  const { labels, labelIds } = useAppSelector((state) => state.user);

  console.log('[LabelMenu]', { coords, labels });
  return (
    <Popover
      coords={coords}
      updateCoords={() => {
        console.log('[LabelMenu] add updateCoords');
      }}
    >
      <div className='w-32 border bg-light p-2 text-sm dark:bg-dark dark:text-light'>
        <h3 className='mb-2 font-medium'>Label Note</h3>
        {/* Add search */}
        <form className='flex flex-col text-sm'>
          {labelIds?.map((labelId) => {
            const labelName = labels[labelId]?.labelName;

            return (
              <label
                key={labelId}
                className='flex items-center gap-1 text-slate-500'
              >
                <input
                  id={labelId}
                  type='checkbox'
                  value={labelName}
                  name={labelName}
                  checked={!!selectedLabels[labelId]}
                  onChange={handleSelectedLabels}
                />
                {labelName}
              </label>
            );
          })}
        </form>
      </div>
    </Popover>
  );
};
