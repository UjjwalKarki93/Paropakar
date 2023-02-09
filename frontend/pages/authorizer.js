import { Web3Button } from '@web3modal/react';
import Image from "next/Image";
import styles from "../styles/Authorizer.module.css";
import Link from "next/Link";

const Authorizer = () => {
  return (
    <>
      <div className={styles.navbar}>
        
        <div style={{
          marginLeft:"-4.5%"
        }}>
              <Image src={"/navBarLogo.png"} height={200} width={400} quality={100} alt={"image "} ></Image>
        </div>
        
            <font className={styles.heading}> Authorizer PAGE</font> 
           <div className={styles.option} > 
               <Link href="/Admin" style={{textDecoration:"none"}} >
                Verification Request
                </Link>
            </div>
           <div className={styles.option}>
              <Link href="/Admin" style={{textDecoration:"none"}}>
                About Admin
              </Link>
            </div>
            <div className={styles.option}><Web3Button /> </div> 
          
      </div>

      <div style={{
            padding:"30px",
            fontSize:"30px",
            background:"whitesmoke",
            height:"500px"
        }}>
        ALL CONTRACTS
      </div>
  
    </>
      )
}

export default Authorizer



