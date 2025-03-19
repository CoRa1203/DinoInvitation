import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import mainImg from "./../src/img/mainImg.jpg";
import whereImg from "./img/where.jpg";
import foodImg from "./img/food.jpg";
import guestsImg from "./img/guests.jpg";
import dressImg from "./img/dress.jpg";
import programmImg from "./img/programm.jpg";
import giftImg from "./img/gift.jpg";
import Modal from "./components/modal/Modal";


function App() {
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    content: null,
    accordionData: [], // Добавляем данные для аккордеонов
  }); /*хранятся данные для можального окна*/

  const openModal = (title, content, accordionData,  modalText) => {
    setModalData({ title, content, accordionData, modalText});
    setVisible(true);
  }; /*Принимает заголовок и контент для модального окна. Устанавливает состояние modalData и делает модальное окно видимым.*/

  return (
    <div className="App">
      <div className="container">
        <h1 className="h1">
          Приглашение на ежегодное празднование, появления на свет этого
          динозаврика - очень много лет назад до нашей эры в 14.00 <br />
          <span className="smallText">
            14.00 - во сколько нужно приходить :D
          </span>
        </h1>
        <div className="content">
          <img className="photo" src={mainImg} alt="photoMain" />
          <div className="button-container1">
            <button
              onClick={() =>
                openModal("Где?", <img src={whereImg} className="gift" alt="где" />, [
                  { title: "В п   .   .   .   .", content: <p>постоянном месте обитания динозаврика - у него в пещерке.</p> },

                ])
              }
              className="info-block block1"
            >
              Где
              <img
                className="hoverPhoto info-block-photo "
                src={whereImg}
                alt="hoverPhoto"
              />
            </button>
          </div>
          <div className="button-container2">
            <button
              onClick={() =>
                openModal("Еда", <img src={foodImg} className="gift" alt="еда" />, [], 'Питаемся исключительно энергией солнца, т.к у динозаврика короткие ручки и он не может ничего приготовить.' )
              }
              className="info-block block2"
            >
              Еда
              <img
                className="hoverPhoto2 info-block-photo "
                src={foodImg}
                alt="hoverPhoto"
              />
            </button>
          </div>
          <div className="button-container3">
            <button
              onClick={() =>
                openModal("Дресс-код", <img src={dressImg} className="gift" alt="дресс-код" />, [], 'Надейвайте все, что нравится')
              }
              className="info-block block3"
            >
              Дресс-код
              <img
                className="hoverPhoto3 info-block-photo "
                src={dressImg}
                alt="hoverPhoto"
              />
            </button>
          </div>
          <div className="button-container4">
            <button
              onClick={() =>
                openModal("Программа", <img src={programmImg} className="gift" alt="программа" />, [], '1) Встреча гостей-динозавров;\n2) Игра "Кто громче рычит?"; \n3) Конкурс "Самый большой след";\n4) Охота на добычу";\n5) Праздничный пир";\n6) Завершение праздника - Финальное рычание в честь именинника;')
              }
              className="info-block block4"
            >
              Программа
              <img
                className="hoverPhoto4 info-block-photo "
                src={programmImg}
                alt="hoverPhoto"
              />
            </button>
          </div>
          <div className="button-container5">
            <button
              onClick={() =>
                openModal("Доп.люди", <img src={guestsImg} className="gift" alt="доп.гости" />, [], 'Вход строго по приглашению!')
              }
              className="info-block block5"
            >
              Доп.люди
              <img
                className="hoverPhoto5 info-block-photo "
                src={guestsImg}
                alt="hoverPhoto"
              />
            </button>
          </div>
          <div className="button-container6">
            <button
              onClick={() =>
                openModal("Подарок", <img src={giftImg} className="gift" alt="подарок" />, [], '1) Свежая еда ;\n2) Новый вулкан - Декоративный вулкан, который можно "активировать" (например, с помощью дыма или звуков); \n3) Украшения для территории - Красивые камни, ракушки или растения, чтобы украсить территорию;\n4) Игрушка для развлечений - Огромный мяч, с которым можно играть, или макет добычи, которую можно "охотить"; \n5) Камень с отпечатком древнего растения или животного')
              }
              className="info-block block6"
            >
              Подарок
              <img
                className="hoverPhoto6 info-block-photo "
                src={giftImg}
                alt="hoverPhoto"
              />
            </button>
          </div>
        </div>
        <div className="lowerInfo">
          <div className="lowerInfoContent">
            <h1>Придешь к динозаврику на праздник? </h1>
            <div className="submitBtns">
           <a href="https://web.telegram.org/a/" className="contactLink"><Button text="Да" /></a> 
           <a href="https://web.telegram.org/a/" className="contactLink"><Button text="Нет" /></a> 
            </div>
          </div>
        </div>
      </div>
      <Modal
        visible={visible}
        setVisible={setVisible}
        title={modalData.title}
        accordionData={modalData.accordionData}
        modalText={modalData.modalText}
      >
        {modalData.content}

      </Modal>
    </div>
  );
}

export default App;
