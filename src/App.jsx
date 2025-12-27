import s from './app.module.scss';
import { AdvertismentField } from '@/components/AdvertismentField';
import { Controls } from '@/components/Controls';
import { InputForm } from '@/components/InputForm/index';
import { observer } from 'mobx-react-lite';
import { useCustomContext } from './hooks/useCustomContext';

const App = observer(() => {
  const { items } = useCustomContext();
  console.log('items', items);
  return (
    <div className={s.content}>
      <AdvertismentField />
      <Controls />
      {items.map(i => (
        <InputForm key={i.id} id={i.id} />
      ))}
    </div>
  );
});

export default App;
