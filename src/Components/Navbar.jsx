import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Navbar() {
    return <div style={{width:"100%", height: "7%", display:"flex", justifyContent:"space-between", padding:"5px", backgroundColor:"#2e2d51", alignItems:"center"}}>
        <Typography variant={"h6"} sx={{color: "white", marginLeft: "2%"}}>Chat App</Typography>
        <Button variant="contained" size="small" sx={{marginRight: "2%"}}>LOGOUT</Button>
    </div>
}
export default Navbar;