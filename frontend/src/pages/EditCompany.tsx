import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import ManageCompanyForm from "../forms/ManageCompanyForm/ManageCompanyForm";

const EditCompany = () => {
  const { companyId } = useParams();
  const { showToast } = useAppContext();

  const { data: company } = useQuery(
    "fetchMyCompanyById",
    () => apiClient.fetchMyCompanyById(companyId || ""),
    {
      enabled: !!companyId,
    }
  );

  const { mutate, isLoading } = useMutation(apiClient.updateMyCompanyById, {
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

  return (
    <ManageCompanyForm company={company} onSave={handleSave} isLoading={isLoading} />
  );
};

export default EditCompany;