import Button from '@/app/components/Button';
import Stack from '@/app/components/Stack';
import Link from 'next/link';

function Buttons() {
  return (
    <Stack $direction="horizontal" $mobileDirection="vertical" $gap="24px">
      <Link href="#">
        <Button $color="primary">مشاوره میخوام</Button>
      </Link>
      <Link href="#">
        <Button $outline>فرم تماس با ما</Button>
      </Link>
    </Stack>
  );
}

export default Buttons;
