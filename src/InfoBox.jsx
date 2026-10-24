import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    const HOT_URL="https://images.unsplash.com/photo-1782048175799-2886b9903549?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    const COLD_URL="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    

    return (
        <div className="InfoBox">
            
            <div className="cardContainer">

                
                <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="220"
                        image={info.humidity>80?RAIN_URL : info.temp>15?HOT_URL:COLD_URL}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <div>Temperature-{info.temp}&deg;C</div>
                            <div>Humidity-{info.humidity}</div>
                            <div>min temp -{info.tempMin}&deg;C</div>
                            <div>max temp -{info.tempMax}&deg;C</div>
                            <div>weather feels like <i>{info.weather}</i> {info.feelsLike}&deg;C</div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}