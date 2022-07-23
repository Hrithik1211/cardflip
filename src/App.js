import './App.css';
import Cards from '../src/custom/Cards';
import Bar from './custom/bar';
import google from './images/google.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'
import chrome from './images/chrome.png'
import apple from './images/apple.png'
import youtube from './images/youtube.png'
import tick from './images/tick.png'
import arrow from './images/arrow.png'
import back from './images/back.png'
import circle from './images/circle.png'
import dropbox from './images/dropbox.png'
import linkedin from './images/linkedin.png'
import messenger from './images/messenger.png'
import sharethis from './images/sharethis.png'
import square from './images/square.png'
import telegram from './images/telegram.png'
import tiktok from './images/tiktok.png'
import triangle from './images/triangle.png'
import {React,useEffect,useState} from 'react'
import {useCookies} from 'react-cookie'
import { FaArrowLeft, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
function App() {
  const [data,setdata]=useState({tiles:null,level:null,num:null,start:0})
  const [click,setclick]=useState(1)
  const [load,setload]=useState(0)
  const [tileclick,settileclick]=useState(1)
  const [clicknum,setclicknum]=useState(2)
  const[time,settime]=useState(0)
  const [game,setgame]=useState({})
  const [stats,setstats]=useState({})
  let [update,setupdate]=useState(0)
  const [gamedisplay,setgamedisplay]=useState({})
  // const [cookie,setcookie,removecookie]=useCookies('data')  
  const [cookie, setcookie] = useState(null)
  let iconsnames=['google','instagram','twitter','apple','youtube','chrome','arrow','back','circle','dropbox','linkedin','messenger','sharethis','square','telegram','tiktok','triangle']
  let icons={google:google,instagram:instagram,twitter:twitter,apple:apple,youtube:youtube,chrome:chrome,tick:tick,arrow:arrow,back:back,circle:circle,dropbox:dropbox,linkedin:linkedin,messenger:messenger,sharethis:sharethis,square:square,telegram:telegram,triangle:triangle,tiktok:tiktok
  }
  let jl=[],num,jnum=1,jg={}
  // if(!cookie['data'])
  useEffect(() => {
    if(localStorage.getItem('cookie')==null){
      let obj = {'data':{
        'Easy':{'totalgames':0,'besttime':'-','won':0},
        'Medium':{'totalgames':0,'besttime':'-','won':0},
        'Hard':{'totalgames':0,'besttime':'-','won':0}
        ,'Stats':{'totalgames':0,'won':0,'besttime':'-','flips':0,'cards':0}, 
      }
    }
      localStorage.setItem('cookie',JSON.stringify(obj))
    }
    setcookie(JSON.parse(localStorage.getItem('cookie')))
//       setcookie('data',{'Easy':{'totalgames':0,'besttime':'-','won':0},
//    'Medium':{'totalgames':0,'besttime':'-','won':0},
//    'Hard':{'totalgames':0,'besttime':'-','won':0},
//    'Stats':{'totalgames':0,'won':0,'besttime':'-','flips':0,'cards':0},
   
//  })
},[])

  useEffect(() => {

  },[stats])
  let level={'Easy':4,'Medium':3,'Hard':2}
  if(Object.keys(stats).length&&stats.update){
    stats.update=0
  //  setupdate(0)
  let c=0;
  if(stats.remark=='YOU WIN'){
    c=.5;
  }
  else if(stats.remark=='Out of Time'){
    c=1;
  }
    cookie['data']['Stats'].totalgames+=c;
    if(cookie['data']['Stats'].besttime=='-'||cookie['data']['Stats'].besttime==0){
      cookie['data']['Stats'].besttime=stats.gametime;
    }
    else if(stats.remark=='YOU WIN') {
      cookie['data']['Stats'].besttime=Math.min(stats.gametime,cookie['data']['Stats'].besttime)
    }
    if(stats.remark=='YOU WIN'){
      cookie['data']['Stats'].won+=c;
    }
    setcookie('data',cookie['data'])
  }
  function jd()
  {
    if(data.tiles&&data.level&&data.num){
    for(let j=0;j<data.tiles/2;j++){
      num=(Math.random()*111111)%18
      jl.push(iconsnames[parseInt(num)])
      jl.push(iconsnames[parseInt(num)])
    }
    // for(let j=0;j<data.tiles;j++){
    //   num=Math.random()*data.tiles
    //   let jj=jl[num]
    //   jl[num]=jl[data.tiles-num-1]
    //   jl[data.tiles-num-1]=jj
    // }
    jl.sort(()=>Math.random()-0.5)
    let jj={},k={}
    for(let j=0;j<data.tiles;j++){
      jj[j+1]={img:jl[j],tile:jl[j],status:1,click:0,tiles:data.tiles}
      k[j+1]=(jl[j]);
      if((j+1)%(data.tiles/4)==0){
        jg[j/(data.tiles/4)+1]=k;
        k={}
      }
    }
    setstats({time:0,game:1,num:0,gametime:0,flips:data.num,update:0,remark:''})
    settime(0)
    setgamedisplay(jg)
    setgame(jj)
  }}
  if(stats.game==0&&cookie!=null){
    localStorage.setItem('cookie',JSON.stringify(cookie))
  }
  return (
    <div className="App">
        {!(data.start&&data.level&&data.num&&data.tiles)&&<div className='console' >
           <div style={{margin:'auto',color:'white',textAlign:'center'}} > Hover on cards to select the game </div>
            <div className='consolerow'>
              <div className={data.tiles?'consolecardsouterselect':'consolecardsouter'}
              >
              
              <div className='consolecards' >
                <div className='consoleimage' style={{display:data.tiles?'none':''}} >F</div>
                <div className='consolecardsdes' style={{display:data.tiles?'flex':'',backgroundColor:(data.tiles==8)?'orange':''}} onClick={()=>{setclick(!click); let jj=data;jj.tiles=8 ;setdata(jj)}} >8 Tiles</div>
                <div className='consolecardsdes' style={{display:data.tiles?'flex':'',backgroundColor:(data.tiles==16)?'orange':''}} onClick={()=>{setclick(!click); let jj=data;jj.tiles=16 ;setdata(jj)}} >16 Tiles</div>
                <div className='consolecardsdes' style={{display:data.tiles?'flex':'',backgroundColor:(data.tiles==32)?'orange':''}} onClick={()=>{setclick(!click); let jj=data;jj.tiles=32 ;setdata(jj)}} >32 Tiles</div>
              </div>
              </div>
              <div className={data.level?'consolecardsouterselect':'consolecardsouter'}
              
              
              >
              <div className='consolecards' >
                <div className='consoleimage' style={{display:data.level?'none':''}} >L</div>
                <div className='consolecardsdes' style={{display:data.level?'flex':'',backgroundColor:data.level=='Easy'?'orange':''}} onClick={()=>{setclick(!click); let jj=data;jj.level='Easy' ;setdata(jj)}} >Easy</div>
                <div className='consolecardsdes' style={{display:data.level?'flex':'',backgroundColor:data.level=='Medium'?'orange':''}} onClick={()=>{setclick(!click); let jj=data;jj.level='Medium'; ;setdata(jj)}} >Medium</div>
                <div className='consolecardsdes' style={{display:data.level?'flex':'',backgroundColor:data.level=='Hard'?'orange':''}} onClick={()=>{setclick(!click); let jj=data;jj.level='Hard' ;setdata(jj)}} >Hard</div>
              </div>
              </div>
            </div>
            <div className='consolerow'>
              <div className={data.tiles&&data.level&&data.num?'consolecardsouterselect':'consolecardsouter'}
              
              >
              <div className='consolecards'  >
              <div className='consoleimage' style={{display:data.tiles&&data.level&&data.num?'none':''}} >I</div>

              {(data.tiles&&data.level&&data.num)&& <div className='consolecardsstart' style={{height:'100%', display:data.tiles&&data.level&&data.num?'flex':'',backgroundColor:'green'}} onClick={()=>{setclick(!click); if(data.tiles&&data.level&&data.num){let jj=data;jj.start=1 ;setdata(jj);jd()}}} >Start</div>
              }
              {!(data.tiles&&data.level&&data.num)&& <div className='consolecardsinfo' style={{display:data.game?'flex':'',backgroundColor:data.game==1?'orange':''}} onClick={()=>{setclick(!click); if(data.tiles&&data.level&&data.num){let jj=data;jj.start=1 ; setdata(jj);jd()}}} >
                You can open upto two cards simultaneoulsy. On opening same cards simultaneously cards get removed from the board. Clear the board!!

              </div>
              }</div>
              </div>
              <div className={data.num?'consolecardsouterselect':'consolecardsouter'}
              
              
              >
              <div className='consolecards' >
              <div className='consoleimage' style={{display:data.num?'none':''}} >P</div>

              <div className='consolecardsdes' style={{display:data.num?'flex':'',backgroundColor:data.num==40?'orange':''}} onClick={()=>{setclick(!click); let jj=data;jj.num=40 ;setdata(jj)}} >40 Flips</div>
              <div className='consolecardsdes' style={{display:data.num?'flex':'',backgroundColor:data.num==80?'orange':''}} onClick={()=>{setclick(!click); let jj=data;jj.num=80 ;setdata(jj)}} >80 Flips</div>
              <div className='consolecardsdes' style={{display:data.num?'flex':'',backgroundColor:data.num==120?'orange':''}} onClick={()=>{setclick(!click); let jj=data;jj.num=120 ;setdata(jj)}} >120 Flips</div>
              </div>
              </div>
            </div>
        </div>}
        {
          data.start>0&&data.level&&data.num&&
          <div style={{}} >
            <Bar gametime={Math.round((data.tiles*level[data.level])/5)*5} stats={stats} game={game} time={time} settime={settime} setupdate={setupdate} />
            {
              Object.keys(gamedisplay).map(val=>(
                <div style={{display:'flex'}} >
                {Object.keys(gamedisplay[val]).map(jj=>(
                  <div onClick={()=>{
                    stats.flips--;
                    game[jj].click=1;
                    (cookie['data']['Stats']).flips++;
                    var c1=-1,c2=-1;
                    for(let j=0;j<data.tiles;j++){
                      if(game[j+1].status<3&&(game[j+1].click==1)){
                        if(c1==-1){
                          c1=j+1;
                        }
                        else{
                          c2=j+1;
                        }
                      }
                    }
                    if(c1>-1&&c2>-1){
                      if(game[c1].tile==game[c2].tile){
                        game[c1].status=game[c2].status=3;
                        cookie['data']['Stats'].cards++;
                      }
                      setload(1)
                    }
                  }} >
                    <Cards game={game} jj={jj} img={icons[jj]} num={data.tiles/4} id={++jnum} clicknum={clicknum} setclicknum={setclicknum} load={load} setload={setload} stats={stats} />
                    </div>
                ))}
                </div>
              ))
            }
            <div className='data' >
              <div className='datades' >Matched: {stats.num}</div>
              <div className='datades' >Flips Left: {stats.flips}</div>
              <div className='datades' >Time: {Math.round(time*10)/10}</div>
              </div>
            <div className='button' onClick={()=>{setstats({}); setdata({tiles:null,level:null,num:null,start:0});settime(0)}} >
              <FaArrowLeft size={16} />
            </div>
          </div>
          
        }
        {stats.game==0&&
        (<div className='stats' style={{backgroundColor:stats.remark=='YOU WIN'?'green':'red'}} >
            {stats.remark=='YOU WIN'?<FaThumbsUp className='statsimage' size={'40%'} />:<FaThumbsDown className='statsimage' size={'40%'} />}
            <div>
            <div className='statsbutton' onClick={()=>{setstats({}); setdata({tiles:null,level:null,num:null,start:0});settime(0)}} >
              <FaArrowLeft size={16} />
            </div>
            <div className='statsdata'>
              <div className='statsdatavalue' >
                <div>Total Games : {Math.round(cookie['data']['Stats'].totalgames)} </div>
                <div>Games Won: {Math.round(cookie['data']['Stats'].won)} </div>
                <div>Best Time: {cookie['data']['Stats'].besttime} </div>
              </div>
              <div className='statsdatavalue' >
                <div>Cards Flipped : {cookie['data']['Stats'].flips} </div>
                <div>Matched Pairs : {cookie['data']['Stats'].cards} </div>
                <div>Best Time:</div>
             </div>
              </div>
          
            <div className='statsdes' style={{fontWeight:'bold',top:'2%'}} >{stats.remark} </div>
            <div className='statsdes' style={{fontSize:18}} >{'TIME : '+Math.round(stats.gametime*10)/10} </div>
            </div>
          </div>)
        }
    </div>
  );
}

export default (App);
