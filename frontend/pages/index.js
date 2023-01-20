export default function Home() {

  return (
    <>
    <header>
      <h1 style={{
        marginTop:"-20px"
      }}>PAROPAKAR : Blockchain in Charity</h1>

      <div style={{
        border:"1px solid black",
        background: "linear-gradient(black,blue)",
        color:"white"
      }}>
        <ul style={{
          listStyleType: "none",
          display:"flex",
          justifyContent: "space-around"
        }}>
          <li  style={{cursor:"pointer"}}>User Guidelines</li>
          <li  style={{cursor:"pointer"}}>Donation Request</li>
          <li  style={{cursor:"pointer"}}>Tender Log</li>  
          <li  style={{cursor:"pointer"}}>About Us</li>
          <li  style={{cursor:"pointer"}}>Media Partner</li>
        </ul>

      </div>
    </header>
    </>
  );
}
