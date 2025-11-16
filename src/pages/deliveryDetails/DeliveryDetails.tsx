import React, { useState } from 'react';
import styles from './DeliveryDetails.module.css';
import {
  Upload,
  ChevronDown,
  ChevronUp,
  Eye,
  Star,
  Edit2,
  Send,
  User,
} from 'lucide-react';

// --- HELPER COMPONENTS ---

/**
 * A reusable Key-Value component for the detail lists
 */
const DetailItem = ({
  label,
  value,
  valueColor,
}: {
  label: string;
  value: string;
  valueColor?: string;
}) => (
  <div className={styles.detailItem}>
    <span className={styles.detailLabel}>{label}</span>
    <span
      className={styles.detailValue}
      style={{ color: valueColor || '#1D1E20' }}
    >
      {value}
    </span>
  </div>
);

/**
 * Renders the Seller/Buyer information card
 */
const UserCard = ({
  cardTitle,
  userName,
  userRating,
  detailsTitle,
  emojis,
  children,
}: {
  cardTitle: string;
  userName: string;
  userRating: number;
  detailsTitle: string;
  emojis: string;
  children?: React.ReactNode;
}) => (
  <div className={styles.userCard}>
    <h3 className={styles.cardTitle}>{cardTitle}</h3>
    <div className={styles.userHeader}>
      <div className={styles.avatar}>
        <User size={20} />
      </div>
      <div className={styles.userInfo}>
        <span className={styles.userName}>{userName}</span>
        <div className={styles.rating}>
          <Star size={16} fill="#F97316" stroke="none" />
          <span>
            {userRating.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
    <div className={styles.userDetails}>
      <h4>{detailsTitle}</h4>
      <div className={styles.emojiRating}>{emojis}</div>
    </div>
    {children}
  </div>
);

/**
 * A stateful collapsible section component
 */
const CollapsibleSection = ({
  title,
  status,
  children,
  defaultOpen = true,
}: {
  title: string;
  status?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={styles.collapsibleSection}>
      <button
        className={styles.sectionHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.sectionTitle}>
          <span>{title}</span>
          {status && (
            <div className={styles.statusBadge}>
              <div className={styles.statusDot} />
              {status}
            </div>
          )}
        </div>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <>
          <hr className={styles.divider} />
          <div className={styles.sectionContent}>{children}</div>
        </>
      )}
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export const DeliveryDetails = () => {
  return (
    <div className={styles.deliveryDetailsPage}>
      {/* --- 1. PAGE HEADER --- */}
      <header className={styles.pageHeader}>
        <h1>Delivery Details</h1>
        <button className={styles.exportButton}>
          <Upload size={20} />
          <span>Export</span>
        </button>
      </header>

      {/* --- 2. MAIN CONTENT CONTAINER --- */}
      <div className={styles.mainContainer}>
        {/* --- 3. TOP COLLAPSIBLE SECTION (Sell Ad) --- */}
        <CollapsibleSection
          title="Sell Ad: AD-1258"
          status="Active"
          defaultOpen={true}
        >
          <div className={styles.detailsGridTop}>
            {/* --- Col 1: Image Gallery --- */}
            <div className={styles.imageGallery}>
              <div className={styles.mainImageContainer}>
                <div className={styles.viewsBadge}>
                  <Eye size={16} />
                  <span>25 Views</span>
                </div>
                {/* Placeholder for the large box image */}
                <div className={styles.mainImage} />
              </div>
              <div className={styles.thumbnailContainer}>
                {/* Placeholders for the 4 thumbnail images */}
                <div className={styles.thumbnailImage} />
                <div className={styles.thumbnailImage} />
                <div className={styles.thumbnailImage} />
                <div className={styles.thumbnailImage} />
              </div>
            </div>

            {/* --- Col 2: Pickup & Delivery Details --- */}
            <div className={styles.detailsCard}>
              <div className={styles.cardHeader}>
                <h3>Pick up & Delivery Details</h3>
                <button>
                  <Edit2 size={16} />
                </button>
              </div>
              <div className={styles.detailList}>
                <DetailItem label="Created at" value="29th Aug 2025" />
                <DetailItem label="Ad Expiry date" value="25th Aug 2027" />
                <DetailItem
                  label="Pickup Type"
                  value="From Sender’s location"
                />
                <DetailItem label="Delivery Type" value="PP, Direct Contact" />
              </div>
              <div className={styles.pickupAddress}>
                <div className={styles.radioGroup}>
                  <input type="radio" id="pickup" name="pickup" defaultChecked />
                  <label htmlFor="pickup">Pick up Details:</label>
                </div>
                <div className={styles.addressInfo}>
                  <DetailItem label="Name" value="Adeboye Ojobo" />
                  <DetailItem
                    label="Address"
                    value="24 Akamaronjo Road, Egbeda, Alimoso"
                  />
                  <DetailItem
                    label="Phone Number"
                    value="+2348037456908"
                    valueColor="#F97316"
                  />
                </div>
              </div>
            </div>

            {/* --- Col 3: Package Details --- */}
            <div className={styles.detailsCard}>
              <div className={styles.cardHeader}>
                <h3>Package Details</h3>
                <button>
                  <Send size={16} />
                </button>
              </div>
              <div className={styles.detailList}>
                <DetailItem label="Title" value="New Samsung Galaxy S10" />
                <DetailItem label="Category" value="Electronics" />
                <DetailItem
                  label="Product category"
                  value="Multi Category (Petroleum/ Liquids/Chemicals/ Agricultural Produce)"
                />
                <DetailItem label="Package Weight" value="5kg" />
                <DetailItem label="Monetary Worth of Package" value="60,000" />
                <DetailItem label="Pickup preference" value="No Vehicle" />
                <DetailItem
                  label="Delivery fee invoice Recipient"
                  value="Sender"
                />
              </div>
            </div>
          </div>

          <hr className={styles.divider} style={{ margin: '32px 0' }} />

          <div className={styles.detailsGridBottom}>
            {/* --- Col 1: Seller Card --- */}
            <UserCard
              cardTitle="Seller"
              userName="Bright Azu – Sender"
              userRating={4.8}
              detailsTitle="Dispatch Details"
              emojis="😍 😊 🙄 🤔 😒"
            />

            {/* --- Col 2: Buyer Card --- */}
            <UserCard
              cardTitle="Buyer"
              userName="Bright Azu – Receiver"
              userRating={4.6}
              detailsTitle="Purchase Details"
              emojis="😍 😊 🙄 🤔 😒"
            >
              <div className={styles.detailList} style={{ paddingTop: '16px' }}>
                <DetailItem label="Purchase Date" value="29th Aug 2025" />
                <DetailItem
                  label="Purchase mode"
                  value="Purchase Protection"
                />
                <DetailItem label="Linked Delivery Job" value="PP-5698" />
              </div>
            </UserCard>

            {/* --- Col 3: Empty (Grid handles this) --- */}
          </div>
        </CollapsibleSection>

        {/* --- 4. BOTTOM COLLAPSIBLE SECTION (Views) --- */}
        <CollapsibleSection title="Views" defaultOpen={false}>
          {/* Content for 'Views' goes here */}
          <p>Views content will be displayed here.</p>
        </CollapsibleSection>
      </div>
    </div>
  );
};

export default DeliveryDetails;