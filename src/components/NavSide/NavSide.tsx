import { useRouter } from 'next/dist/client/router';
import { BsBell, BsLightbulb, BsPencil } from 'react-icons/bs';
import { HiOutlineTrash } from 'react-icons/hi';
import { RiInboxArchiveLine } from 'react-icons/ri';

import { NavButtons } from '@/components/NavSide/components/NavButtons';
import ROUTES from '@/constants/routes.json';
import { useNavSide } from '@/hooks/useNavSide';

export function NavSide() {
  const {
    isNavSideClose,
    isMenuClicked,
    handleMouseEnter,
    handleMouseLeave,
    handleButtonNavClick,
    checkIsCurrentPage,
  } = useNavSide();

  const router = useRouter();

  // const { id } = useAppSelector((state) => state.user);

  // const [labels, setLabels] = useState([]);
  // // async function useGetAllLabel() {
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  // const { isLoading, error, data, isFetching } = useQuery({
  //   queryFn: () => axiosInstance.get(`/api/label/${id}/all`).then((res) => res.data),
  // });

  // console.log({ data, isLoading, error, isFetching });
  // setLabels(data);
  // }

  // useEffect(() => {
  //   if (id) {
  //     getAllLabel();
  //   }
  // }, [id]);

  return (
    <section
      className={`flex flex-col ${isNavSideClose ? 'w-16 items-center' : 'w-60'} h-full pt-2 ${
        !isMenuClicked ? 'hover:shadow-xl' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavButtons
        icon={BsLightbulb}
        label='Notes'
        isActive={!router.pathname.split('/')[1]}
        isNavSideClose={isNavSideClose}
        onClick={() => {
          handleButtonNavClick(ROUTES.HOME);
        }}
      />

      <NavButtons
        icon={BsBell}
        label='Reminders'
        isActive={checkIsCurrentPage(ROUTES.REMINDERS)}
        isNavSideClose={isNavSideClose}
        onClick={() => {
          handleButtonNavClick(ROUTES.REMINDERS);
        }}
      />

      {/* REST OF THE LABELS WILL GO HERE */}
      {/* {labels.map(({ labelName }, index) => (
        <NavButtons
          key={index}
          icon={MdLabelOutline}
          label={labelName}
          isActive={checkIsCurrentPage(`${ROUTES.LABELS}/${labelName}`)}
          isNavSideClose={isNavSideClose}
          onClick={() => {
            handleButtonNavClick(`${ROUTES.LABELS}/${labelName}`);
          }}
        />
      ))} */}
      {/* REST OF THE LABELS WILL GO HERE */}

      <NavButtons
        icon={BsPencil}
        label='Edit Labels'
        isActive={false}
        isNavSideClose={isNavSideClose}
        onClick={() => {
          // handleButtonNavClick(ROUTES.LABELS);
        }}
      />

      <NavButtons
        icon={RiInboxArchiveLine}
        label='Archive'
        isActive={checkIsCurrentPage(ROUTES.ARCHIVE)}
        isNavSideClose={isNavSideClose}
        onClick={() => {
          handleButtonNavClick(ROUTES.ARCHIVE);
        }}
      />

      <NavButtons
        icon={HiOutlineTrash}
        label='Trash'
        isActive={checkIsCurrentPage(ROUTES.TRASH)}
        isNavSideClose={isNavSideClose}
        onClick={() => {
          handleButtonNavClick(ROUTES.TRASH);
        }}
      />
    </section>
  );
}
