
// import Image from "next/Image";
import { Navbar } from "@nextui-org/react";
import Image from "next/Image";
import { Web3Button } from "@web3modal/react";
import styles from "../styles/Admin.module.css";


const Admin = () => {
  return (
    <>
     <div>
            <Navbar height={200}>
                <div style={{
                    marginLeft:"-15%"
                }}>
                    <Image src={"/navBarLogo.png"} height={200} width={400} quality={100} alt={"logo"}></Image>
                </div>
            <font className={styles.heading}> ADMIN PAGE</font> 
                <Web3Button /> 
            </Navbar>
        </div>

        <p style={{
            padding:"30px",
            fontSize:"26px"
        }}>
            ABOUT AUTHORIZER
            <hr />

            GRANT ROLE &nbsp; <br />
                <input type={"text"} placeholder={"Address"}></input>
                <br />
                <button className={styles.button}>SUBMIT</button>
            <hr />

            REVOKE ROLE &nbsp; <br />
            <input type={"text"} placeholder={"Address"}></input>
                <br />
                <button className={styles.button}>SUBMIT</button>
        </p>

    </>
  )
}

export default Admin