import  PriceComparator from  "../price-comparator/PriceComparator"

import imgDescription from '../../../src/assets/images/descriptionPage/img-description.svg'
import img1 from '../../../src/assets/images/descriptionPage/image1.svg'
import img2 from '../../../src/assets/images/descriptionPage/image2.svg'
import img3 from '../../../src/assets/images/descriptionPage/image3.svg'
import img4 from '../../../src/assets/images/descriptionPage/image4.svg'

const ProductDescription = () => {
  return (
    <>
    <div className="container">
      <section>
        <div>
          <img src={imgDescription} alt="Descripcion del producto" />
          <div className="container__img">
            <img src={img1} alt="Producto relacionado" />
            <img src={img2} alt="Producto relacionado" />
            <img src={img3} alt="Producto relacionado" />
            <img src={img4} alt="Producto relacionado" />
          </div>
          <div className="container__pricehistory">
            <span>Aqui iría el historial de precios</span>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1 className="container__title">Laptop Apple Macbook Air 256gb - 13 </h1>
          <h2 className="container__price">$1.485.oo</h2>
          <p className="container__price-description">Prices and shipping USD $1.485.oo delivery available availability in stock</p>
        </div>
        <div>
          <p className="container__title-description">
              Description
          </p>
          <p className="container__description">
              The MacBook Air battery lasts up to 12 hours on a single charge, so you can work from morning until you get back from the office without charging. And if you want to relax, you have up to 12 hours of charge to watch movies on iTunes. Plus, since you can put it on standby for up to 30 days, you can go weeks without using it and then pick up from where you left off.
              SSD storage. Fast per system.
              
              MacBook Air SSD storage is up to 17 times faster than a 5,400 rpm hard drive. Thanks to this system and the fifth generation Intel Core processors, the MacBook Air is activated instantly and responds to any task in the blink of an eye.
          </p>
        </div>
        <button className="container__btn" type="button">SEE PRODUCT</button>
      </section>
      </div>
      <section className="wrapper__comparator">
        <h3>Price comparator</h3>
        <div className="comparator">
          <PriceComparator />
          <PriceComparator />
          <PriceComparator />
          <PriceComparator />
          <PriceComparator />
        </div>
      </section>
      <style jsx>{`
          .container{
            padding: 0px 50px;
            display: grid;
            grid-template-columns: 40% 60%;
          }
          .container__img{
          }
          .container__img img{
            width: 70px;
            height: 70px;
            margin: 0px 5px;
            padding: 5px;
            border: solid 0.5px #ccc;
            border-radius: 5px;
            cursor: pointer;
          }
          .container__pricehistory{
            margin: 60px 0px;
          }
          .container__pricehistory span{
            text-align: center;
          }
          .container__title{
            font-size: 24px;
            font-weight: 700;
            color: #035582;
          }
          .container__price{
            font-size: 28px;
            font-weight: 700;
            color: #035582;
          }
          .container__price-description{
            font-weight: 700;
            color: #035582;
          }
          .container__title-description{
            color: #035582;
            font-size: 16px;
          }
          .container__description{
            color:  #3E93C1;
            font-size: 16px;
          }
          .container__btn{
            background-color: #4FB50D;
            color: #fff;
            border-radius: 20px;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
          }
          .container__btn:hover{
            background-color: #00452A;
          }
          .wrapper__comparator{
            padding: 0px 50px;
          }
          .comparator{
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 20px;
          }
          .wrapper__comparator h3{
            color: #F7B733;
          }
          @media only screen and (max-width: 600px){
            .wrapper__comparator{
              padding: 0px 10px;
            }
          }
        `}</style>
    </>
  );
};


export default ProductDescription;

