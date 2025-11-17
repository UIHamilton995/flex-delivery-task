import { useState } from 'react';
import styles from './Marketplace.module.css';
import {
  Upload,
  Search,
  RefreshCcw,
  ArrowUpDown,
  Filter,
  Columns,
  Calendar,
  ChevronDown,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- TYPE DEFINITIONS FOR TABLE DATA ---
type AdStatus = 'Pending' | 'Active' | 'Rejected';

type AdListing = {
  id: number;
  adId: number;
  sellerName: string;
  askingPrice: string;
  itemLocation: string;
  sellingMode: string;
  adTitle: string;
  creationDate: string;
  status: AdStatus;
};

// --- MOCK DATA (from your image) ---
const mockData: AdListing[] = [
  {
    id: 1,
    adId: 3,
    sellerName: 'sdvfa vfv ydfigwe',
    askingPrice: '₦1,000',
    itemLocation: 'Egbeda',
    sellingMode: 'P. Protection, D. Contact',
    adTitle: 'Used Iphone 12',
    creationDate: '12th Oct. 2025',
    status: 'Pending',
  },
  {
    id: 2,
    adId: 556,
    sellerName: 'asdv sf',
    askingPrice: '₦1,000',
    itemLocation: 'Egbeda',
    sellingMode: 'P. Protection, D. Contact',
    adTitle: 'New Fan Bosch',
    creationDate: '12th Oct. 2025',
    status: 'Pending',
  },
  {
    id: 3,
    adId: 88,
    sellerName: 'jude ehstnzhd',
    askingPrice: '₦1,000',
    itemLocation: 'Egbeda',
    sellingMode: 'Payment Protection',
    adTitle: 'Fairly Used phone',
    creationDate: '12th Oct. 2025',
    status: 'Pending',
  },
  {
    id: 4,
    adId: 89,
    sellerName: 'v svs v v',
    askingPrice: '₦1,000',
    itemLocation: 'Egbeda',
    sellingMode: 'P. Protection, D. Contact',
    adTitle: 'Car Tyres',
    creationDate: '12th Oct. 2025',
    status: 'Pending',
  },
  {
    id: 5,
    adId: 77,
    sellerName: 'jude ehstnzhd',
    askingPrice: '₦1,000',
    itemLocation: 'Egbeda',
    sellingMode: 'Payment Protection',
    adTitle: 'Fairly Used phone',
    creationDate: '12th Oct. 2025',
    status: 'Pending',
  },
  {
    id: 6,
    adId: 49,
    sellerName: 'v svs v v',
    askingPrice: '₦1,000',
    itemLocation: 'Egbeda',
    sellingMode: 'P. Protection, D. Contact',
    adTitle: 'Car Tyres',
    creationDate: '12th Oct. 2025',
    status: 'Pending',
  },
];

// --- HELPER COMPONENTS ---

// Custom Select Input
const CustomSelect = ({ label }: { label: string }) => (
  <div className={styles.formGroup}>
    <label>{label}</label>
    <div className={styles.customSelect}>
      <span>Any</span>
      <ChevronDown size={20} />
    </div>
  </div>
);

// Custom Date Input
const CustomDateInput = ({ label, placeholder }: { label?: string; placeholder: string }) => (
  <div className={styles.formGroup}>
    {label && <label>{label}</label>}
    <div className={styles.customInput}>
      <span>{placeholder}</span>
      <Calendar size={16} />
    </div>
  </div>
);

// Custom Text Input
const CustomTextInput = ({ label, placeholder }: { label?: string; placeholder: string }) => (
  <div className={styles.formGroup}>
    {label && <label>{label}</label>}
    <div className={styles.customInput}>
      <span>{placeholder}</span>
    </div>
  </div>
);

// Status Badge
const StatusBadge = ({ status }: { status: AdStatus }) => (
  <div className={`${styles.statusBadge} ${styles[status.toLowerCase()]}`}>
    {status}
  </div>
);

// Pagination Component
const Pagination = () => (
  <div className={styles.pagination}>
    <div className={styles.paginationPerPage}>
      <span>Items per page</span>
      <div className={styles.paginationSelect}>
        1000
        <ChevronDown size={16} />
      </div>
    </div>
    <div className={styles.paginationControls}>
      <span>1 - 10 of 50</span>
      <button>
        <ChevronsLeft size={16} />
        First
      </button>
      <button>
        <ChevronLeft size={16} />
      </button>
      <button>
        <ChevronRight size={16} />
      </button>
      <button>
        Last
        <ChevronsRight size={16} />
      </button>
    </div>
  </div>
);

// --- MAIN COMPONENT ---
export const MarketplacePage = () => {
  // State to toggle advanced filter
  const [filterOpen, setFilterOpen] = useState(true);

  return (
    <div className={styles.marketplacePage}>
      
      {/* --- 1. PAGE HEADER --- */}
      <header className={styles.pageHeader}>
        <h1>Marketplace</h1>
        <button className={styles.exportButton}>
          <Upload size={20} />
          <span>Export</span>
        </button>
      </header>

      {/* --- 2. MAIN CONTENT CONTAINER --- */}
      <div className={styles.contentContainer}>
        
        {/* --- 3. OVERVIEW SECTION --- */}
        <section className={styles.overviewSection}>
          <h2>Overview</h2>
          <div className={styles.overviewGrid}>
            <div className={styles.statBlock}>
              <label>Total created</label>
              <span>107</span>
            </div>
            <div className={styles.statBlock}>
              <label>Total active</label>
              <span>70</span>
            </div>
            <div className={styles.statBlock}>
              <label>Total Sold with Payment Protection</label>
              <span>27</span>
            </div>
            <div className={styles.statBlock}>
              <label>Total Sold w/o Payment Protection</label>
              <span>10</span>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* --- 4. TOOLBAR SECTION --- */}
        <div className={styles.toolbar}>
          <div className={styles.searchAssets}>
            <Search size={16} />
            <input type="text" placeholder="Search assets" />
          </div>
          <div className={styles.toolbarActions}>
            <button className={styles.toolbarButton}>
              <RefreshCcw size={16} />
              <span>Reset</span>
            </button>
            <button className={styles.toolbarButton}>
              <ArrowUpDown size={16} />
              <span>Sort</span>
            </button>
            <button 
              className={styles.toolbarButton} 
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <Filter size={16} />
              <span>Advanced filter</span>
            </button>
            <button className={styles.toolbarButton}>
              <Columns size={16} />
              <span>Select Columns</span>
            </button>
            <button className={styles.dateButton}>
              <Calendar size={16} />
              <span>Date</span>
            </button>
          </div>
        </div>

        {/* --- 5. ADVANCED FILTER SECTION --- */}
        {filterOpen && (
          <section className={styles.advancedFilter}>
            <h3>Advanced filter</h3>
            
            <div className={styles.filterGrid}>
              {/* Row 1 */}
              <CustomSelect label="Item Title" />
              <CustomSelect label="Location" />
              <CustomSelect label="Ad Selling Mode" />
              <CustomSelect label="Status" />

              {/* Row 2 - Spanning 2 columns each */}
              <div className={`${styles.formGroup} ${styles.span2}`}>
                <label>Price Range</label>
                <div className={styles.inputGroup}>
                  <CustomTextInput placeholder="From: Minimum Amount" />
                  <CustomTextInput placeholder="To: Maximum Amount" />
                </div>
              </div>
              
              <div className={`${styles.formGroup} ${styles.span2}`}>
                <label>Creation Date Range</label>
                <div className={styles.inputGroup}>
                  <CustomDateInput placeholder="From dd/mm/yyyy:" />
                  <CustomDateInput placeholder="To dd/mm/yyyy:" />
                </div>
              </div>
            </div>

            {/* Filter Actions */}
            <div className={styles.filterActions}>
              <button className={styles.resetButton}>Reset</button>
              <button className={styles.applyButton}>Apply filter</button>
            </div>
          </section>
        )}

        {/* --- 6. DATA TABLE SECTION --- */}
        <section className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Ad ID</th>
                <th>Seller Name</th>
                <th>Asking Price</th>
                <th>Item Location</th>
                <th>Selling Mode</th>
                <th>Ad Title</th>
                <th>Creation Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((item) => (
                <tr key={item.id}>
                  <td><input type="checkbox" /></td>
                  <td>{item.adId}</td>
                  <td>{item.sellerName}</td>
                  <td>{item.askingPrice}</td>
                  <td>{item.itemLocation}</td>
                  <td>{item.sellingMode}</td>
                  <td>{item.adTitle}</td>
                  <td>{item.creationDate}</td>
                  <td>
                    <StatusBadge status={item.status} />
                  </td>
                  <td>
                    <button className={styles.moreButton}>
                      <MoreHorizontal size={16} />
                      <span>MORE</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* --- 7. PAGINATION SECTION --- */}
        <Pagination />

      </div>

      {/* --- NEW NAVIGATION BUTTON --- */}
      {/* This button is positioned using fixed styles, so it will "dangle" on the page */}
      <Link to='/deliveryDetails'>
        <button className={styles.navigateToDeliveryButton}>
          Move to Delivery Details
        </button>
      </Link>

    </div>
  );
};

// Export as default to be easily used in React Router
export default MarketplacePage;