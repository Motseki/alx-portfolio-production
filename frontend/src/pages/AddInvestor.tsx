import { useMutation } from "react-query";
import ManageInvestorForm from "../forms/ManageInvestorForm/ManageInvestorForm";
import { useAppContext } from "../contexts/AppContext";
import * as apiClient from "../api-client";

const AddInvestor = () => {
  const { showToast } = useAppContext();

  const { mutate, isLoading } = useMutation(apiClient.addMyInvestor, {
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

  return <ManageInvestorForm onSave={handleSave} isLoading={isLoading} />;
};

export default AddInvestor;