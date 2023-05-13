import { Popover } from '@/components/Popover/Popover';
import { useAppSelector } from '@/hooks/redux';

// @ts-ignore
export const LabelMenu = ({ coords, updateTooltipCoords }) => {
  const { labels } = useAppSelector((state) => state.user);

  return (
    <Popover coords={coords} updateTooltipCoords={updateTooltipCoords}>
      <div>
        <h3>Label Note</h3>
        {/* Add search */}
        {labels?.map(({ labelId, labelName }) => {
          return <input key={labelId} type='checkbox' value={labelName} />;
        })}
      </div>
    </Popover>
  );
};
