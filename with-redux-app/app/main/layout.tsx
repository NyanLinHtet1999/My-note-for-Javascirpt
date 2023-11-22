import { Providers } from '@/lib/providers'
import styles from '../styles/layout.module.css'


export default function MainLayout(props: React.PropsWithChildren) {
     return (<Providers>
          Custom layout 
          <main className={styles.main}>{props.children}</main>

     </Providers>)
}