export type UserType = {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type InvestorType = {
  _id: string;
  userId: string;
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  imageUrls: string[];
  lastUpdated: Date;
};

export type CompanyType = {
  _id: string;
  userId: string;
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  imageUrls: string[];
  lastUpdated: Date;
};

export type CompanySearchResponse = {
  data: CompanyType[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};

export type InvestorSearchResponse = {
  data: InvestorType[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};
