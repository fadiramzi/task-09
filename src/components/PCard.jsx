import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Tooltip } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import CartContext from "../contexts/CartContext";
import Grow from '@mui/material/Grow';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const obj = props.obj;
  const [expanded, setExpanded] = React.useState(false);
  const {addToCarts} = React.useContext(CartContext)
  console.log(addToCarts)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth:345,
        minHeight:'514px',
        margin: "5px",
      }}
    >
      
        {
          props.isLoading?
         <Box
         sx={{
           display:'flex',
           flexDirection:'row',
           flexGrow:'1',
          
         }}
         >
            <Skeleton variant="circular" width={40} height={40}/>
            <Skeleton variant="rectangular" width={"80%"} height={40} />

         </Box>
          :
          <Grow
          in={!props.isLoading}
          timeout={1000}
          >
            <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={obj.title}
          subheader={obj.category}
        />
          </Grow>
        }
        
      
        
    
      
         
         {
           props.isLoading?
           <Skeleton style={{
             marginTop:'5px'
           }} variant="rectangular" height={194} />
           :
           <CardMedia
           component="img"
           height="194"
           image={require('../assets/images/1.jpg').default}
           alt="Image here"
         />
         }
      
       
            <React.Fragment>
                <CardContent>
        <Typography variant="body2" color="text.secondary">
          {obj.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title={"Add to cart"}>
          <IconButton onClick={()=>{
              console.log('1')
              addToCarts(obj)
          }} aria-label="add to cart">
            <AddShoppingCartIcon />
          </IconButton>
        </Tooltip>

        <ExpandMore
          expand={expanded}
          onClick={() => {
            
          }}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
            </React.Fragment>
        
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent></CardContent>
      </Collapse>
    </Card>
  );
}
