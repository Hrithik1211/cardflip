import {React,useState} from 'react'
import '../css/bar.css'
function Bar({gametime,game,time,settime,stats,setupdate}) {
    
    if(time<gametime)
    {
        if(stats.flips<1){
            // setupdate(1);
            stats.game=0;
            stats.update=1;
            stats.gametime=Math.round(time*10)/10;
            stats.remark='Out of flips'
            settime(gametime)
        }
    setTimeout(()=>{
        settime(time+.1)
        stats.time+=.1
        stats.num=0;
        for(let j=0;j<Object.keys(game).length;j++){
            if(game[j+1].status==3){
                stats.num++
            }
            if(stats.num==game[1].tiles){
                stats.time=gametime;
                stats.gametime=Math.round(time*10)/10;
                // setupdate(1);
                stats.update=1;
                stats.game=0
                stats.remark='YOU WIN';
                settime(gametime)
            }
            
        }
    },100)}
    if(time>gametime){
        settime(parseInt(time))
        stats.update=1;
        stats.time=time
        stats.remark='Out of Time'
        // setupdate(1);
        stats.game=0
        stats.gametime=Math.round(time)

    }
  return (
      <div className='bar'>
          <div className='barinside' style={{width:100*time/gametime+"%"}} >
          </div>
      </div>
  )
}

export default Bar