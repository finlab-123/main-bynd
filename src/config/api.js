const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  import.meta.env.VITE_API_URL ||
  'https://bynd-backend-owi6.onrender.com';

export const API_URL = API_BASE_URL;

export const API_CONFIG = {
  BASE_URL: API_BASE_URL,
  LOANS: {
    HOME_LOAN: `${API_BASE_URL}/api/loans/home-loan`,
    VEHICLE_LOAN: `${API_BASE_URL}/api/loans/vehicle-loan`,
    EDUCATION_LOAN: `${API_BASE_URL}/api/loans/education-loan`,
    LOAN_AGAINST_SHARE: `${API_BASE_URL}/api/loans/loan-against-share`,
    LOAN_AGAINST_PROPERTY: `${API_BASE_URL}/api/loans/loan-against-property`,
    SUPPLY_CHAIN: `${API_BASE_URL}/api/loans/supply-chain`,
    MEDICAL_LOAN: `${API_BASE_URL}/api/loans/medical-loan`,
    SUBMIT_LOAN: (loanType) => `${API_BASE_URL}/api/loans/${loanType}`,
  },

  PRODUCTS: {
    CREDIT_CARD: `${API_BASE_URL}/api/loans/credit-card`,
    LIFE_INSURANCE: `${API_BASE_URL}/api/loans/life-insurance`,
    GENERAL_INSURANCE: `${API_BASE_URL}/api/loans/general-insurance`,
    EQUITY: `${API_BASE_URL}/api/loans/equity`,
    MUTUAL_FUND: `${API_BASE_URL}/api/loans/mutual-fund`,
    PRIVATE_CREDIT: `${API_BASE_URL}/api/loans/private-credit`,
    SUBMIT_PRODUCT: (productType) => `${API_BASE_URL}/api/loans/${productType}`,
  },

  FORMS: {
    // Standard Communication Forms
    GET_IN_TOUCH: `${API_BASE_URL}/api/get-in-touch`,
    BOOK_CONSULTANT: `${API_BASE_URL}/api/book-consultant`,

    // Dynamic routing matchers for standard lead capture handling: router.post('/loans/:category')
    SUBMIT_LOAN_FORM: (category) => {
      const mapping = {
        'home': 'home-loan',
        'home-loan': 'home-loan',
        'vehicle': 'vehicle-loan',
        'vehicle-loan': 'vehicle-loan',
        'education': 'education-loan',
        'education-loan': 'education-loan',
        'share': 'loan-against-share',
        'loan-against-share': 'loan-against-share',
        'lap': 'loan-against-property',
        'loan-against-property': 'loan-against-property',
        'supply-chain': 'supply-chain',
        'medical': 'medical-loan',
        'medical-loan': 'medical-loan'
      };
      const mapped = mapping[category] || category;
      return `${API_BASE_URL}/api/loans/${mapped}`;
    },

    // Dynamic routing matchers for standard lead capture handling: router.post('/products/:category')
    SUBMIT_PRODUCT_FORM: (category) => {
      const mapping = {
        'credit-card': 'credit-card',
        'card': 'credit-card',
        'equity': 'equity',
        'mutual-fund': 'mutual-fund',
        'fund': 'mutual-fund',
        'life-insurance': 'life-insurance',
        'general-insurance': 'general-insurance',
        'private-credit': 'private-credit'
      };
      const mapped = mapping[category] || category;
      return `${API_BASE_URL}/api/products/${mapped}`;
    },
  },
};

/**
 * Generic API Fetch Helper
 * Optimized to normalize responses and prevent runtime reference crashes on the frontend
 */
export const apiCall = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      return { 
        success: false, 
        error: data.message || 'Submission failed',
        data: null 
      };
    }

    // Returns structural safety directly matching your backend controller factory models
    return { 
      success: true, 
      error: null,
      data: data // Contains { success: true, message: "...", data: newItem } from your controllers
    };

  } catch (error) {
    console.error('API Call Failure:', error);
    return { 
      success: false, 
      error: error.message || 'Network connection gateway failure.',
      data: null 
    };
  }
};

export default API_CONFIG;