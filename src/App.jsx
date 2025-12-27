import s from './app.module.scss';
import { AdvertismentField } from '@/components/AdvertismentField';
import { Controls } from '@/components/Controls';
import { InputForm } from '@/components/InputForm/index';
import { observer } from 'mobx-react-lite';
import { useCustomContext } from './hooks/useCustomContext';

const App = observer(() => {
  const { items } = useCustomContext();

  return (
    <div className={s.content}>
      <AdvertismentField />
      <Controls />
      {items.map((i, index) => (
        <InputForm key={i.id} id={i.id} index={index} />
      ))}
    </div>
  );
});

export default App;
