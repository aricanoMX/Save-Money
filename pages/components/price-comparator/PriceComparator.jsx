export default function PriceComparator() {
  return (
    <div className="container">
      <p className="container__description">MacBook Pro Portable Silver 33.8 cm (13.3 ") 2560 x 1600 pixels 8th generation Intel® Core i5 8 GB LPDDR3-</p>
      <p className="container__price">1,192.57</p>
      <p className="container__delivery">Delivery time: 7-8 working days</p>
      <div>
        <img className="container__img" src="/ebay-ar21.svg" alt="logo-plataforma" />
        <span className="container__opinions">19 opiniones</span>
      </div>
      <div className="container__btn">
        <button type="button">VIEW DEAL</button>
      </div>
      <style jsx>{`
          .container{
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            align-items: center;
          }
          .container__description{
            font-size: 14px;
            color: #035582;
            font-weight: 400;
            text-align: center;
          }
          .container__price{
            font-size: 24px;
            color: #035582;
            font-weight: 700;
            text-align: center;
          }
          .container__delivery{
            font-size: 16px;
            color: #035582;
            font-weight: 400;
            text-align: center;
          }
          .container div{
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .container__img{
            object-fit: contain;
          }
          .container__btn button{
            text-align: center;
            width: 150px;
            height: 31px;
            background-color: #4FB50D;
            color: #fff;
            border-radius: 20px;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
          }
          .container__btn button:hover{
            background-color: #00452A;
          }
        `}</style>
    </div>
  );
}