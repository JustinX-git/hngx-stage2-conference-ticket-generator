import ImageUploader from "./ImageUploader";
import Input from "../../../UI/Input/Input";
import "./StageTwo.css";

const StageTwo = ({errors,setErrors}) =>  (
    <>
      <ImageUploader error={errors.avatar}/>
      <div className="progress-container-2" />
      <Input 
      label={"Enter your name*"}
      type={"text"}
      name={"name"}
      // value={formData.name}
      placeholder={""}
      // setErrors={setErrors}
      error={errors.name}
      />

      <Input 
      label={"Enter your email*"}
      type={"email"}
      name={"email"}
      // value={formData.email}
      placeholder={""}
      // setErrors={setErrors}
      error={errors.email}
      />

      <Input 
      // value={formData.request}
      label={"Special request"}
      type={"textarea"}
      name={"request"}
      placeholder={"Textarea"}
      />
    </>
  );


export default StageTwo
