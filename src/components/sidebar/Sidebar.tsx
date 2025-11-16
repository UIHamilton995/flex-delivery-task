import styles from './Sidebar.module.css';
import {
  LayoutDashboard,
  Users,
  Box,
  Award,
  MessageSquareWarning,
  Receipt,
  LifeBuoy,
  Settings,
  Rss,
  FileText,
  ClipboardList,
  ArrowLeftToLine,
  ChevronDown,
  Icon,
} from 'lucide-react';
import logo from '../../assets/flexLogo.png'

// --- TYPE DEFINITIONS ---

type Icon = Doc<'icon'>

type NavSubItem = {
  id: string;
  label: string;
  href: string;
  count?: number;
  active?: boolean;
};

type NavItem = {
  id: string;
  label: string;
  href: string;
  icon: Icon;
  count?: number;
  active?: boolean;
  children?: NavSubItem[];
};

// --- NAVIGATION DATA ---
// Data is derived directly from your image
const navItems: NavItem[] = [
  { id: 'dash', label: 'Dashboard', icon: LayoutDashboard, href: '#' },
  { id: 'users', label: 'Users', icon: Users, href: '#', count: 6 },
  {
    id: 'listings',
    label: 'All Listings',
    icon: Box,
    href: '#',
    active: true, // Parent is active
    children: [
      { id: 'jobs', label: 'Delivery Jobs', href: '#', count: 2 },
      { id: 'offers', label: 'Delivery Offers', href: '#' },
      {
        id: 'market',
        label: 'Marketplace',
        href: '#',
        count: 5,
        active: true, // Sub-item is active
      },
    ],
  },
  { id: 'reward', label: 'Flex Reward', icon: Award, href: '#' },
  { id: 'disputes', label: 'Disputes', icon: MessageSquareWarning, href: '#' },
  {
    id: 'transactions',
    label: 'Transactions',
    icon: Receipt,
    href: '#',
    children: [], // Assuming it's a dropdown, just empty
  },
  {
    id: 'support1',
    label: 'User Support Ticket',
    icon: LifeBuoy,
    href: '#',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    href: '#',
    children: [], // Assuming it's a dropdown, just empty
  },
  {
    id: 'support2',
    label: 'User Support Ticket',
    icon: LifeBuoy,
    href: '#',
  },
  { id: 'blog', label: 'Blog & Broadcast', icon: Rss, href: '#' },
  { id: 'templates', label: 'Templates', icon: FileText, href: '#' },
  { id: 'audit', label: 'Audit Logs', icon: ClipboardList, href: '#' },
];

// --- HELPER COMPONENTS ---

/**
 * Renders the orange notification badge
 */
const Badge = ({ count }: { count: number }) => (
  <span className={styles.badge}>{count}</span>
);

/**
 * Renders a standard, non-dropdown navigation link
 */
const NavLink = ({ item }: { item: NavItem }) => (
  <a
    href={item.href}
    className={`${styles.navItem} ${item.active ? styles.active : ''}`}
  >
    <item.icon size={20} />
    <span>{item.label}</span>
    {item.count && <Badge count={item.count} />}
  </a>
);

/**
 * Renders a dropdown container with sub-items
 */
const NavDropdown = ({ item }: { item: NavItem }) => (
  <div className={styles.navDropdown}>
    {/* Parent Item */}
    <div className={`${styles.navItem} ${item.active ? styles.active : ''}`}>
      <item.icon size={20} />
      <span>{item.label}</span>
      <ChevronDown size={20} />
    </div>
    {/* Sub-Items */}
    <div className={styles.navSubmenu}>
      {item.children?.map((child) => (
        <a
          key={child.id}
          href={child.href}
          className={`${styles.navSubItem} ${child.active ? styles.active : ''}`}
        >
          <span>{child.label}</span>
          {child.count && <Badge count={child.count} />}
        </a>
      ))}
    </div>
  </div>
);


export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      {/* Header with Logo */}
      <header className={styles.sidebarHeader}>
        <img className={styles.logo} src={logo} alt="" />
        <button className={styles.collapseBtn}>
          <ArrowLeftToLine size={16} />
        </button>
      </header>

      {/* Navigation Area */}
      <nav className={styles.sidebarNav}>
        <div className={styles.navContainer}>
          {navItems.map((item) =>
            item.children ? (
              <NavDropdown key={item.id} item={item} />
            ) : (
              <NavLink key={item.id} item={item} />
            )
          )}
        </div>
      </nav>

      {/* Footer with Version Info */}
      <footer className={styles.sidebarFooter}>
        <div className={styles.versionInfo}>
          <span className={styles.devBadge}>Dev</span>
          <span className={styles.versionText}>v2.0</span>
        </div>
      </footer>
    </aside>
  );
};