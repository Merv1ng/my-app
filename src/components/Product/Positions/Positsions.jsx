import Positsion from './Position/Position';
import s from './Positsions.module.css'


const Positsions = (props) => {

  
  return (
    
    <div className={s.positsions}>
      <Positsion photo={<img src="https://sochi.mirplatev.ru/wa-data/public/shop/products/91/20/2091/images/2510/2510.280x400.jpg" alt="" /> } 
       description={<div>The dress 1</div>} 
       price={<div>Price 1</div>} />
      <Positsion photo={<img src="https://candy-style.com.ua/image/cache/catalog/seventeen/1600525/7b4b9aa8913834a4572e81661ebeda7d-398x597.jpg" alt="" />} 
       description={<div>The dress 2</div>} 
       price={<div>Price 2</div>}/>
      <Positsion photo={<img src="https://images.wbstatic.net/big/new/4790000/4791765-1.jpg" alt="" />}  
      description={<div>The dress 3</div>} 
      price={<div>Price 3</div>}/>
      <Positsion photo={<img src="https://www.dhresource.com/0x0/f2/albu/g4/M01/65/CD/rBVaEFdGceyAa14YAAHHJ6vbhN8766.jpg" alt="" />}  
      description={<div>The dress 4</div>} 
      price={<div>Price 4</div>}/>
      <Positsion photo={<img src="https://www.vitoricci.ru/images/131338556066927187-0.jpg" alt="" />}  
      description={<div>The dress 5</div>} 
      price={<div>Price 5</div>}/>
      <Positsion photo={<img src="https://images.wbstatic.net/big/new/4890000/4894398-1.jpg" alt="" />}  
      description={<div>The dress 6</div>} 
      price={<div>Price 6</div>}/>
    </div>
  )
}

export default Positsions;