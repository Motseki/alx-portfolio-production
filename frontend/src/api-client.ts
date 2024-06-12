import { RegisterFormData } from "./pages/Register";
import { SignInFormData } from "./pages/SignIn";
import {
  CompanyType,
  InvestorType,
  UserType,
} from "../../backend/src/shared/types";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const fetchCurrentUser = async (): Promise<UserType> => {
  const response = await fetch(`${API_BASE_URL}/api/users/me`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Error fetching user");
  }
  return response.json();
};

export const register = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

export const signIn = async (formData: SignInFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.message);
  }
  return body;
};

export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Token invalid");
  }

  return response.json();
};

export const signOut = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    credentials: "include",
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Error during sign out");
  }
};

export const addMyCompany = async (companyFormData: FormData) => {
  const response = await fetch(`${API_BASE_URL}/api/my-companies`, {
    method: "POST",
    credentials: "include",
    body: companyFormData,
  });

  if (!response.ok) {
    throw new Error("Failed to add Company");
  }

  return response.json();
};

export const fetchMyCompanies = async (): Promise<CompanyType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/my-companies`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching Companies");
  }

  return response.json();
};

export const fetchMyCompanyById = async (companyId: string): Promise<CompanyType> => {
  const response = await fetch(`${API_BASE_URL}/api/my-companies/${companyId}`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching Companies");
  }

  return response.json();
};

export const fetchCompanies = async (): Promise<CompanyType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/companies`);
  if (!response.ok) {
    throw new Error("Error fetching Companies");
  }
  return response.json();
};

export const fetchCompanyById = async (companyId: string): Promise<CompanyType> => {
  const response = await fetch(`${API_BASE_URL}/api/companies/${companyId}`);
  if (!response.ok) {
    throw new Error("Error fetching Companies");
  }

  return response.json();
};

export const updateMyCompanyById = async (companyFormData: FormData) => {
  const response = await fetch(
    `${API_BASE_URL}/api/my-companies/${companyFormData.get("companyId")}`,
    {
      method: "PUT",
      body: companyFormData,
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update Company");
  }

  return response.json();
};


export const addMyInvestor = async (investorFormData: FormData) => {
  const response = await fetch(`${API_BASE_URL}/api/my-investors`, {
    method: "POST",
    credentials: "include",
    body: investorFormData,
  });

  if (!response.ok) {
    throw new Error("Failed to add Investor");
  }

  return response.json();
};

export const fetchMyInvestors = async (): Promise<InvestorType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/my-investors`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching Investors");
  }

  return response.json();
};

export const fetchMyInvestorById = async (investorId: string): Promise<InvestorType> => {
  const response = await fetch(`${API_BASE_URL}/api/my-investors/${investorId}`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching Hotels");
  }

  return response.json();
};

export const fetchInvestors = async (): Promise<InvestorType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/investors`);
  if (!response.ok) {
    throw new Error("Error fetching Investors");
  }
  return response.json();
};

export const fetchInvestorById = async (investorId: string): Promise<InvestorType> => {
  const response = await fetch(`${API_BASE_URL}/api/investors/${investorId}`);
  if (!response.ok) {
    throw new Error("Error fetching Investors");
  }

  return response.json();
};

export const updateMyInvestorById = async (investorFormData: FormData) => {
  const response = await fetch(
    `${API_BASE_URL}/api/my-investors/${investorFormData.get("investorId")}`,
    {
      method: "PUT",
      body: investorFormData,
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update Investor");
  }

  return response.json();
};

export const addMyHotel = async (hotelFormData: FormData) => {
  const response = await fetch(`${API_BASE_URL}/api/my-hotels`, {
    method: "POST",
    credentials: "include",
    body: hotelFormData,
  });

  if (!response.ok) {
    throw new Error("Failed to add hotel");
  }

  return response.json();
};

