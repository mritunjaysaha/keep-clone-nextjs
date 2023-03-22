import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BsBell, BsLightbulb, BsPencil } from 'react-icons/bs';
import { HiOutlineTrash } from 'react-icons/hi';
import { MdLabelOutline } from 'react-icons/md';
import { RiInboxArchiveLine } from 'react-icons/ri';

import { NavButtons } from '@/components/NavSide/components/NavButtons';
import ROUTES from '@/constants/routes.json';
import { useAppSelector } from '@/hooks/redux';
import { useNavSide } from '@/hooks/useNavSide';

export function NavSide() {
  const { isNavSideClose } = useNavSide();
  const router = useRouter();
  const { id } = useAppSelector((state) => state.user);

  function handleButtonNavClick(page: string) {
    router.push(page);
  }

  function checkIsCurrentPage(page: string): boolean {
    console.log(router.pathname, page);
    return decodeURI(router.pathname).includes(page);
  }

  const [labels, setLabels] = useState([]);
  async function getAllLabel() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await axios.get(`${baseUrl}/api/label/${id}/all`);
    console.log({ res });

    setLabels(res.data);
  }

  useEffect(() => {
    if (id) {
      getAllLabel();
    }
  }, [id]);

  return (
    <section className={`flex flex-col ${isNavSideClose ? 'w-12' : 'w-60'} h-full`}>
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
      {labels.map(({ labelName }, index) => (
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
      ))}
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
