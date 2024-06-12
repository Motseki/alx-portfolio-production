import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import ManageInvestorForm from "../forms/ManageInvestorForm/ManageInvestorForm";

const EditInvestor = () => {
  const { investorId } = useParams();
  const { showToast } = useAppContext();

  const { data: investor } = useQuery(
    "fetchMyInvestorById",
    () => apiClient.fetchMyInvestorById(investorId || ""),
    {
      enabled: !!investorId,
    }
  );

  const { mutate, isLoading } = useMutation(apiClient.updateMyInvestorById, {
    onSuccess: () => {
      showToast({ message: "Investor Saved!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error Saving Investor", type: "ERROR" });
    },
  });

  const handleSave = (investorFormData: FormData) => {
    mutate(investorFormData);
  };

  return (
    <ManageInvestorForm investor={investor} onSave={handleSave} isLoading={isLoading} />
  );
};

export default EditInvestor;