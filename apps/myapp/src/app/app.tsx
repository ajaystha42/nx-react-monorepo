// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { Carousel } from '@nx-monorepo/mycomps';

export function App() {
  return (
    <div>
      <Carousel />
    </div>
  );
}

export default App;
