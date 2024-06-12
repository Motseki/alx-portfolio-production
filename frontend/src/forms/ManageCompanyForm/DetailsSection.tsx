import { useFormContext } from "react-hook-form";
import { CompanyFormData } from "./ManageCompanyForm";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CompanyFormData>();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="mb-3 text-3xl font-bold">Add Company</h1>
      <label className="flex-1 text-sm font-bold text-gray-700">
        Name
        <input
          type="text"
          className="w-full px-2 py-1 font-normal border rounded"
          {...register("name", { required: "This field is required" })}
        ></input>
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </label>

      <div className="flex gap-4">
        <label className="flex-1 text-sm font-bold text-gray-700">
          City
          <input
            type="text"
            className="w-full px-2 py-1 font-normal border rounded"
            {...register("city", { required: "This field is required" })}
          ></input>
          {errors.city && (
            <span className="text-red-500">{errors.city.message}</span>
          )}
        </label>
        <label className="flex-1 text-sm font-bold text-gray-700">
          Country
          <input
            type="text"
            className="w-full px-2 py-1 font-normal border rounded"
            {...register("country", { required: "This field is required" })}
          ></input>
          {errors.country && (
            <span className="text-red-500">{errors.country.message}</span>
          )}
        </label>
      </div>
      <label className="flex-1 text-sm font-bold text-gray-700">
        Description
        <textarea
          rows={10}
          className="w-full px-2 py-1 font-normal border rounded"
          {...register("description", { required: "This field is required" })}
        ></textarea>
        {errors.description && (
          <span className="text-red-500">{errors.description.message}</span>
        )}
      </label>
    </div>
  );
};

export default DetailsSection;