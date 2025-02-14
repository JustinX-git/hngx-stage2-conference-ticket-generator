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
      placeholder={""}
      error={errors.name}
      />

      <Input 
      label={"Enter your email*"}
      type={"email"}
      name={"email"}
      placeholder={""}
      error={errors.email}
      />

      <Input 
      label={"Special request"}
      type={"textarea"}
      name={"request"}
      placeholder={"Textarea"}
      />
    </>
  );


export default StageTwo
