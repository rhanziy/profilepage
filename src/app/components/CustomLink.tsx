import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as styles from './header/header.css';

function CustomLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive =
    pathname === href || (pathname === '/reviews' && href.includes('/reviews'));

  return (
    <Link href={href} scroll={false} className={isActive ? styles.active : ''}>
      {children}
    </Link>
  );
}

export default CustomLink;
