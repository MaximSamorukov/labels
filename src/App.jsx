import s from "./app.module.scss";
import { AdvertismentField } from "@/components/AdvertismentField";
import { Controls } from "@/components/Controls";
import { CustomInput } from "@/components/CustomInput/index";
import { IconsUploadComponent } from "@/components/IconsUploadComponent";
import { observer } from "mobx-react-lite";
import { state } from "./state";
import { toJS } from "mobx";

const App = observer(() => {

  return <div className={s.content}>
    <AdvertismentField />
    <IconsUploadComponent />
    <Controls />
    {state.inputs.map((i) => (
        <CustomInput key={i.id} id={i.id} label={i.label}/>
      )
    )}
  </div>;
});

export default App;
