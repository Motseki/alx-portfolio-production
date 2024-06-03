import { useMutation } from "react-query";
// import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";
import ManageCompanyForm from "../forms/ManageCompanyForm/ManageCompanyForm";
import { useAppContext } from "../contexts/AppContext";
import * as apiClient from "../api-client";

const AddCompany = () => {
  const { showToast } = useAppContext();

  const { mutate, isLoading } = useMutation(apiClient.addMyCompany, {
    onSuccess: () => {
      showToast({ message: "Company Saved!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error Saving Company", type: "ERROR" });
    },
  });

  const handleSave = (companyFormData: FormData) => {
    mutate(companyFormData);
  };

  return <ManageCompanyForm onSave={handleSave} isLoading={isLoading} />;
};

export default AddCompany;