import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  margin: 'left',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
    <Card sx={{ maxWidth: 345 ,position:""  ,marginTop:"140px",marginLeft:"10px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500]}} aria-label="recipe">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Meals Kerala"
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
      />
<CardContent>
        <Typography variant="body2" color="text.secondary">
         Meals <br/>
         price: 100<br/>
         Time:12:00 to 3:00 pm
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="ADD TO CART">
  <AddShoppingCartIcon/>
</IconButton>&nbsp;&nbsp;

      <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
      <Button variant="contained">ORDER</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          A meal is different from a snack in that meals are generally larger, more varied, and more filling than snacks. The type of food that is served or consumed at any given time depends on regional customs. Three main meals are often eaten in the morning, early afternoon, and evening in most modern civilizations.
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>

{/* 2 */}
    <Card sx={{ maxWidth: 345 ,position:"",marginTop:"-415px", marginLeft:"390px"}}>
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
        title="Chicken biriyani"
        
      />
      <CardMedia
        component="img"
        height="194"
        image="https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Chicken Biriyani <br/>
         price: 150 <br/>
         Time:   11:00 Am to 3:00 Pm
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="ADD TO CART">
  <AddShoppingCartIcon/>
</IconButton>&nbsp;&nbsp;

      <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
      <Button variant="contained">ORDER</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          The traditional process of Chicken Biryani starts by marinating meat in yogurt along with spices and herbs. The raw/uncooked marinated meat is layered at the bottom of a wide pot followed by another layer of par cooked basmati rice, herbs, saffron infused milk, fried onions and ghee or attar (edible essential oil).
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    










{/* 3 */}



    <Card sx={{ maxWidth: 345 ,position:"",marginTop:"-415px",marginLeft:"770px"}}>
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
        title="Beef Biriyani"
        
      />
      <CardMedia
        component="img"
        height="194"
        image="https://static.vecteezy.com/system/resources/thumbnails/030/496/701/small_2x/aromatic-basmati-biryani-crafted-with-generative-ai-free-photo.jpg"
       
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Beef Biriyani <br/>
         price: 180<br/>
         Time:   11:00 Am to 3:00 Pm
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="ADD TO CART">
  <AddShoppingCartIcon/>
</IconButton>&nbsp;&nbsp;

      <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
      <Button variant="contained">ORDER</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          The traditional process of Beef Biryani starts by marinating meat in yogurt along with spices and herbs. The raw/uncooked marinated meat is layered at the bottom of a wide pot followed by another layer of par cooked basmati rice, herbs, saffron infused milk, fried onions and ghee or attar (edible essential oil).
          </Typography>
        </CardContent>
      </Collapse>
    </Card>


{/* 4 */}


<Card sx={{ maxWidth: 345 ,position:"",marginTop:"-415px",marginLeft:"1150px"}}>
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
        title="Mutton biriyani"
        
      />
      <CardMedia
        component="img"
        height="194"
        image="https://png.pngtree.com/png-clipart/20231020/original/pngtree-savory-mutton-biryani-plated-to-perfection-png-image_13388374.png"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Mutton Biriyani <br/>
         price: 180<br/>
         Time:   11:00 Am to 3:00 Pm
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="ADD TO CART">
  <AddShoppingCartIcon/>
</IconButton>&nbsp;&nbsp;

      <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
      <Button variant="contained">ORDER</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          The traditional process of Chicken Biryani starts by marinating meat in yogurt along with spices and herbs. The raw/uncooked marinated meat is layered at the bottom of a wide pot followed by another layer of par cooked basmati rice, herbs, saffron infused milk, fried onions and ghee or attar (edible essential oil).
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

{/* 4 */}



<Card sx={{ maxWidth: 345 ,position:"",marginTop:"20px",marginLeft:"10px"}}>
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
        title="Kuzhimandhi"
        
      />
      <CardMedia
        component="img"
        height="194"
        image="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/oky2o28b1rraeglmyjjy"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Kuzhimandhi <br/>
         {/* price: 170 (quater)<br/>
         price: 300 (half)<br/> */}
         price: 600 (full)<br/>
         Time:   11:00 Am to 3:00 Pm
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="ADD TO CART">
  <AddShoppingCartIcon/>
</IconButton>&nbsp;&nbsp;

      <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
      <Button variant="contained">ORDER</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          The traditional process of Chicken Biryani starts by marinating meat in yogurt along with spices and herbs. The raw/uncooked marinated meat is layered at the bottom of a wide pot followed by another layer of par cooked basmati rice, herbs, saffron infused milk, fried onions and ghee or attar (edible essential oil).
          </Typography>
        </CardContent>
      </Collapse>
    </Card>




    

<Card sx={{ maxWidth: 345 ,position:"",marginTop:"-415px",marginLeft:"390px"}}>
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
        title="Alfam"
        
      />
      <CardMedia
        component="img"
        height="194"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYyLIB7Jn7qnQj7QteR2pudeSmAtPyZZDlJQ&usqp=CAU"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Alfam <br/>
          Price: 392<br/>
         Time:   11:00 Am to 3:00 Pm
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="ADD TO CART">
  <AddShoppingCartIcon/>
</IconButton>&nbsp;&nbsp;

      <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
      <Button variant="contained">ORDER</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          ALFAM 400MG TABLET is prescribed for the management of pain and swelling. It is also used for treating inflammatory diseases and rheumatoid disorders including juvenile rheumatoid arthritis, mild to moderate pain, fever, dysmenorrhea, gout, ankylosing spondylitis and acute migraine headache.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    



    {/* 7 */}

    <Card sx={{ maxWidth: 345 ,position:"",marginTop:"-415px",marginLeft:"770px"}}>
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
        title="Grill Chicken"
        
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Grill Chicken <br/>
         Price: 300 <br/>
         Time:   9:00 pm to 2:00 am
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="ADD TO CART">
  <AddShoppingCartIcon/>
</IconButton>&nbsp;&nbsp;

      <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
      <Button variant="contained">ORDER</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          Chicken is known for its protein benefits, but there are other ways that this lean meat can keep you functioning well.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

    {/* 8 */} 


    <Card sx={{ maxWidth: 345 ,position:"",marginTop:"-415px",marginLeft:"1150px"}}>
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
        title="Alfam"
        
      />
      <CardMedia
        component="img"
        height="194"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIU_ddZTkpgGBcqnVXmpSYm6rjmCwQ8_5hwEGrN8nFCCNMlb6YS9FT0gVCoEjjNoWndP4&usqp=CAU"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Veg Pulao <br/>
          Price: 100<br/>
         Time:   11:00 Am to 3:00 Pm
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="ADD TO CART">
  <AddShoppingCartIcon/>
</IconButton>&nbsp;&nbsp;

      <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
      <Button variant="contained">ORDER</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          ALFAM 400MG TABLET is prescribed for the management of pain and swelling. It is also used for treating inflammatory diseases and rheumatoid disorders including juvenile rheumatoid arthritis, mild to moderate pain, fever, dysmenorrhea, gout, ankylosing spondylitis and acute migraine headache.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    
    









    </div>
    
  );
}