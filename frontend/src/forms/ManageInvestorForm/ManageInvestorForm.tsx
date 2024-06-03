import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypeSection from "./TypeSection";
// import FacilitiesSection from "./FacilitiesSection";
// import GuestsSection from "./GuestsSection";
import ImagesSection from "./ImagesSection";
import { InvestorType } from "../../../../backend/src/shared/types";
import { useEffect } from "react";

export type InvestorFormData = {
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  pricePerNight: number;
  starRating: number;
  facilities: string[];
  imageFiles: FileList;
  imageUrls: string[];
  adultCount: number;
  childCount: number;
};

type Props = {
  investor?: InvestorType;
  onSave: (hotelFormData: FormData) => void;
  isLoading: boolean;
};

const ManageInvestorForm = ({ onSave, isLoading, investor }: Props) => {
  const formMethods = useForm<InvestorFormData>();
  const { handleSubmit, reset } = formMethods;

  useEffect(() => {
    reset(investor);
  }, [investor, reset]);

  const onSubmit = handleSubmit((formDataJson: InvestorFormData) => {
    const formData = new FormData();
    if (investor) {
      formData.append("investorId", investor._id);
    }
    formData.append("name", formDataJson.name);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append("description", formDataJson.description);
    formData.append("type", formDataJson.type);
    // formData.append("pricePerNight", formDataJson.pricePerNight.toString());
    // formData.append("starRating", formDataJson.starRating.toString());
    // formData.append("adultCount", formDataJson.adultCount.toString());
    // formData.append("childCount", formDataJson.childCount.toString());

    // formDataJson.facilities.forEach((facility, index) => {
    //    formData.append(`facilities[${index}]`, facility);
    //  });

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
        {/* <FacilitiesSection />  */}
        {/* <GuestsSection />  */}
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

export default ManageInvestorForm;