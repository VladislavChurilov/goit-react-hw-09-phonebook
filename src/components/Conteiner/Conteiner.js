import styles from '../../Phonebook.module.css';

const Conteiner = ({children}) =>(    
        <div className={styles.phonebook} >        
        {children}        
        </div> 
)

export default Conteiner;