import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypeSection from "./TypeSection";
import ImagesSection from "./ImagesSection";
import { CompanyType } from "../../../../backend/src/shared/types";
import { useEffect } from "react";

export type CompanyFormData = {
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  imageFiles: FileList;
  imageUrls: string[];
};

type Props = {
  company?: CompanyType;
  onSave: (companyFormData: FormData) => void;
  isLoading: boolean;
};

const ManageCompanyForm = ({ onSave, isLoading, company }: Props) => {
  const formMethods = useForm<CompanyFormData>();
  const { handleSubmit, reset } = formMethods;

  useEffect(() => {
    reset(company);
  }, [company, reset]);

  const onSubmit = handleSubmit((formDataJson: CompanyFormData) => {
    const formData = new FormData();
    if (company) {
      formData.append("companyId", company._id);
    }
    formData.append("name", formDataJson.name);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append("description", formDataJson.description);
    formData.append("type", formDataJson.type);
    
    if (formDataJson.imageUrls) {
      formDataJson.imageUrls.forEach((url, index) => {
        formData.append(`imageUrls[${index}]`, url);
      });
    }

    Array.from(formDataJson.imageFiles).forEach((imageFile) => {
      formData.append(`imageFiles`, imageFile);
    });

    onSave(formData);
  });

  return (
    <FormProvider {...formMethods}>
      <form className="flex flex-col gap-10 container flex-1 py-10 mx-auto" onSubmit={onSubmit}>
        <DetailsSection />
        <TypeSection />
        <ImagesSection />
        <span className="flex justify-end">
          <button
            disabled={isLoading}
            type="submit"
            className="p-2 text-xl font-bold text-white bg-blue-600 hover:bg-blue-500 disabled:bg-gray-500"
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ManageCompanyForm;