import {React,useState} from 'react'
import '../css/cards.css'
import $ from 'jquery'
import google from '../images/google.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import chrome from '../images/chrome.png'
import apple from '../images/apple.png'
import youtube from '../images/youtube.png'
import tick from '../images/tick.png'
import {} from 'react-icons/fa'
function Cards({num,id,game,jj,load,setload,stats}) {
  const[click,setclick]=useState(2)
  if(load){
    setTimeout(()=>{
      for(let j=0;j<Object.keys(game).length;j++){
        if(game[j+1].status<3){
        game[j+1].status=1;
        game[j+1].click=0;
        $('#'+id).css({
          'transform':'rotateY('+0+'deg)',
          // 'width':game[jj].click +1)*60   
      'background-color':'#ffc400'
        })
        }
      else{
        game[j+1].click=2;
      $('#'+(j+2)).css({
        'transform':'rotateY('+0+'deg)',
        // 'width':game[jj].click +1)*60   
        'background-color': 'transparent'
      })
        $('#image'+id).attr('src',"")
      }
      setload(0)
    }
  },400)
  }
  return (
    <div className='cardouter' >
    <div className='card' id={id} style={{width:(99/num)+'vw'}}  onClick={()=>{
      if(game[jj].status<3&&stats.game)
      {setclick(click+1)
      game[jj].status%=2;
      game[jj].status++;
      $('#'+id).css({
        'transform':'rotateY('+180+'deg)',
        // 'width':game[jj].click +1)*60   
        'background-color': 'rgb(98, 46, 153)'
    
      })}
    }} >
      {game[jj].status>=2&&<img src={require('../images/'+game[jj].img+'.png')} className='cardimage' id={'image'+id} />}
    </div>
    </div>
  )
}

export default (Cards)