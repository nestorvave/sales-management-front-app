import { useState, ChangeEvent } from "react";

interface FormActions<IForm> {
  data: IForm;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  resetForm: () => void;
  disabled: () => boolean;
}

const useForm = <IForm>(initialState: IForm): FormActions<IForm> => {
  const [data, setData] = useState<IForm>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const isNumericField =
      typeof initialState[name as keyof IForm] === "number";
    const newValue = isNumericField ? parseFloat(value) || 0 : value;
    setData({
      ...data,
      [name]: newValue,
    });
  };

  const resetForm = () => {
    setData(initialState);
  };

  const disabled = (): boolean => {
    return Object.values(data as Record<string, unknown>).some(
      (value) =>
        value === "" ||
        value === undefined ||
        value === null ||
        isNaN(parseFloat(value as string)),
    );
  };

  return {
    data,
    handleChange,
    resetForm,
    disabled,
  };
};

export default useForm;
